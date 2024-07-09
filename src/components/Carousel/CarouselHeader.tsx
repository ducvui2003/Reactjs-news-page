import React from 'react';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Category } from '../../constraints/category';
import { toCategoryName } from '../../services/categoryService';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';

function CarouselHeader({ title }: { title: Category }) {
    return (
        <Stack direction="row" justifyContent={'space-between'} pt={2} pb={1}>
            <Typography level="h2" component={'h2'} sx={{ textTransform: 'uppercase' }}>
                {toCategoryName(title) || ''}
            </Typography>
            <motion.div whileHover={{ scale: 1.2 }}>
                <Link to={`/category/${title}`} underline={'hover'} component={NavLink}>
                    Xem thêm
                </Link>
            </motion.div>
        </Stack>
    );
}

export default CarouselHeader;
