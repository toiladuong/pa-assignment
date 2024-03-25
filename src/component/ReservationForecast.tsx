import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { useDimensions } from '../customHooks/useDimensions';
import { Box } from '@mui/material';

const MARGIN = { top: 10, right: 10, bottom: 50, left: 30 };

type DataPoint = { date: Date; value: number };
type DataType = {
  totalAcc: number[];
  arrRooms: number[];
  depRooms: number[];
};
type ReservationForecastProps = {
  data: DataType;
  dateRange?: {
    start: string;
    end: string;
  };
};

export default function ReservationForecast({
  data,
  dateRange = {
    start: '2020-2-1',
    end: '2020-7-31',
  },
}: ReservationForecastProps) {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const svg = useRef(null);
  const containerRef = useRef(null);

  const dimensions = useDimensions(containerRef);
  const boundsWidth = dimensions.width - MARGIN.right - MARGIN.left - 15;
  const boundsHeight = dimensions.height - MARGIN.top - MARGIN.bottom - 15;

  const reformatData = (data: number[]): DataPoint[] => {
    const newData = data.map((value: number, index: number) => ({
      date: new Date(new Date(dateRange.start).getTime() + index * 86400000),
      value: value,
    }));
    return newData;
  };

  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, 450 || 0])
      .range([boundsHeight, 0]);
  }, [boundsHeight]);

  // X axis
  //   const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleUtc()
      .domain([new Date(dateRange.start), new Date(dateRange.end)])
      .range([0, boundsWidth]);
  }, [dateRange, boundsWidth]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll('*').remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append('g').call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  // Build the line
  const lineBuilder = d3
    .line<DataPoint>()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));
  const linePath1 = lineBuilder(reformatData(data.totalAcc));
  const linePath2 = lineBuilder(reformatData(data.arrRooms));
  const linePath3 = lineBuilder(reformatData(data.depRooms));

  return (
    <Box
      alignItems={'flex-start'}
      ref={containerRef}
      className='w-full bg-white d-flex flex-col justify-center pad-3 rounded'
      height={{ xs: '600px', sm: '600px', md: '500px', lg: '500px' }}
      overflow='hidden'
    >
      <svg
        ref={svg}
        style={{
          maxHeight: '800px',
        }}
        width={dimensions.width || 400}
        height={dimensions.height || 400}
      >
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          <path
            d={linePath1 as string}
            opacity={1}
            stroke='#8067dc'
            fill='none'
            strokeWidth={2}
          />
          <path
            d={linePath2 as string}
            opacity={1}
            stroke='#ed7d31'
            fill='none'
            strokeWidth={2}
          />
          <path
            d={linePath3 as string}
            opacity={1}
            stroke='#67b7dc'
            fill='none'
            strokeWidth={2}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        />
      </svg>
    </Box>
  );
}
