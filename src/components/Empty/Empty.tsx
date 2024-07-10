import image from '../../assets/image/empty-svg.svg';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme, useMediaQuery } from '@mui/material';

function Empty() {
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm'),
    );
    return (
        <Stack direction={'column'} py={3} justifyContent="center" alignItems={'center'}>
            <img style={{
                width: isMobile ? '100%' : '500px',
                height: '300px',
            }} srcSet={image} src={image} alt={'empty comment'} />
            <Typography mt={5} variant={'h3'}>Không có dữ liệu</Typography>
        </Stack>
    );
}

export default Empty;
