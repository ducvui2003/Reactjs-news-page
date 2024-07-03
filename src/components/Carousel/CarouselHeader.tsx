import React from 'react';
import { Stack } from 'react-bootstrap';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Category } from '../../constraints/category';
import { toCategoryName } from '../../services/categoryService';
import { Link } from '@mui/material';

function CarouselHeader({ title }: { title: Category }) {
  return (
    <Stack direction="horizontal" className="justify-content-between">
      <Typography level="h2" component={'h2'} className={'my-2 text-uppercase'}>
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
