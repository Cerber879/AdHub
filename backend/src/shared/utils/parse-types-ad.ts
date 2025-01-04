import { AnnouncementStatus, ProductCondition } from '../../../prisma/generated'
import { AnnouncementStatusType, ProductConditionType } from '../types/announcement-types'

export function parseAnnouncementStatus(status: string): AnnouncementStatus {
    try {
        const upperStatus = status.toUpperCase();

        if (upperStatus == AnnouncementStatusType.ACTIVE) {
            return AnnouncementStatus.ACTIVE
        } else if (upperStatus == AnnouncementStatusType.SOLD) {
            return AnnouncementStatus.SOLD
        } else if (upperStatus == AnnouncementStatusType.INACTIVE) {
            return AnnouncementStatus.INACTIVE
        } else if (upperStatus == AnnouncementStatusType.EXPIRED) {
            return AnnouncementStatus.EXPIRED
        }
    } catch (error) {
        throw new Error(`Invalid AnnouncementStatus: ${status}`);
    }

}
  
export function parseAnnouncementCondition(condition: string): ProductCondition {
    try {
        const upperCondition = condition.toUpperCase();

        if (upperCondition == ProductConditionType.NEW) {
            return ProductCondition.NEW
        } else if (upperCondition == ProductConditionType.USED) {
            return ProductCondition.USED
        } else if (upperCondition == ProductConditionType.REFURBISHED) {
            return ProductCondition.REFURBISHED
        } else if (upperCondition == ProductConditionType.REFURBISHED) {
            return ProductCondition.REFURBISHED
        }
    } catch (error) {
        throw new Error(`Invalid ProductCondition: ${condition}`);
    }
}