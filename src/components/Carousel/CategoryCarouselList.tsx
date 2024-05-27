import React from "react";
import { Category } from "../../constraints/category";
import CategoryCarousel from "./CategoryCarousel";

const categoryFirstLoading: Category[] = [
  Category.QUOC_TE,
  Category.LAO_DONG,
  Category.BAN_DOC,
];

function CategoryCarouselList() {
  return (
    <div>
      {categoryFirstLoading.map((category) => (
        <CategoryCarousel category={category} />
      ))}
    </div>
  );
}

export default CategoryCarouselList;
