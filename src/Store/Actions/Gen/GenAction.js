import { CHOOSE_GEN } from "./GenActionTypes";

const chooseGen = (payload) => ({
  type: CHOOSE_GEN,
  payload: { currentGen: payload },
});

export { chooseGen };
