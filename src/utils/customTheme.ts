import { mode } from "@chakra-ui/theme-tools";
import { Colors, extendTheme, StyleProps, ThemeConfig } from "@chakra-ui/react";

const colors = {
  bgSearch: "#D9D9D980",
  bgGeneral: "#FFFFFF",
  placeholder: "#00000099",
  icon: "#000000CC",
  navText: "#5A2C17",
  btnText: "#5A2C1799",
  cardBorder: "#DBDBDB",
  // Additional colors as per your provided list
  dark1: "#48474C",
  dark2: "#000000",
  dark3: "#000000CC",
  dark4: "#374382",
  dark5: "#83805E",
  dark6: "#996515",
  dark7: "#BE827D",
  dark8: "#F0B303",
  dark9: "#F5B503CC",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      bg: mode("white", "dark.900")(props),
      color: "dark.500",
      fontVariant: "normal",
    },
  }),
};

const customTheme = extendTheme({
  colors,
  config,
  styles,
});

export default customTheme;