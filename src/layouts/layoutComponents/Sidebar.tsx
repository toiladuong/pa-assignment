import { Box, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLayoutStore } from '../../stores/useLayoutStore';
import { Link, useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { useLoginStore } from '../../stores/useLoginStore';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Sidebar() {
  const [showTab, setShowTab] = useState(true);
  const [temporaryShow, setTemporaryShow] = useState(false);

  const theme = useTheme();
  const matchLarge = useMediaQuery(theme.breakpoints.up('md'));

  const show = useLayoutStore((state) => state.isShow);
  const setShowFn = useLayoutStore((state) => state.setShowSidebar);
  const isLog = useLoginStore((state) => state.isLog);
  const setLogin = useLoginStore((state) => state.setLogin);

  const url = useLocation().pathname;

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (menuEl && !show) {
      menuEl.addEventListener('mouseover', () => {
        setTemporaryShow(true);

        menuEl.addEventListener('mouseleave', () => {
          setTemporaryShow(false);
          menuEl.removeEventListener('mouseleave', () => {});
        });
      });
    }
    return () => menuEl?.removeEventListener('mouseover', () => {});
  }, [menuRef, show]);

  return (
    <Box
      ref={menuRef}
      component='aside'
      sx={{
        height: '100%',
        width: !matchLarge ? '250px' : show || temporaryShow ? '236px' : '76px',
        position: !matchLarge ? 'fixed' : undefined,
        left: show || temporaryShow ? '10px' : '-400px',
        top: '2.5vh',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: '12px',
        zIndex: 999,
        overflowY: 'auto',
      }}
      className='transitioned'
    >
      {!matchLarge && (
        <Box
          onClick={() => {
            setShowFn(!show);
            setTemporaryShow(false);
          }}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '13px',
          }}
        >
          <CloseRoundedIcon />
        </Box>
      )}
      <Box
        sx={{
          height: '100%',
        }}
        className='sidebar bg-white rounded'
      >
        <Box className='pad-4'>
          <div className='d-flex justify-center w-full'>
            <img
              style={{
                width: '100%',
                borderRadius: '50%',
              }}
              src='/phuc-an.jpg'
            />
          </div>
          <span
            style={{
              transformOrigin: '0 50%',
              color: '#8a49fa',
            }}
            className={`text-bold transitioned ${
              show || temporaryShow ? '' : 'nav-not-show'
            }`}
          >
            Designed by duongvo1229@gmail.com
          </span>
        </Box>
        <Box color='black' className=' pad-3'>
          <Box
            borderRadius='8px'
            color='#6b7cff'
            className='d-flex align-center padX-3 transitioned hover-effect'
          >
            <div className='d-flex align-items-center padY-2'>
              <StorefrontIcon />
            </div>

            <span
              className={`text-bold pad-2 transitioned ${
                show || temporaryShow ? '' : 'nav-not-show'
              }`}
            >
              Dashboards
            </span>
            <Button
              size='small'
              className='d-flex justify-center align-center'
              onClick={() => setShowTab(!showTab)}
            >
              {(show || temporaryShow) &&
                (showTab ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                ))}
            </Button>
          </Box>
          {(showTab || (!temporaryShow && !show)) && (
            <Box className='d-flex flex-col justify-center align-center w-full'>
              <ul className='w-full'>
                <li
                  className={`w-full pad-2 nav-item ${
                    url == '/' ? 'nav-item-active text-bold' : ''
                  }`}
                >
                  <Link
                    className='w-full text-gray d-flex justify-center'
                    to='/'
                  >
                    {show || temporaryShow ? (
                      <span> Actual Data</span>
                    ) : (
                      <span> A </span>
                    )}
                  </Link>
                </li>
                <li
                  className={`w-full pad-2 nav-item ${
                    url == '/reservation' ? 'nav-item-active text-bold' : ''
                  }`}
                >
                  <Link
                    className='w-full text-gray d-flex justify-center'
                    to='/reservation'
                  >
                    {show || temporaryShow ? (
                      <span>Reservation Forecast</span>
                    ) : (
                      <span> R </span>
                    )}
                  </Link>
                </li>
                <li
                  className={`w-full pad-2 nav-item ${
                    url == '/period' ? 'nav-item-active text-bold' : ''
                  }`}
                >
                  <Link
                    className='w-full text-gray d-flex justify-center'
                    to='/period'
                  >
                    {show || temporaryShow ? (
                      <span> Period Detail </span>
                    ) : (
                      <span> P </span>
                    )}
                  </Link>
                </li>
              </ul>
            </Box>
          )}
        </Box>
        <Box className='pad-3'>
          {!isLog ? (
            <Link
              style={{
                borderRadius: '8px',
                backgroundImage:
                  'linear-gradient(310deg, #65affc 0%, #5e72e4 100%)',
                minHeight: '44px',
                color: 'white',
              }}
              to='/login'
              className='text-bold nav-item d-flex justify-center align-center hover-effect transitioned'
            >
              {(show || temporaryShow) && <span> Login</span>}
              <span className='padX-1 d-flex justify-center align-center'>
                <LoginIcon />
              </span>
            </Link>
          ) : (
            <Box
              onClick={() => {
                setLogin(false);
              }}
              sx={{
                borderRadius: '8px',
                backgroundColor: 'white',
                minHeight: '42px',
                color: 'black',
                border: '1px solid black',
                opacity: 0.68,

                cursor: 'pointer',
                ':hover': {
                  opacity: 1,
                },
              }}
              className='text-bold nav-item d-flex justify-center align-center hover-effect transitioned'
            >
              {(show || temporaryShow) && <span> Logout</span>}
              <span className='padX-1 d-flex justify-center align-center'>
                <LogoutIcon />
              </span>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
