import React, { useState } from 'react';
import {
  Box,
  ClickAwayListener,
  SpeedDial,
  SpeedDialAction,
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
function FloatButton() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const actions = [
    {
      icon: <ChatBubbleIcon />,
      name: '  Bình luận',
      onClick: () => {},
    },
    {
      icon: <BookmarkIcon />,
      name: 'Lưu bài viết',
      onClick: () => {},
    },
  ];
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<AddIcon />}
          onClick={handleToggle}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    </ClickAwayListener>
  );
}

export default FloatButton;
