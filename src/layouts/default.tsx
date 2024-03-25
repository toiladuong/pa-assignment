import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Header from './layoutComponents/Header';
import Sidebar from './layoutComponents/Sidebar';

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw !important',
        maxWidth: '100%',
        position: 'relative',
        backgroundColor: '#dfe0f4',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: '#5e72e4',
          height: '46vh',
          top: 0,
          zIndex: 1,
        }}
        className='w-full'
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          pr: { xs: '0', sm: '0', md: '0', lg: '16px' },
        }}
        className='d-flex w-full'
      >
        <Box
          sx={{
            padding: { xs: '0', sm: '0', md: '0', lg: '22px 24px' },
            width: 'fit-content',
            height: '100vh',
            position: 'sticky',
            top: '0',
            zIndex: 2,
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflowX: 'hidden',
          }}
          className='main-container w-full'
        >
          <Header />
          <Box className='main-content'>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
