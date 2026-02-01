import type { TCssTulip, TSerializedCssTulip } from "../types/types/Tulip"
import { wrap } from "./array"

export function getOpacityPercent(value: any): number | undefined {
    let opacity = parseInt(value)

    if (isNaN(opacity)) return

    if (opacity > 100) {
        opacity = 100
    } else if (opacity < 0) {
        opacity = 0
    }

    return opacity
}

export function getPercent(value: any): `${number}%` | undefined {
    return typeof value === 'number'
        ? `${value}%`
        : undefined
}

export function getCssTulipRule(value: number | TCssTulip): TSerializedCssTulip {
    const input = wrap(value) as TCssTulip

    switch (input.length) {
        case 1:
            return `${input[0]}px`
        case 2:
            return `${input[0]}px ${input[1]}px`
        case 3:
            return `${input[0]}px ${input[1]}px ${input[2]}px`
        default:
            return `${input[0]}px ${input[1]}px ${input[2]}px ${input[3]}px`
    }
}

export function getPx(value: any): `${number}px` | undefined {
    return typeof value === 'number'
        ? `${value}px`
        : undefined
}


export function getOverflow(overflow: boolean): 'hidden' | undefined {
    return overflow ? 'hidden' : undefined
}