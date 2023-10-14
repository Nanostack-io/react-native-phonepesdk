import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#6739B7", //purple
    primary1: "#9DCEFF",
    transparentPrimray: 'rgba(227, 120, 75, 0.2)',
    secondary: "#C58BF2",
    thirdary: "rgba(157, 206, 255, 0.6)",
    purpule: "#ae1187",
    orange: "#FF8473",
    lightRed: "#FF6666",
    lightRed2: "#FDDED4",
    lightRed3: '#FFFAFA',
    lightRed4: '#F28B8B',
    green: "#27AE60",
    transparentGreen: "rgba(39, 174, 96, 0.87)",
    red: "#ef4444",
    blue: '#0064C0',
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    darkGray3: "#555555",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#D9D9D9',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    lightGray3: "#F6F6F6",
    while3: "#FCFCFC",
    white3: "#FBFBFB",
    white2:"#F6F6F6",
    white: '#FFFFFF',
    black: "#000000",
    black2: "#5B5858",
    blackLight: "#4F4F4F",
    black3: "#333333",
    transparent: 'transparent',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)",
    yellow:"#F4BD46"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-ExtraBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 36 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const FONTS1 = {
    fourHundred: { fontFamily: "Poppins-Regular" },
    fiveHundred: { fontFamily: "Poppins-Medium" },
    sixHundred: { fontFamily: "Poppins-SemiBold" },
    sevenHundred: { fontFamily: "Poppins-Bold" },
    eightHundred: { fontFamily: "Poppins-ExtraBold" },
    nineHundred: { fontFamily: "Poppins-Black" },
}


const appTheme = { COLORS, SIZES, FONTS, FONTS1 };

export default appTheme;
