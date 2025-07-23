import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import "@fontsource/poppins";

const myCustomTheme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: "#799EFF",
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  components: {
    Button,
  },
});

export default myCustomTheme;
