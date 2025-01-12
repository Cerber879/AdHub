import { BadRequestException, Logger } from '@nestjs/common';
import { Prisma, PrismaClient } from '../../../prisma/generated';

import { USERS } from './data/users';
import { CATEGORIES } from './data/categories';
import { CHARACTERISTICS } from './data/characteristics';
import { ANNOUNCEMENTS } from './data/announcements';
import { ANNOUNCEMENT_CHARACTERISTICS } from './data/dataCharacteristics';
// import { REVIEWS } from './data/reviews';
// import { SOCIAL_LINKS } from './data/socialLinks';
// import { CHATS } from './data/chats';
import { PHOTOS } from './data/photos';
// import { FAVOURITES } from './data/favourites';

const prisma = new PrismaClient({
	transactionOptions: {
		maxWait: 5000,
		timeout: 10000,
		isolationLevel: Prisma.TransactionIsolationLevel.Serializable
	}
});

async function main() {
	try {
		Logger.log('Начало заполнения базы данных');

		// Очищаем таблицы
		await prisma.$transaction([
			prisma.user.deleteMany(),
			prisma.socialLink.deleteMany(),
			prisma.category.deleteMany(),
			prisma.announcement.deleteMany(),
			prisma.review.deleteMany(),
			prisma.chat.deleteMany(),
			prisma.photo.deleteMany(),
			prisma.characteristic.deleteMany(),
			prisma.announcementCharacteristic.deleteMany(),
			prisma.favourites.deleteMany()
		]);

		// Заполнение категорий
		await prisma.category.createMany({
			data: CATEGORIES
		});
		Logger.log('Категории успешно созданы');

		// Заполнение пользователей
		await prisma.user.createMany({
			data: USERS
		});
		Logger.log('Пользователи успешно созданы');

		// Заполнение характеристик
		await prisma.characteristic.createMany({
			data: CHARACTERISTICS
		});
		Logger.log('Характеристики успешно созданы');

		// Заполнение объявлений
		await prisma.announcement.createMany({
			data: ANNOUNCEMENTS
		});
		Logger.log('Объявления успешно созданы');

		// Заполнение характеристик объявлений
		await prisma.announcementCharacteristic.createMany({
			data: ANNOUNCEMENT_CHARACTERISTICS
		});
		Logger.log('Характеристики для объявлений успешно созданы');

		// // Заполнение отзывов
		// await prisma.review.createMany({
		// 	data: REVIEWS
		// });
		// Logger.log('Отзывы успешно созданы');

		// // Заполнение социальных ссылок
		// await prisma.socialLink.createMany({
		// 	data: SOCIAL_LINKS
		// });
		// Logger.log('Социальные ссылки успешно созданы');

		// // Заполнение чатов
		// await prisma.chat.createMany({
		// 	data: CHATS
		// });
		// Logger.log('Чаты успешно созданы');

		// Заполнение фото
		await prisma.photo.createMany({
			data: PHOTOS
		});
		Logger.log('Фото успешно созданы');

		// // Заполнение избранного
		// await prisma.favourites.createMany({
		// 	data: FAVOURITES
		// });
		// Logger.log('Избранные объявления успешно созданы');

		Logger.log('Заполнение базы данных завершено успешно');
	} catch (error) {
		Logger.error(error);
		throw new BadRequestException('Ошибка при заполнении базы данных');
	} finally {
		Logger.log('Закрытие соединения с базой данных...');
		await prisma.$disconnect();
		Logger.log('Соединение с базой данных успешно закрыто');
	}
}

main();
