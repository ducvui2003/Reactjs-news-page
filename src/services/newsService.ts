import {Category} from "../constraints/category";
import parserRSS from "../utils/parseRss";
import {News} from "../types/news.type";

const getNewsByCategory = (category: Category): Promise<News[]> => {
    return parserRSS(category).then((res: any) => {
        const rawNews = res.data.channel[0].item;
        return convertToNew(rawNews);
    });
}
const convertToNew = (rawNews: any): News[] => {
    const domParser = new DOMParser();
    return rawNews.map((item: any) => {
        const doc = domParser.parseFromString(item.description[0], "text/html");
        const thumbnail = doc.body.querySelector("img")?.getAttribute("src") || "";
        const description = doc.body.textContent?.trim() || '';
        return {
            title: item.title[0],
            link: item.link[0],
            description: description,
            publishDate: new Date(item.pubDate[0]),
            thumbnail: thumbnail,
        }
    })
}
export {getNewsByCategory}