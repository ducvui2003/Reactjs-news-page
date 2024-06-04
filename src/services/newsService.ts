import {Category} from "../constraints/category";
import parserRSS from "../utils/parseRss";
import {News} from "../types/news.type";

const getNewsByCategory = (category: Category): Promise<News[]> => {
    return parserRSS(category).then((res: any) => {
        const rawNews = res.rss.channel.item;
        return convertToNew(rawNews);
    });
}
const convertToNew = (rawNews: any): News[] => {
    const domParser = new DOMParser();
    return rawNews.map((item: any) => {
        const doc = domParser.parseFromString(item.description["_cdata"], "text/html");
        const thumbnail = doc.body.querySelector("img")?.getAttribute("src") || "";
        const description = doc.body.textContent?.trim() || '';
        return {
            title: item.title["_cdata"],
            link: item.link["_text"],
            description: description,
            publishDate: new Date(item.pubDate["_text"]),
            thumbnail: thumbnail,
        }
    })
}
export {getNewsByCategory}