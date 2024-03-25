import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { useDimensions } from '../customHooks/useDimensions';
import { Box } from '@mui/material';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type DataPoint = { x: number; y: number };
type LineChartProps = {
  data: DataPoint[];
};

export const MockChart = ({ data }: LineChartProps) => {
  const axesRef = useRef(null);
  const containerRef = useRef(null);

  const dimensions = useDimensions(containerRef);
  const boundsWidth = dimensions.width - MARGIN.right - MARGIN.left;
  const boundsHeight = dimensions.height - MARGIN.top - MARGIN.bottom;

  // Y axis
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [boundsHeight, max]);

  // X axis
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, xMax || 0])
      .range([0, boundsWidth]);
  }, [boundsWidth, xMax]);

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
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))
    .curve(d3.curveBundle.beta(0.9));
  const linePath = lineBuilder(data);
  if (!linePath) {
    return null;
  }

  return (
    <Box
      alignItems={'flex-start'}
      ref={containerRef}
      className='w-full h-full d-flex flex-col justify-center'
      height={{ xs: '600px', sm: '600px', md: '500px', lg: '500px' }}
    >
      <Box className='text-bold'>Overview Total Revenue</Box>
      <svg
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
            d={linePath}
            opacity={1}
            stroke='#5e72e4'
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
};
