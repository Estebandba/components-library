import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: blue[100],
    primaryColorHover: blue[200],
    primaryColorActive: blue[500],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],

    secondaryColor: neutral[600],
    secondaryColorBorder: blue[100],
    secondaryColorHoverBorder: blue[200],
    secondaryColorActiveBorder: blue[100],

    tertiaryColor: neutral[500],
    tertiaryColorHover: neutral[400],
    tertiaryColorActiveBorder: neutral[600],
    
    primaryFont,
}