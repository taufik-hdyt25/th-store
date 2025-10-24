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
    myColor: {
      primary: "var(--primary) ",
      secondary: "var(--secondary)",
      text: "var(--text)",
      bg: "var(--bg)",
      "bg-sidebar": "var(--bg-sidebar)",
      "bg-content": "var(--bg-content)",
      "text-inActive": "var(--text-inActive)",
    },
  },
  components: {
    Button,
  },
});

export default myCustomTheme;
