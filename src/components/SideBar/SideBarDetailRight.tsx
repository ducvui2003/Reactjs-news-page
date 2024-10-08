import React, { useEffect, useState } from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Category } from '../../constraints/category';
import { News } from '../../types/news.type';
import { getNewsByCategory } from '../../services/newsService';
import Stack from '@mui/material/Stack';
import CardHorizontal from '../Card/CardHorizontal';
import LoadingList from '../NewsList/LoadingList';
import CardVertical from '../Card/CardVertical';

function SideBarDetailRight({ category }: { category: Category }) {
    const style = {
        position: 'sticky',
        left: 0,
        top: '50px',
        paddingTop: '50px',
    };
    const [newsRelated, setNewsRelated] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    useEffect(() => {
        getNewsByCategory(category).then((news) => {
            const newsRemoveDescription = news
                .map((item) => {
                    return { ...item, description: '' };
                })
                .slice(0, 3);
            setNewsRelated(newsRemoveDescription);
            setLoading(false);
        });
    }, []);

    return (
        <Box sx={style}>
            <Typography gutterBottom variant={isMobile ? 'h4' : 'h3'}>
                Các bài báo liên quan
            </Typography>
            <Stack sx={{ position: 'static' }} spacing={3}>
                <LoadingList
                    data={newsRelated}
                    isLoading={loading}
                    renderItem={(item, isLoading, index) => (
                        isMobile ? <CardVertical isLoading={isLoading} news={item} key={index} /> :
                            <CardHorizontal isLoading={isLoading} news={item} key={index} />
                    )}
                    fakeItemCount={3}
                />
            </Stack>
        </Box>
    );
}

export default SideBarDetailRight;
