import { Col, Row, Stack } from 'react-bootstrap';
import { EMAIL, PHONE_1, PHONE_2 } from '../../constraints/info';
import { Email, Handshake, Phone } from '@mui/icons-material';
import { Box, Divider, Grid, Link, List } from '@mui/material';
import {
  getMatrixCategory,
  toCategoryName,
} from '../../services/categoryService';
import { Category } from '../../constraints/category';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

function FooterTop() {
  return (
    <Grid container sx={{ marginBlock: '10px' }}>
      <Grid item xs={8}>
        <Row>
          {getMatrixCategory().map((categoryArray, index) => {
            return (
              <Col key={index}>
                <Item
                  bold={index == 0}
                  key={index}
                  categoryArray={categoryArray}
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item className=" border-secondary" xs={3}>
        <Stack direction={'horizontal'}>
          <Divider
            flexItem
            orientation={'vertical'}
            sx={{ width: '1px', marginRight: '10px' }}
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
      <Typography variant={'h5'}>Liên hệ </Typography>
      <Stack>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'horizontal'}>
            <Email className="pe-2" fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {EMAIL}
            </Typography>
          </Stack>
        </Link>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'horizontal'}>
            <Phone className="pe-2" fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {PHONE_1}
            </Typography>
          </Stack>
        </Link>
        <Link component={NavLink} to={`/`} underline={'hover'}>
          <Stack direction={'horizontal'}>
            <Phone sx={{ pe: 2 }} fontSize={'small'} />
            <Typography component={'p'} variant={'h6'}>
              {PHONE_2}
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
}

function Item({
  categoryArray,
  bold,
}: {
  categoryArray: Category[];
  bold: boolean;
  key?: number;
}) {
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
