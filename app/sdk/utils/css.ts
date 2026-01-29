export function getOpacityPercent(value: any): number | undefined {
    let opacity = parseInt(value)

    if(isNaN(opacity)) return

    if(opacity > 100) {
        opacity = 100
    } else if (opacity < 0) {
        opacity = 0
    }

    return opacity
}

export function getPercent(value: any) : `${number}%` | undefined {
    return typeof value === 'number'
        ? `${value}%`
        : undefined
}