import {
  AnnouncementStatus,
  ProductCondition,
} from '../../backend/prisma/generated'

export const conditionMap: Record<ProductCondition, string> = {
  NEW: 'Новый',
  USED: 'Б/у',
  REFURBISHED: 'Восстановленный',
}

export const statusMap: Record<AnnouncementStatus, string> = {
  ACTIVE: 'Активное',
  SOLD: 'Проданое',
  INACTIVE: 'Неактивное',
  EXPIRED: 'Просроченное',
}
