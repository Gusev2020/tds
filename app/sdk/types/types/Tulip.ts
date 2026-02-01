export type TSingleCssTulip = [number]
export type TDoubleCssTulip = [number, number]
export type TTripleCssTulip = [number, number, number]
export type TQuadroCssTulip = [number, number, number, number]
export type TCssTulip = TSingleCssTulip | TDoubleCssTulip | TTripleCssTulip | TQuadroCssTulip

export type TSerializedSingleCssTulip = `${number}px`
export type TSerializedDoubleCssTulip = `${number}px ${number}px`
export type TSerializedTripleCssTulip = `${number}px ${number}px ${number}px`
export type TSerializedQuadroCssTulip = `${number}px ${number}px ${number}px ${number}px`
export type TSerializedCssTulip = TSerializedSingleCssTulip | TSerializedDoubleCssTulip | TSerializedTripleCssTulip | TSerializedQuadroCssTulip