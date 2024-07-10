export type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
export type MonthIntType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export const Months: MonthType[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export function MonthToInt(month: MonthType): MonthIntType {
    switch(month) {
        case 'Jan':
            return 1
        case 'Feb':
            return 2
        case 'Mar':
            return 3
        case 'Apr':
            return 4
        case 'May':
            return 5
        case 'Jun':
            return 6
        case 'Jul':
            return 7
        case 'Aug':
            return 8
        case 'Sep':
            return 9
        case 'Oct':
            return 10
        case 'Nov':
            return 11
        case 'Dec':
            return 12
    }
}