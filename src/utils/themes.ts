import { blue, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    themeName: 'defaultTheme',
    primaryColor: blue[100],
    primaryColorHover: blue[200],
    primaryColorActive: blue[500],
    primaryColorFocus: blue[300],
    primaryColorDisabled: neutral[300],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    

    secondaryColor: neutral[600],
    secondaryColorBorder: blue[100],
    secondaryColorHoverBorder: blue[200],
    secondaryColorActiveBorder: blue[500],
    secondaryColorFocusBorder: blue[300],
    secondaryColorDisabledBorder: neutral[300],

    tertiaryColor: neutral[500],
    tertiaryColorHover: neutral[400],
    tertiaryColorActive: neutral[300],
    tertiaryColorFocus: neutral[300],
    tertiaryColorDisabled: neutral[300],
    
    primaryFont,

    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],

    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}
export const darkTheme = {
    themeName: 'darkTheme',
    primaryColor: neutral[100],
    primaryColorHover: neutral[400],
    primaryColorActive: neutral[500],
    primaryColorFocus: neutral[300],
    primaryColorDisabled: neutral[300],
    textColorOnPrimary: blue[100],
    textColor: blue[500],
    textColorInverted: blue[100],
    

    secondaryColor: neutral[100],
    secondaryColorBorder: neutral[100],
    secondaryColorHoverBorder: neutral[200],
    secondaryColorActiveBorder: neutral[500],
    secondaryColorFocusBorder: neutral[300],
    secondaryColorDisabledBorder: neutral[300],

    tertiaryColor: neutral[300],
    tertiaryColorHover: neutral[400],
    tertiaryColorActive: neutral[300],
    tertiaryColorFocus: neutral[300],
    tertiaryColorDisabled: neutral[300],
    
    primaryFont,

    formElementBackground: blue[100],
    textOnFormElementBackground: neutral[100],

    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}