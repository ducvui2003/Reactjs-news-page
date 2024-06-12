import React from 'react';
import Stack from '@mui/material/Stack';
import './Navbar.scss';
import { categoryList, toCategoryName } from '../../services/categoryService';
import NavLinkMUILink from '../Link/NavLinkMUILink';
import { Box, Container, Divider, Link, useColorScheme } from '@mui/material';
import { Category } from '../../constraints/category';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';

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

  return (
    <Box sx={style}>
      <Divider sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }} />
      <Container sx={{ paddingBlock: '16px' }}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          {categoryList
            .filter((category: Category) => category != Category.HOME)
            .map((category) => (
              <Link
                component={NavLink}
                variant={'h6'}
                underline={'none'}
                color={'theme.palette.link.main'}
                to={`/category/${category}`}
              >
                {toCategoryName(category)}
              </Link>
            ))}
        </Stack>
      </Container>
      <Divider sx={{ height: 0.5, backgroundColor: 'black', opacity: 0.2 }} />
    </Box>
  );
}
