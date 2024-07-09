import { ButtonProps } from '@mui/material';

const buttonMUI = {
    variants: [
        {
            props: { variant: 'contained', size: 'small' } as Partial<ButtonProps>,
            style: {
                fontSize: '1rem', // Set the font size for small contained buttons
            },
        },
        {
            props: { variant: 'contained', size: 'medium' } as Partial<ButtonProps>,
            style: {
                fontSize: '1.5rem', // Set the font size for medium contained buttons
            },
        },
        {
            props: { variant: 'contained', size: 'large' } as Partial<ButtonProps>,
            style: {
                fontSize: '2rem', // Set the font size for large contained buttons
            },
        },
    ],
};

export default buttonMUI;
