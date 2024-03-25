import styled from '@emotion/styled';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLayoutStore } from '../../stores/useLayoutStore';
import { useLoginStore } from '../../stores/useLoginStore';

function Header() {
  const show = useLayoutStore((state) => state.isShow);
  const setShowFn = useLayoutStore((state) => state.setShowSidebar);
  const isLog = useLoginStore((state) => state.isLog);
  const setLogin = useLoginStore((state) => state.setLogin);
  const Boxed = styled.div`
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `;

  return (
    <Box
      sx={{
        width: '100%',
        height: '66px',
        justifyContent: 'space-between',
      }}
      className='d-flex align-center'
    >
      <Box className='d-flex align-center'>
        <Box
          sx={{
            height: '46px',
            width: '46px',
            cursor: 'pointer',
          }}
          className='d-flex justify-center align-center'
          onClick={() => {
            setShowFn(!show);
          }}
        >
          <div className={'hamburguer' + (show ? ' hamburguer-active' : '')} />
        </Box>
        <Boxed>Page: Home</Boxed>
      </Box>
      <Boxed className='d-flex align-center'>
        <Boxed>
          {!isLog ? (
            <Link
              style={{
                color: 'white',
              }}
              to='/login'
            >
              Log in
            </Link>
          ) : (
            <Box
              onClick={() => {
                setLogin(false);
              }}
              className='d-flex justify-center align-center'
            >
              <Typography className='d-flex justify-center align-center'>
                <PersonOutlineIcon /> duongvo1229
              </Typography>
            </Box>
          )}
        </Boxed>
        <Boxed>
          <SettingsIcon />
        </Boxed>
      </Boxed>
    </Box>
  );
}

export default Header;
