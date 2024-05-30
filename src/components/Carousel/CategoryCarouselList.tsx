import React from "react";
import {Category} from "../../constraints/category";
import CategoryCarousel from "./CategoryCarousel";

const categoryFirstLoading: Category[] = [
  Category.QUOC_TE,
  Category.LAO_DONG,
  Category.BAN_DOC,
  Category.THOI_SU,
  // Category.KINH_TE,
  // Category.GIAO_DUC,
  // Category.SUC_KHOE,
  // Category.PHAP_LUAT,
  // Category.VAN_HOA_VAN_NGHE,
  Category.GIAI_TRI
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
