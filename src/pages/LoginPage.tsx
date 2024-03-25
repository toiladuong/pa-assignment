import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../stores/useLoginStore';

const words = ['easily', 'securely', 'instantly'];

function LoginPage() {
  const setLogin = useLoginStore((state) => state.setLogin);
  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);
  const writterRef = useRef<HTMLSpanElement>(document.createElement('div'));
  const timeoutRef = useRef<number | null>(null);

  const sleepTime = (time: number): Promise<boolean> => {
    return new Promise((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve(true);
        clearTimeout(timeoutRef.current as number);
      }, time);
    });
  };
  useEffect(() => {
    if (writterRef.current) {
      const createWritterLoop = async () => {
        let index = 0;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const word = words[index];
          for (let i = 0; i <= word.length; i++) {
            writterRef.current.innerText = word.substring(0, i);
            await sleepTime(150);
          }
          await sleepTime(1000);
          for (let i = word.length; i >= 0; i--) {
            writterRef.current.innerText = word.substring(0, i);
            await sleepTime(50);
          }
          await sleepTime(150);

          if (index === words.length - 1) {
            index = 0;
          } else {
            index++;
          }
        }
      };

      createWritterLoop();
    }
  }, [writterRef]);

  const handleLogin = () => {
    setIsLogging(true);
    setLogin(true);
    const timeout = setTimeout(() => {
      setIsLogging(false);
      navigate('/');
      clearTimeout(timeout);
    }, 2000);
  };
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(circle at bottom right, #3c9add, #191452);',
      }}
      className='d-flex justify-center flex-col align-center'
    >
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: '9',
          my: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '32px', lg: '42px' },
            fontWeight: '900',
            color: '#5e86ff',
          }}
        >
          Manage your work <br />
        </Typography>
        <Box sx={{ minHeight: '45px' }}>
          <Typography
            sx={{
              fontSize: { xs: '22px', sm: '30px', lg: '42px' },
              lineHeight: { xs: '22px', sm: '30px', lg: '42px' },
              fontWeight: '700',
            }}
            className='writter'
            ref={writterRef}
          ></Typography>
        </Box>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'flex-start',
          lg: 'space-around',
        }}
        alignItems={{
          xs: 'center',
          sm: 'center',
          md: 'center',
          lg: 'flex-start',
        }}
        height='100%'
      >
        <Box
          height='390px'
          width={{ xs: '90vw', sm: '90vw', md: '35vw', lg: '30vw' }}
          padding='26px'
          justifyContent='space-around'
          className='d-flex flex-col'
        >
          <div className=''>
            <Typography
              sx={{
                fontSize: '26px',
                fontWeight: '700',
                color: 'white',
              }}
            >
              Sign In
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '500',
                color: 'white',
                opacity: 0.9,
              }}
            >
              Enter your email and password to sign in
            </Typography>
          </div>
          <div className=''>
            <form role='form'>
              <div className='mb-3'>
                <TextField
                  size='small'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    my: '12px',
                    width: '90%',
                  }}
                  variant='outlined'
                  label='Email'
                />
              </div>
              <div className='mb-3'>
                <TextField
                  size='small'
                  type='password'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    my: '12px',
                    width: '90%',
                  }}
                  variant='outlined'
                  label='Password'
                />
              </div>
              <Box mb={'16px'}>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='rememberMe'
                />
                <label
                  style={{
                    color: 'white',
                    marginLeft: '10px',
                  }}
                  htmlFor='rememberMe'
                >
                  Remember me
                </label>
              </Box>
              <div className=''>
                {!isLogging ? (
                  <>
                    <Button
                      sx={{
                        height: '48px',
                        width: '118px',
                      }}
                      onClick={handleLogin}
                      variant='contained'
                    >
                      Sign in
                    </Button>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'white',
                        opacity: 1,
                      }}
                    >
                      (Fake login, just click to sign in)
                    </Typography>
                  </>
                ) : (
                  <Button
                    sx={{
                      height: '48px',
                      width: '118px',
                    }}
                    variant='contained'
                    disabled
                  >
                    <CircularProgress size={26} />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Box>
        <Box className='d-flex justify-center'>
          <Box
            sx={{
              height: { xs: '182px', sm: '182px', md: '200px', lg: '400px' },
              zIndex: '3',
              position: 'relative',
            }}
          >
            <img
              className='img-skew'
              style={{ border: '12px solid #dcdcdc', borderRadius: '22px' }}
              height={'100%'}
              src='/login.png'
            />
            <Box
              className='img-skew-2'
              sx={{
                height: { xs: '182px', sm: '182px', md: '200px', lg: '400px' },
                position: 'absolute',
                top: '20%',
                left: '25%',
                zIndex: '-1',
              }}
            >
              <img
                style={{ border: '12px solid white', borderRadius: '22px' }}
                height={'100%'}
                src='/login-2.png'
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default LoginPage;
