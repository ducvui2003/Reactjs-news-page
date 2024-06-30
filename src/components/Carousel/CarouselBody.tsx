import React from 'react';
import { Category } from '../../constraints/category';
import CategoryCarousel from './CategoryCarousel';

const categoryFirstLoading: Category[] = [
  Category.QUOC_TE,
  Category.LAO_DONG,
  Category.BAN_DOC,
  Category.GIAI_TRI,
];

function CarouselBody() {
  return (
    <div>
      {categoryFirstLoading.map((category: Category, index) => (
        <CategoryCarousel key={index} category={category} />
      ))}
    </div>
  );
}

export default CarouselBody;
