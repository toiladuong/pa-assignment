import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import ActualData from '../component/ActualData';
import Card from '../component/Card';
import { MockChart } from '../component/MockChart';
import { mockData } from '../data/mockData';

function ActualDataTab() {
  const TodoTitle = styled.h6`
    font-size: 15px;
    margin-right: 12px;
    font-weight: 600;
  `;
  const ProjectTitle = styled.h6`
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: 500;
    opacity: 0.9;
  `;
  return (
    <Box className='overview w-full'>
      <Box>
        <Grid className='pad-5' container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card shadow={false}>
              <Box justifyContent={'space-between'} className='d-flex'>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                >
                  <p className='text-bold'>TOTAL REVENUE</p>
                  <p className='text-bold'>$775.000</p>
                  <p>+36% since last month</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                  width={'50px'}
                  height={'50px'}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img src='/revenue-icon.png' />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card
              shadow={false}
              style={{
                backgroundImage:
                  'linear-gradient(310deg, #737070 0%, #131313 100%)',
                color: 'white',
              }}
            >
              <Box justifyContent={'space-between'} className='d-flex'>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                >
                  <p className='text-bold'>TOTAL GUESTS</p>
                  <p className='text-bold'>8.636</p>
                  <p>+86% since last month</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                  width={'50px'}
                  height={'50px'}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img src='/customer-icon.jpg' />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card shadow={false}>
              <Box justifyContent={'space-between'} className='d-flex'>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                >
                  <p className='text-bold'>CLIENTS</p>
                  <p className='text-bold'>316</p>
                  <p>+32% since last month</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                  width={'50px'}
                  height={'50px'}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img src='/client.png' />
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card
              shadow={false}
              style={{
                backgroundImage:
                  'linear-gradient(310deg, #3b2b63 0%, #5f45e6 100%)',
                color: 'white',
              }}
            >
              <Box justifyContent={'space-between'} className='d-flex'>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                >
                  <p className='text-bold'>F&B REVENUE</p>
                  <p className='text-bold'>81.236</p>
                  <p>+26% since last month</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                  width={'50px'}
                  height={'50px'}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img src='/FnB.png' />
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container padding='16px' spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <Card>
              <MockChart data={mockData} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Card
                  style={{
                    backgroundImage:
                      'linear-gradient(310deg, #f5365c 0%, #f56036 100%)',
                    color: 'white',
                  }}
                >
                  <Box>
                    <div className='h-full'>
                      <div>
                        <h3 className='pad-2'>To do list</h3>
                      </div>
                      <Box mt={'8px'}>
                        <ul>
                          <li className='padY-1'>
                            <div className='d-flex flex-col align-start'>
                              <div className='checklist-info d-flex align-center'>
                                <TodoTitle>Call with DUONGVO1229</TodoTitle>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='customCheck1'
                                  defaultChecked
                                />
                              </div>
                              <div className='form-check my-auto ms-auto'>
                                <small className='text-xs'>09:30 AM</small>
                              </div>
                            </div>
                          </li>
                          <li className='padY-1'>
                            <div className='d-flex flex-col align-start'>
                              <div className='checklist-info d-flex align-center'>
                                <TodoTitle>Interview Meeting</TodoTitle>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='customCheck1'
                                />
                              </div>
                              <div className='form-check my-auto ms-auto'>
                                <small className='text-xs'>11:00 AM</small>
                              </div>
                            </div>
                          </li>
                          <li className='padY-1'>
                            <div className='d-flex flex-col align-start'>
                              <div className='checklist-info d-flex align-center'>
                                <TodoTitle>Offer to DUONGVO1229</TodoTitle>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='customCheck1'
                                />
                              </div>
                              <div className='form-check my-auto ms-auto'>
                                <small className='text-xs'>02:00 PM</small>
                              </div>
                            </div>
                          </li>
                          <li className='padY-1'>
                            <div className='d-flex flex-col align-start'>
                              <div className='checklist-info d-flex align-center'>
                                <TodoTitle>Job Onboard</TodoTitle>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='customCheck2'
                                  defaultChecked
                                />
                              </div>
                              <div className='form-check my-auto ms-auto'>
                                <small>10:30 AM</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Box>
                    </div>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <div>
                    <h3 className='pad-2'>Project</h3>
                  </div>
                  <ul className='list-group list-group-flush list'>
                    <li className='padY-2'>
                      <div className='d-flex align-center'>
                        <Box
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '42px',
                            height: '42px',
                            mr: '16px',
                          }}
                        >
                          <img
                            width={'42px'}
                            alt='Image placeholder'
                            src='/react.png'
                          />
                        </Box>
                        <Box flexGrow={1} className='d-flex flex-col h-full'>
                          <ProjectTitle>
                            React project: Super Tiktok
                          </ProjectTitle>
                          <ProgressBar percent={100} color='#65aaff' />
                        </Box>
                      </div>
                    </li>
                    <li className='padY-2'>
                      <div className='d-flex align-center'>
                        <Box
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '42px',
                            height: '42px',
                            mr: '16px',
                          }}
                        >
                          <img
                            width={'42px'}
                            alt='Image placeholder'
                            src='vue.png'
                          />
                        </Box>
                        <Box flexGrow={1} className='d-flex flex-col h-full'>
                          <ProjectTitle>Vue project: PEKO</ProjectTitle>

                          <ProgressBar percent={68} color='#63ea63' />
                        </Box>
                      </div>
                    </li>
                    <li className='padY-2'>
                      <div className='d-flex align-center'>
                        <Box
                          sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '42px',
                            height: '42px',
                            mr: '16px',
                          }}
                        >
                          <img
                            width={'42px'}
                            alt='Image placeholder'
                            src='next.png'
                          />
                        </Box>
                        <Box flexGrow={1} className='d-flex flex-col h-full'>
                          <ProjectTitle>Next project: ???</ProjectTitle>
                          <ProgressBar percent={10} color='#ff5959' />
                        </Box>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className='w-full d-flex justify-center'>
        <ActualData />
      </Box>
    </Box>
  );
}

export const ProgressBar = ({
  percent,
  color,
  width = '100%',
}: {
  percent: number;
  color: string;
  width?: string;
}) => {
  return (
    <Box
      sx={{
        width: width,
        height: '3px',
        backgroundColor: '#e9ecef',
        position: 'relative',
        borderRadius: '2px',
      }}
    >
      <Box
        sx={{
          width: `${percent}%`,
          height: '3px',
          backgroundColor: color,
          position: 'absolute',
          left: '0',
          top: 'auto',
          borderRadius: '2px',
        }}
      />
    </Box>
  );
};

export default ActualDataTab;
