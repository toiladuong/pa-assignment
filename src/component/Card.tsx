import { Box } from '@mui/material';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  style?: object;
  height?: number;
  width?: number;
  shadow?: boolean;
};
function Card({ children, style, height, width, shadow = true }: CardProps) {
  return (
    <Box
      sx={{
        ...style,
        height,
        width,
        ':hover': {
          cursor: 'pointer',
          boxShadow: shadow ? '#9799e6ca 0 16px 16px' : '',
          transform: 'translateY(-5px) scale(1.02)',
        },
      }}
      className='bg-white rounded pad-4 transitioned'
    >
      {children}
    </Box>
  );
}

export default Card;
