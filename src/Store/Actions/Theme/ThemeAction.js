import { DARK, LIGHT } from "./ThemeActionTypes";

const dark = () => ({
  type: DARK,
});

const light = () => ({
  type: LIGHT,
});

export { dark, light };
