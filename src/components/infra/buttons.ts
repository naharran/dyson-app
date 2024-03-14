import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const round = defineStyle({
  // change the appearance of the border
  borderRadius: 50, // remove the border radius
  fontSize: 14, // remove the font size
  fontFamily: "Rubik", // change the font weight
  backgroundColor: "#471BFF",
  color: "#FFFFFF",
});
const buttonXl = {
  buttonXl: {
    width: "88%",
  },
};
export const buttonTheme = defineStyleConfig({
  variants: { round },
  sizes: { buttonXl },
});
