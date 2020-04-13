import { SHOW, HIDE } from "./PaginationVisActionTypes";

const show = () => ({
  type: SHOW,
});

const hide = () => ({
  type: HIDE,
});

export { show, hide };
