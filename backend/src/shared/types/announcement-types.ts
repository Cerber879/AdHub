import { registerEnumType } from '@nestjs/graphql'

export enum ProductCondition {
  NEW = 'NEW',
  USED = 'USED',
  ALL = 'ALL'
}

registerEnumType(ProductCondition, {
  name: 'ProductCondition',
  description: 'Состояние товара'
})

export enum AnnouncementStatus {
  ACTIVE = 'ACTIVE',
  SOLD = 'SOLD',
  INACTIVE = 'INACTIVE',
  EXPIRED = 'EXPIRED'
}

registerEnumType(AnnouncementStatus, {
  name: 'AnnouncementStatus',
  description: 'Статус объявления'
})
