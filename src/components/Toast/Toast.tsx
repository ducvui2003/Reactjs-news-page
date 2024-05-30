import React from 'react';
import {Snackbar} from "@mui/joy";
import Button from '@mui/joy/Button';
import CloseIcon from '@mui/icons-material/Close';

function Toast({message, color, icon, open, setOpen}: {
                   message: string,
                   color: string,
                   icon: React.ReactNode,
                   open: boolean,
                   setOpen: () => void
               }
) {
    return (
        <Snackbar
            variant="soft"
            color={color || "success"}
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            startDecorator={icon || undefined}
            endDecorator={
                <Button
                    onClick={() => setOpen(false)}
                    size="sm"
                    variant="soft"
                    color="success"
                >
                    <CloseIcon/>
                </Button>
            }
        >
            {message}
        </Snackbar>
    );
}

export default Toast;