const LINE_CLAMP: number = 1;
import React from 'react';
import { TypographyProps } from '@mui/material';
import Typography from '@mui/material/Typography';

interface LineClampTypographyProps extends TypographyProps {
  lineClamp?: number;
}

function ClampedTypography({
  children,
  lineClamp = LINE_CLAMP,
  ...props
}: LineClampTypographyProps) {
  const style = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: lineClamp,
  };
  return (
    <Typography gutterBottom sx={style} {...props}>
      {children}
    </Typography>
  );
}

export default ClampedTypography;
