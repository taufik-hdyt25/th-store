import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "400",
    borderRadius: "7px",
    fontFamily: "body",
  },
  sizes: {
    sm: {
      px: "2",
      h: "7",
      lineHeight: "130%",
    },
    md: {
      px: "4",
      h: "10",
      fontSize: "sm",
    },
    lg: {
      px: "6",
      h: "44px",
      fontSize: "md",
      lineHeight: "44px",
    },
    xl: {
      px: "8",
      h: "54px",
      fontSize: "md",
    },
  },
  variants: {
    solid: {
      bg: "primary",
      color: "white",
      fontWeight: "600",
      _hover: {
        bg: "primary",
      },
    },
    ghost: {},
    danger: {},
    info: {},
    link: {},
    outline: {
      color: "white",
      fontWeight: "600",
      _hover: {
        bg: "primary",
      },
    },
  },
};
