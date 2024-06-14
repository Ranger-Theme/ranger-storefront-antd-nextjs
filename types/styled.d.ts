import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    prefix: string
    colors: {
      primary: string
      white: string
      black: string
    }
    breakPoint: {
      '3xs': number
      '2xs': number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      '2xl': number
      '3xl': number
      '4xl': number
    }
  }
}
