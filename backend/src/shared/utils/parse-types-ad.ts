import {
  AnnouncementStatus,
  ProductCondition
} from '../types/announcement-types'

export function parseAnnouncementStatus(
  status: string
): AnnouncementStatus | null {
  try {
    if (status) {
      const upperStatus = status.toUpperCase()
      console.log(upperStatus)
      if (upperStatus == AnnouncementStatus.ACTIVE) {
        return AnnouncementStatus.ACTIVE
      } else if (upperStatus == AnnouncementStatus.SOLD) {
        return AnnouncementStatus.SOLD
      } else if (upperStatus == AnnouncementStatus.INACTIVE) {
        return AnnouncementStatus.INACTIVE
      } else if (upperStatus == AnnouncementStatus.EXPIRED) {
        return AnnouncementStatus.EXPIRED
      }
    }

    return null
  } catch (error) {
    throw new Error(`Invalid AnnouncementStatus: ${status}`)
  }
}

export function parseAnnouncementCondition(
  condition: string
): ProductCondition | null {
  try {
    if (condition) {
      const upperCondition = condition.toUpperCase()

      if (upperCondition == ProductCondition.NEW) {
        return ProductCondition.NEW
      } else if (upperCondition == ProductCondition.USED) {
        return ProductCondition.USED
      } else if (upperCondition == ProductCondition.REFURBISHED) {
        return ProductCondition.REFURBISHED
      } else if (upperCondition == ProductCondition.REFURBISHED) {
        return ProductCondition.REFURBISHED
      }
    }

    return null
  } catch (error) {
    throw new Error(`Invalid ProductCondition: ${condition}`)
  }
}
