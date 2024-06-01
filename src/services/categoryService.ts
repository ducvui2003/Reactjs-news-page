import {Category} from "../constraints/category";

export const categoryExist = (categoryValue: string | undefined): boolean => {
    if (categoryList.includes(categoryValue as Category)) {
        return true;
    }
    return false;
};

export  const toCategory = (value: string ): Category  => {
    if (categoryList.includes(value as Category)) {
        return value as Category;
    }
    return Category.NULL;
}
export const categoryList: Category[] = Object.values(Category);
