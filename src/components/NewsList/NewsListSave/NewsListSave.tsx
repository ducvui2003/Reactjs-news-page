import { Grid } from '@mui/material';
import { getNewsById } from '../../../services/newsService';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import NewsItemSave from './NewsItemSave';
import React, { useEffect, useState } from 'react';
import { News } from '../../../types/news.type';
import Empty from '../../Empty/Empty';

const NewsListSave: React.FC = () => {
    const listIdNewsSave = useSelector((state: RootState) => state.news);
    const [listNews, setListNews] = useState<News[]>([]);

    useEffect(() => {
        document.title = 'Bài báo yêu thích';
    }, []);

    useEffect(() => {
        const fetchNews = () => {
            Promise.all(listIdNewsSave.map((id) => getNewsById(id)))
                .then((newsData) => {
                    // @ts-ignore
                    setListNews(newsData);
                })
                .catch((err) => {
                    console.error('Failed to fetch news data', err);
                });
        };

        fetchNews();
    }, [listIdNewsSave]);

    if (!listNews.length) return <Empty />;
    return (
        <Grid container spacing={3}>
            {listNews.map((news) => (
                <Grid item xs={12} sm={6} md={4} key={news.id}>
                    <NewsItemSave
                        id={news.id}
                        title={news.title}
                        thumbnail={news.thumbnail}
                        publishDate={news.publishDate}
                        description={news.description}
                        link={news.link}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NewsListSave;
