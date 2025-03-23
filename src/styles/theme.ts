
export const primaryColor = "#1C1C1E";
export const lightColor = "#7ed6e7";
export const activeColor = "#1b8398";
export const buttonColor = "#177082";
export const dangerBtnColor = "#dc3545";
export const succesBtnColor = "#28a745";


export const theme = {
    colors: {
      primary: "#1C1C1E", 
      secondary: "#7ed6e7", 
      background: "#1C1C1E", 
      text: "#FFFFFF", 
      border: "#808080", // Gray border
      success: "#dc3545", // Green success
      error: "#28a745", // Red error
    },
  
    typography: {
      heading1: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF" },
      heading2: { fontSize: 20, fontWeight: "600", color: "#FFFFFF" },
      body: { fontSize: 16, fontWeight: "normal", color: "#FFFFFF" },
      smallText: { fontSize: 12, fontWeight: "normal", color: "#CCCCCC" },
    },
  
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
      extraLarge: 32,
    },
  
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12,
    },
  };
  
  export type ThemeType = typeof theme;
  
