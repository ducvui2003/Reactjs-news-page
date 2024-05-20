import parserRSS from "../../utils/parseRss";

export interface News {
    title: string,
    imgLink: string,
    shortDes: string
}

export function getNews(cate:string) {
    const newsList =  parserRSS(cate);
    return newsList;
}