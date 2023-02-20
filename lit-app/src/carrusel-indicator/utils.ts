import { GetListType } from "./types";

export const getList: GetListType = (start, end) => {
  const list: number[] = [];
  for (let i = start; i < end; i++) {
    list.push(i);
  }
  return start >= 0 && end > 0 && list.length > 0 ? list : [0];
};
