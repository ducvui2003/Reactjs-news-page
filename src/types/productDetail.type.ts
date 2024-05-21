export interface ProductDetail {
    title: string,
    author: string,
    publishDate: Date,
    thumbnail: string,
    paragraphs: Paragraph[];
}

interface Paragraph {
    text: string,
    image: string
}