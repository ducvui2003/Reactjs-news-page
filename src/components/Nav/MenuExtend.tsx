import { Grid, Link, Stack } from '@mui/material';
import {
    getMatrixCategory,
    toCategoryName,
} from '../../services/categoryService';
import { NavLink } from 'react-router-dom';

const MenuExtends = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <Grid container sx={{ py: 3 }}>
            {getMatrixCategory(8).map((categoryArray, index) => {
                return (
                    <Grid item xs={12} md={3} key={index}>
                        <Stack direction={'column'} gap={3}>
                            {categoryArray.map((category, index) => (
                                <Link
                                    component={NavLink}
                                    key={index}
                                    variant={'h6'}
                                    underline={'none'}
                                    to={`/category/${category}`}
                                    sx={{ p: 1 }}
                                    onClick={handleClose}
                                >
                                    {toCategoryName(category)}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default MenuExtends;
