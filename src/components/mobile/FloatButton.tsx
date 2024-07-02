import React, { useState } from 'react';
import {
  Box,
  ClickAwayListener,
  SpeedDial,
  SpeedDialAction,
  SpeedDialActionProps,
  SpeedDialIcon,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function FloatButton({ actions }: { actions: SpeedDialActionProps[] }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          transform: 'translateZ(0px)',
          flexGrow: 1,
          zIndex: 1,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<SpeedDialIcon icon={<AddIcon />} />}
          onClick={handleToggle}
          open={open}
        >
          {actions.map((action, index) => (
            <SpeedDialAction key={index} {...action} />
          ))}
        </SpeedDial>
      </Box>
    </ClickAwayListener>
  );
}

export default FloatButton;
