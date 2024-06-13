import { makeStyles } from '@mui/styles';

const LINE_CLAMP: number = 1;
import React from 'react';
import { TypographyProps } from '@mui/material';
import Typography from '@mui/material/Typography';

interface LineClampTypographyProps extends TypographyProps {
  lineClamp?: number;
}

const useStyles = makeStyles({
  lineClamp: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
  },
});

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

  // Conditionally add -webkit-line-clamp style if lineClamp is provided

  return (
    <Typography gutterBottom sx={style} {...props}>
      {children}
    </Typography>
  );
}

export default ClampedTypography;
