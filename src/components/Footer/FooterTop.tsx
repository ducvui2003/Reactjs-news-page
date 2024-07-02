import { EMAIL, PHONE_1, PHONE_2 } from '../../constraints/info';
import { Email, Phone } from '@mui/icons-material';
import { Box, Divider, Grid, Link, Stack } from '@mui/material';
import {
  getMatrixCategory,
  toCategoryName,
} from '../../services/categoryService';
import { Category } from '../../constraints/category';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

function FooterTop() {
  return (
    <Grid container sx={{ py: '10px' }}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          {getMatrixCategory().map((categoryArray, index) => {
            return (
              <Grid item md key={index}>
                <Item key={index} categoryArray={categoryArray} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item className=" border-secondary" xs={12} md={3}>
        <Stack direction="row" sx={{ width: '100%' }}>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ width: '1px', mr: '10px' }}
          />
          <FooterContact />
        </Stack>
      </Grid>
    </Grid>
  );
}

function FooterContact() {
  return (
    <Box sx={{ width: 'auto' }}>
      <Typography gutterBottom variant={'h4'}>
        Liên hệ
      </Typography>
      <Stack spacing={1}>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Email sx={{ mr: 2 }} fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {EMAIL}
            </Typography>
          </Stack>
        </Link>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Phone sx={{ mr: 2 }} fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {PHONE_1}
            </Typography>
          </Stack>
        </Link>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Phone sx={{ mr: 2 }} fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {PHONE_2}
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
}

function Item({ categoryArray }: { categoryArray: Category[] }) {
  return (
    <Stack gap={3}>
      {categoryArray.map((category, index) => {
        return (
          <Box key={index}>
            <Link
              component={NavLink}
              to={`/category/${category}`}
              variant={'h6'}
              underline={'hover'}
            >
              {toCategoryName(category)}
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
}

export default FooterTop;
