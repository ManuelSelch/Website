import { createCustomContext } from "./createCustomContext";

export const { Provider: ThemeProvider, useCustomContext: useThemeContext } =
  createCustomContext({
    endpoint: "/content/item/theme",
    initialState: null
});