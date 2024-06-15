import { Category, categoryName } from '../constraints/category';

export const categoryExist = (categoryValue: string | undefined): boolean => {
  if (categoryList.includes(categoryValue as Category)) {
    return true;
  }
  return false;
};

export const toCategory = (value: string): Category => {
  if (categoryList.includes(value as Category)) {
    return value as Category;
  }
  return Category.NULL;
};
export const categoryList: Category[] = Object.values(Category);

export const toCategoryName = (category: Category): string => {
  return categoryName[category];
};

export const getMatrixCategory = (start: number = 0): Category[][] => {
  const listCategory = categoryList.slice(start);
  const categoryMatrix: Category[][] = [];
  const COL = 4;
  const QUANTITY = listCategory.length;
  const ROW = Math.floor(QUANTITY / COL);
  let count = 0;
  for (let i = 0; i < COL; i++) {
    categoryMatrix[i] = [];
    for (let j = 0; j < ROW; j++) {
      categoryMatrix[i][j] = listCategory[count];
      count++;
    }
  }
  return categoryMatrix;
};
