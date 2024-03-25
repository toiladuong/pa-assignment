import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { actualData } from '../data/actualData';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

type DataType = {
  property_code: string;
  total_room_in_hotel: number;
  room_revenue: number;
  f_b_revenue: number;
  other_revenue: number;
  total_revenue: number;
  occ_percent: number;
  adr: number;
  hotel_room: number;
  available_rooms: number;
  occupied_room: number;
  group_rooms: number;
  transient_rooms: number;
};

type GrandType = Omit<DataType, 'property_code'>;

function ActualData() {
  const [selectedProperty, setSelectedProperty] = useState<DataType[]>([]);
  const createRows = (dataList: DataType[]) => {
    const arr = dataList.map((prop: DataType) => {
      const result = [];
      for (const key in prop) {
        result.push(<td>{prop[key as keyof DataType]}</td>);
      }
      return <tr>{...result}</tr>;
    });

    return <>{...arr}</>;
  };

  const sumObjectsByKey = (arr: DataType[]) => {
    return arr.reduce((a, b) => {
      for (const k in b) {
        if (k !== 'property_code') {
          a[k as keyof GrandType] =
            (a[k as keyof GrandType] || 0) + b[k as keyof GrandType];
        }
      }
      return a;
    }, {} as GrandType);
  };

  const createGrandRow = (data: DataType[]) => {
    if (data.length === 0) return;
    const grand: GrandType = sumObjectsByKey(data);

    const grandResult = [];
    for (const key in grand) {
      if (key !== 'property_code')
        grandResult.push(<td>{grand[key as keyof GrandType].toFixed(2)}</td>);
    }
    return (
      <tr className='grand-total'>
        <td>Grand Total</td>
        {...grandResult}
      </tr>
    );
  };
  return (
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(310deg, rgb(101, 175, 252) 0%, rgb(94, 114, 228) 100%)',
        borderRadius: '16px',
        padding: '32px 12px',
        width: '100%',
        mb: '48px',
        overflowX: 'auto',
        display: 'block !important',
      }}
    >
      <table>
        <tbody>
          <tr
            style={{
              textAlign: 'center',
            }}
          >
            <td
              colSpan={3}
              style={{
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Actual Data Table
            </td>
            <td colSpan={10}>
              <Autocomplete
                sx={{ width: '40%', maxWidth: '300px' }}
                multiple
                id='actual_select'
                options={actualData}
                disableCloseOnSelect
                onChange={(_, value) => setSelectedProperty(value)}
                getOptionLabel={(option) => option.property_code}
                renderOption={(props, option, { selected }) => (
                  <li
                    style={{
                      maxWidth: '300px',
                    }}
                    {...props}
                  >
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.property_code}
                  </li>
                )}
                size='small'
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Select properties...'
                    placeholder='properties'
                  />
                )}
              />
            </td>
          </tr>
          <tr className='tr-header'>
            <th>Property Code</th>
            <th>Total Room in Hotel</th>
            <th>Room Revenue</th>
            <th>F&B Revenue</th>
            <th>Other Revenue</th>
            <th>Total Revenue</th>
            <th>Occ %</th>
            <th>ADR</th>
            <th>Hotel Room</th>
            <th>Available Rooms</th>
            <th>Occupied Room</th>
            <th>Group Rooms</th>
            <th>Transient Rooms</th>
          </tr>
          {selectedProperty.length === 0 && (
            <tr>
              <td
                colSpan={13}
                style={{
                  textAlign: 'center',
                }}
              >
                Please select properties!
              </td>
            </tr>
          )}
          {createRows(selectedProperty)}
          {createGrandRow(selectedProperty)}
        </tbody>
      </table>
    </Box>
  );
}

export default ActualData;
