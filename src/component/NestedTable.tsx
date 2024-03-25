import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Fragment, ReactNode, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { nestedTableData } from '../data/nestedTable';
import { nestedChildType, nestedTableDataType } from '../types/nestedTableType';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button } from '@mui/material';

export default function NestedTable() {
  const tableRef = useRef<HTMLTableElement>(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'ACtual Meal Count & Sales 2024-03-16 to 2024-03-16',
    sheet: 'Users',
  });

  return (
    <Box>
      <Box className='w-full d-flex flex-col justify-center align-center'>
        <Box color='white' className='text-bold'>
          Expected and Actual Meal Counts and Sales
        </Box>
        <Box my='12px' className='w-full d-flex justify-center'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: '#8181fd',
            }}
            onClick={onDownload}
          >
            <DownloadIcon />
          </Button>
        </Box>
      </Box>

      <Box width='100%' overflow='auto'>
        <table ref={tableRef}>
          <tbody>
            <tr className='tr-header'>
              <th>Date</th>
              <th>RVC</th>
              <th>Period</th>
              <th>A. Count</th>
              <th>C. Count</th>
              <th>A. Sales</th>
              <th>C. Sales</th>
              <th>Count</th>
              <th>Count %</th>
              <th>Sales</th>
              <th>Sales%</th>
            </tr>
            {createNestedRows(nestedTableData)}
            {createNestedRows(nestedTableData)}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

const createNestedRows = (dataList: nestedTableDataType[]): ReactNode => {
  // let isShow = false;
  const arr = dataList.map((data: nestedTableDataType) => {
    return <NestedRow data={data} />;
  });
  return <>{...arr}</>;
};
const createSubTable = (dataList: nestedChildType[]): ReactNode => {
  const arr = dataList.map((data: nestedChildType) => {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>{data.room}</td>
        <td>{data.guest_names}</td>
        <td>{data.count}</td>
        <td>{data.pax}</td>
        <td>{data.time}</td>
        <td>{data.package_code}</td>
        <td></td>
        <td>{data.remark}</td>
      </tr>
    );
  });
  return (
    <>
      <tr className='tr-sub-header'>
        <td></td>
        <td></td>
        <td></td>
        <td>Room</td>
        <td>Guest Names</td>
        <td>Count</td>
        <td>Pax</td>
        <td>Time</td>
        <td>Pkg. Code</td>
        <td></td>
        <td>Remark</td>
      </tr>
      {...arr}
    </>
  );
};
const NestedRow = ({ data }: { data: nestedTableDataType }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const calculateBlankCellByDepth = (
    key: string,
    depth: number,
    collapsible: boolean
  ): ReactNode => {
    if (depth === 0) {
      return (
        <Fragment>
          <td
            style={{
              position: 'relative',
            }}
          >
            {key}
            {collapsible &&
              (isCollapsed ? (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowUpRoundedIcon />
                </button>
              ) : (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowDownRoundedIcon />
                </button>
              ))}
          </td>
          <td></td>
          <td></td>
        </Fragment>
      );
    }

    if (depth === 1) {
      return (
        <Fragment>
          <td></td>
          <td
            style={{
              position: 'relative',
            }}
          >
            {key}
            {collapsible &&
              (isCollapsed ? (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowUpRoundedIcon />
                </button>
              ) : (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowDownRoundedIcon />
                </button>
              ))}
          </td>
          <td></td>
        </Fragment>
      );
    }
    if (depth === 2) {
      return (
        <Fragment>
          <td></td>
          <td></td>
          <td
            style={{
              position: 'relative',
            }}
          >
            {key}
            {collapsible &&
              (isCollapsed ? (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowUpRoundedIcon />
                </button>
              ) : (
                <button
                  className='collapseBtn'
                  onClick={() => setCollapsed(!isCollapsed)}
                >
                  <KeyboardArrowDownRoundedIcon />
                </button>
              ))}
          </td>
        </Fragment>
      );
    }
  };

  return (
    <>
      <tr>
        {calculateBlankCellByDepth(data.key, data.depth, !!data.children)}
        <td>{data.total.adults_actual.count}</td>
        <td>{data.total.children_actual.count}</td>
        <td>{data.total.adults_actual.sales}</td>
        <td>{data.total.children_actual.sales}</td>
        <td>{data.total.total_actual.count}</td>
        <td>{data.total.total_actual.percentage_count}</td>
        <td>{data.total.total_actual.sales}</td>
        <td>{data.total.total_actual.percentage_sales}</td>
      </tr>
      {data.children &&
        data.depth <= 1 &&
        (isCollapsed
          ? createNestedRows(data.children as nestedTableDataType[])
          : null)}
      {data.children &&
        data.depth > 1 &&
        (isCollapsed
          ? createSubTable(data.children as nestedChildType[])
          : null)}
    </>
  );
};
