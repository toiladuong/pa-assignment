import { Box } from '@mui/material';
import ReservationForecast from '../component/ReservationForecast';
import { reservationForecastData } from '../data/reservationForecast';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { ProgressBar } from './ActualDataTab';

type DataRange = {
  start: string;
  end: string;
};

function ReservationForecastTab() {
  const [month, setMonth] = useState<string>('6');
  const [dateRange, setDateRange] = useState<DataRange>({
    start: '2020-2-1',
    end: '2020-7-31',
  });

  useEffect(() => {
    if (Number(month) === 1) {
      setDateRange((prev) => ({ ...prev, end: '2020-2-29' }));
    }
    if (Number(month) === 3) {
      setDateRange((prev) => ({ ...prev, end: '2020-4-30' }));
    }
    if (Number(month) === 6) {
      setDateRange((prev) => ({ ...prev, end: '2020-7-31' }));
    }
  }, [month]);

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };
  return (
    <Box
      sx={{
        overflowX: 'hidden',
      }}
      className='h-full w-full'
    >
      <Box className='w-full pad-3'>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '12px 18px',
            mb: '12px',
            width: 'fit-content',
            flexWrap: 'wrap',
          }}
          className='d-flex justify-center flex-col align-center'
        >
          <Box className='text-bold'>
            Reservation Forecast Total Occ, Arr. Rooms, Dep. Rooms
          </Box>
          <Box
            sx={{
              width: 'fit-content',
              flexWrap: 'wrap',
            }}
            justifyContent='space-between'
            className='d-flex align-center'
          >
            <Box width='236px' className='d-flex flex-col justify-center'>
              <Box className='d-flex align-center'>
                <ProgressBar color='#8067dc' width='36%' percent={100} />: Total
                Acc
              </Box>
              <Box className='d-flex align-center'>
                <ProgressBar color='#ed7d31' width='36%' percent={100} />: Arr.
                Rooms
              </Box>
              <Box className='d-flex align-center'>
                <ProgressBar color='#67b7dc' width='36%' percent={100} />: Dep.
                Rooms
              </Box>
            </Box>
            <Box
              sx={{
                border: '2px solid #1976d2',
                borderRadius: '6px',
                padding: '6px 12px',
                width: '250px',
                height: '40px',
                justifyContent: 'space-between',
                marginRight: '12px',
                my: '12px',
              }}
              className='d-flex align-center'
            >
              {dateRange.start}
              <KeyboardDoubleArrowRightRoundedIcon sx={{ color: '#1976d2' }} />
              {dateRange.end}
            </Box>
            <Box sx={{ width: 'fit-content' }}>
              <FormControl
                size='small'
                sx={{
                  width: '138px',
                }}
              >
                <InputLabel id='select-month'>Select period</InputLabel>
                <Select
                  labelId='select-month'
                  id='demo-simple-select'
                  value={month as string}
                  label='Period'
                  onChange={handleChange}
                >
                  <MenuItem value={1}>This month</MenuItem>
                  <MenuItem value={3}>3 months</MenuItem>
                  <MenuItem value={6}>6 months</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <ReservationForecast
          data={reservationForecastData}
          dateRange={dateRange}
        />
      </Box>
    </Box>
  );
}

export default ReservationForecastTab;
