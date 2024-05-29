import { Category } from "../constraints/category";

export const categoryExist = (categoryValue: string): boolean => {
  return (
    categoryList.find((category) => {
      category === categoryValue;
    }) !== undefined
  );
};
export const categoryList: Category[] = Object.values(Category);
