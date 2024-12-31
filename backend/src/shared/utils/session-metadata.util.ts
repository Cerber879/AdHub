import type { Request } from 'express'
import { lookup } from 'geoip-lite'
import * as countries from 'i18n-iso-countries'

import type { SessionMetadata } from '../types/session-metadata.types'

import { IS_DEV_ENV } from './is-dev.util'

import DeviceDetector = require('device-detector-js')

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

import axios from 'axios';

async function getPublicIP(): Promise<string> {
	const response = await axios.get('https://api.ipify.org?format=json');
	return response.data.ip; 
}

export async function getSessionMetadata(
    req: Request,
    userAgent: string
): Promise<SessionMetadata> {
    const ip = IS_DEV_ENV
        ? await getPublicIP() // Явное ожидание строки
        : Array.isArray(req.headers['cf-connecting-ip'])
            ? req.headers['cf-connecting-ip'][0]
            : req.headers['cf-connecting-ip'] ||
                (typeof req.headers['x-forwarded-for'] === 'string'
                    ? req.headers['x-forwarded-for'].split(',')[0]
                    : req.ip);

    if (!ip || typeof ip !== 'string') {
        throw new Error('IP-адрес не определён');
    }

    const location = lookup(ip); // Гарантированно строка
    if (!location) {
        throw new Error('Не удалось определить местоположение');
    }

    const device = new DeviceDetector().parse(userAgent);

    return {
        location: {
            country: countries.getName(location.country, 'en') || 'Неизвестно',
            city: location.city || 'Неизвестно',
            latidute: location.ll[0] || 0,
            longitude: location.ll[1] || 0
        },
        device: {
            browser: device.client.name,
            os: device.os.name,
            type: device.device.type
        },
        ip
    };
}
