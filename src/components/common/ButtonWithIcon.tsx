import React, { FC } from 'react';
import { Button, ButtonProps, useTheme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export interface ButtonWithLoadingProps extends ButtonProps {
  icon: SvgIconComponent;
  label: string;
}
const ButtonWithIcon: FC<ButtonWithLoadingProps> = ({
  icon: Icon,
  label,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme.palette.background.default,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        marginRight: 1,
      }}
      {...props}
    >
      {Icon && <Icon fontSize="small" sx={{ marginRight: 0.1 }} />} {label}
    </Button>
  );
};

export default ButtonWithIcon;
