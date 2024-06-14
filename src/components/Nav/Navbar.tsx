import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import './Navbar.scss';
import { categoryList, toCategoryName } from '../../services/categoryService';
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  Menu,
  Tooltip,
  useColorScheme,
} from '@mui/material';
import { Category } from '../../constraints/category';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuExtends from './MenuExtend';
import { motion } from 'framer-motion';

export default function Nav() {
  const theme = useTheme();
  const style = {
    backgroundColor: 'background.paper',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Box sx={style}>
      <Divider sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }} />
      <Container sx={{ paddingBlock: '16px' }}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignContent={'center'}
        >
          {categoryList
            .filter((category: Category) => category != Category.HOME)
            .slice(0, 8)
            .map((category, index) => (
              <Link
                component={NavLink}
                key={index}
                variant={'h6'}
                underline={'none'}
                color={'theme.palette.link.main'}
                to={`/category/${category}`}
              >
                {toCategoryName(category)}
              </Link>
            ))}
          <Tooltip title="Xem thêm" arrow>
            <IconButton sx={{ p: 0 }} onClick={toggleVisibility}>
              <ArrowDropDownIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Container>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: isVisible ? 'auto' : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        <Container>
          <Divider orientation="horizontal" />
          <MenuExtends />
        </Container>
        <Divider sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }} />
      </motion.div>
    </Box>
  );
}
