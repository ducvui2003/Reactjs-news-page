import { News } from '../../../types/news.type';
import React from 'react';
import { motion } from 'framer-motion';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsave } from '../../../features/thenews/news.slice';
import { DeleteRounded } from '@mui/icons-material';
import { toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import ClampedTypography from '../../Typography/ClampedTypography';

export default function NewsItemSave({
                                         id,
                                         title,
                                         thumbnail,
                                     }: News) {
    const dispatch = useDispatch();
    console.log(thumbnail);
    const handleDeletedNews = (id?: string) => {
        if (id) {
            dispatch(unsave(id));
            toast.success('Đã xóa bài báo: ' + id);
        }
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <CardActions>
                <Card sx={{ maxWidth: '100%' }}>
                    <CardMedia component={'img'} sx={{ height: 140 }} image={thumbnail} title={title} />
                    <CardContent>
                        <ClampedTypography lineClamp={2} gutterBottom variant="h4" component="div">
                            {title}
                        </ClampedTypography>
                        <Stack direction="row" spacing={2}>
                            <Button
                                component={NavLink}
                                to={`/detail/${id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                Xem chi tiết
                            </Button>
                            <Button
                                size="small"
                                onClick={() => handleDeletedNews(id)}
                                sx={{
                                    '&:hover .MuiSvgIcon-root': {
                                        color: 'red',
                                    },
                                }}
                            >
                                <DeleteRounded sx={{ color: '#757575' }} />
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </CardActions>
        </motion.div>
    );
}
