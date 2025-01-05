import { AnnouncementStatus, ProductCondition } from '../../../backend/prisma/generated'
import { conditionMap, statusMap } from '../modules/types'

export function parseAnnouncementStatus(status: AnnouncementStatus | undefined): string  {
    try {
        if(status) {
            return statusMap[status]
        }
    } catch (error) {
        throw new Error(`Invalid AnnouncementStatus: ${status}`);
    }

    return ''
}
  
export function parseAnnouncementCondition(condition: ProductCondition | undefined): string {
    try {
        if(condition) {
            return conditionMap[condition]
        }
    } catch (error) {
        throw new Error(`Invalid ProductCondition: ${condition}`);
    }

    return ''
}