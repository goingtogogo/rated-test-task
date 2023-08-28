import { DEFAULT_PAGE } from "../constants";

export const getPage = (page?: string | number | string[]) => {
  const nPage = Number(page);
  if (nPage) {
    if (nPage > 0) {
      return nPage;
    }
  }

  return DEFAULT_PAGE + 1
}