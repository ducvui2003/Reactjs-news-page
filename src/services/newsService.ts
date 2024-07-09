import { Category } from '../constraints/category';
import parserRSS from '../utils/parseRss';
import { News, NewsDetail } from '../types/news.type';
import newsDetail from '../data/newsDetailData';

const getNewsById = (id: string): NewsDetail | undefined => {
  return newsDetail.find((news) => news.id == id);
};

const getNewsByCategory = (category: Category): Promise<News[]> => {
  return parserRSS(category).then((res) => {
    const rawNews = res.rss.channel.item;
    return convertToNews(rawNews);
  });
};

const getId = (longId: string) => {
  const lastHyphenIndex = longId.lastIndexOf('-');

  const extensionIndex = longId.lastIndexOf('.htm');

  return longId.substring(lastHyphenIndex + 1, extensionIndex);
};

const convertToNews = (rawNews: any): News[] => {
  const domParser = new DOMParser();
  return rawNews.map((item: any) => {
    const doc = domParser.parseFromString(
      item.description['_cdata'],
      'text/html',
    );
    const link = item.link['_text'];
    const thumbnail = doc.body.querySelector('img')?.getAttribute('src') || '';
    const description = doc.body.textContent?.trim() || '';
    const title = item.title['_cdata'];
    const id = getId(link);
    const publishDate = new Date(item.pubDate['_text']);
    return {
      id,
      title,
      link,
      description,
      publishDate,
      thumbnail,
    };
  });
};

const getNewsDetail = (news: News): NewsDetail | undefined => {
  const id = news.id.substring(news.id.length - 1, news.id.length);
  return newsDetail.find((item: NewsDetail) => item.id == id);
};

const getNewsListByIds = (ids: string[]): NewsDetail[] => {
    return newsDetail.filter(news => ids.includes(news.id));
};

export { getNewsByCategory, getNewsDetail, getNewsById, getNewsListByIds };
