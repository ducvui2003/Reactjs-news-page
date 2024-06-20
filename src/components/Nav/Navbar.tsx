import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import './Navbar.scss';
import { categoryList, toCategoryName } from '../../services/categoryService';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Theme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { Category } from '../../constraints/category';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuExtends from './MenuExtend';
import { motion } from 'framer-motion';
import { zIndex } from '../../config/zindex';

function Nav() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const style = {
    backgroundColor: 'background.paper',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.navbar,
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
            .slice(0, isMobile ? 3 : 8)
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
          <Divider
            orientation="horizontal"
            sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }}
          />
          <MenuExtends handleClose={() => setIsVisible(false)} />
        </Container>
        <Divider sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }} />
      </motion.div>
    </Box>
  );
}
export default Nav;
