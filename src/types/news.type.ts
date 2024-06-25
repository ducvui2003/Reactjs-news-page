import React from 'react';
import { Category } from '../constraints/category';

export interface News {
  id: string;
  title: string | undefined;
  link: string | undefined;
  description: string | undefined;
  publishDate: Date;
  thumbnail: string | undefined;
}

export interface NewsDetail
  extends Omit<News, 'link' | 'description' | 'thumbnail'> {
  author: string;
  paragraphs: Paragraph[];
  category: Category;
}

export interface Paragraph {
  image?: Image;
  text: string;
}

export interface Image {
  capture: string;
  link: string;
}

// Sử dụng cho component để loading
export interface NewsLoading {
  news?: News;
  isLoading: boolean;
  cssImage?: React.CSSProperties;
}
