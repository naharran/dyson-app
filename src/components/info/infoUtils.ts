import { NewsletterInfo } from "../type";

export const removeDuplicates = (
  current: NewsletterInfo[],
  next: NewsletterInfo[],
): NewsletterInfo[] => {
  const filterSet = new Set(current);
  const updateElement = next.filter((filter) => !filterSet.has(filter));
  current = current.concat(updateElement);
  return current;
};
