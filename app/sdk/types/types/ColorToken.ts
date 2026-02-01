export type SpecialColorToken = 'transparent' | 'black' | 'white' | 'backdrop' | 'box-shadow'
export type TonicColorToken = 'space' | 'black' | 'brand' | 'action' | 'danger' | 'warning' | 'success'
export type SurfaceColorToken = `${TonicColorToken}-surface`
export type SurfaceItemColorToken = `${TonicColorToken}-surface-item`
export type ColorTokenRole = 'primary' | 'secondary' | 'outline' | 'outline-strong' | 'outline-stroke'
export type FillColorToken = TonicColorToken | SurfaceColorToken | SurfaceItemColorToken

export type TextColorToken =
    `${TonicColorToken}-primary` |
    `${TonicColorToken}-secondary` |
    `${SurfaceColorToken}-primary` |
    `${SurfaceColorToken}-secondary` |
    `${SurfaceItemColorToken}-primary` |
    `${SurfaceItemColorToken}-secondary`
    ;

export type OutlineColorToken =
    `${TonicColorToken}-outline` |
    `${TonicColorToken}-outline-strong` |
    `${TonicColorToken}-outline-stroke` |
    `${SurfaceColorToken}-outline` |
    `${SurfaceColorToken}-outline-strong` |
    `${SurfaceColorToken}-outline-stroke` |
    `${SurfaceItemColorToken}-outline` |
    `${SurfaceItemColorToken}-outline-strong` |
    `${SurfaceItemColorToken}-outline-stroke`
    ;

export type ReactionColorToken =
    `${TonicColorToken}-hover` |
    `${TonicColorToken}-press` |
    `${TonicColorToken}-active` |
    `${SurfaceColorToken}-hover` |
    `${SurfaceColorToken}-press` |
    `${SurfaceColorToken}-active` |
    `${SurfaceItemColorToken}-hover` |
    `${SurfaceItemColorToken}-press` |
    `${SurfaceItemColorToken}-active`
    ;

export type ColorToken =
    SpecialColorToken |
    TonicColorToken |
    SurfaceColorToken |
    SurfaceItemColorToken |
    TextColorToken |
    OutlineColorToken |
    ReactionColorToken
    ;

export type TReactionColor = {
    hover: string,
    press: string,
    active: string
}