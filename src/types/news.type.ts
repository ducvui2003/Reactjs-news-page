export interface News {
    id?: number | undefined,
    title?: string | undefined,
    link?: string | undefined,
    description?: string | undefined,
    publishDate: Date,
    thumbnail?: string | undefined,
}

export interface NewsDetail {
    id: string,
    title: string,
    author: string,
    publishDate: Date,
    thumbnail: string,
    paragraphs: Paragraph[];
}

export interface Paragraph {
    image?: Image
    text: string,
}

export interface Image {
    capture: string,
    link: string
}