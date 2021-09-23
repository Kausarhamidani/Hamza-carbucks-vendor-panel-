import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { Card } from 'antd';
// import ApexChart from "react-apexcharts";
import Chart from 'react-apexcharts'
// import {
// 	apexLineChartDefaultOption,
// 	apexBarChartDefaultOption,
// 	apexAreaChartDefaultOption
// } from 'constants/ChartConstant';
// import ReactResizeDetector from 'react-resize-detector';

const titleStyle = {
	position: 'absolute',
	zIndex: '1'
}

const extraStyle = {
	position: 'absolute',
	zIndex: '1',
	right: '0',
	top: '-2px'
}

// const getChartTypeDefaultOption = type => {
// 	switch (type) {
// 		case 'line':
// 			return apexLineChartDefaultOption
// 		case 'bar':
// 			return apexBarChartDefaultOption
// 		case 'area':
// 			return apexAreaChartDefaultOption
// 		default:
// 			return apexLineChartDefaultOption;
// 	}
// }

export default function LineChart() {
    
  
      const state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
        //   xaxis: {
        //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        //   }
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: 'red',
            width: 4,
            dashArray: 0,      
        },
        markers: {
          size: 6,
          colors: '#A30000',
          strokeColors: '#fff',
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
      }
        },
        series: [{
          name: 'series-1',
          data: [30, 50, 70, 90, 70, 60, 50, 71, 90]
        }],
        
            colors: ['#546E7A', '#E91E63'],
          
      }
    
    
      return (
        <Chart colors={state.colors} options={state.options} series={state.series} type="line" width={'100%'} height={250} />
      )
    
  
      }
 