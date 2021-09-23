import React,{useState} from 'react'
import { Paper, Typography } from '@material-ui/core'
import {Bar} from 'react-chartjs-2'
import PropTypes from 'prop-types'
export default function BarChart({datasets}) {
    const [state, setState] = useState({
        // data: {
        //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //     datasets: [{
        //         label: '# of Votes',
        //         data: [12, 19, 3, 5, 2, 3],
        //         backgroundColor: [
        //             'rgba(255, 99, 132, 0.2)',
        //             'rgba(54, 162, 235, 0.2)',
        //             'rgba(255, 206, 86, 0.2)',
        //             'rgba(75, 192, 192, 0.2)',
        //             'rgba(153, 102, 255, 0.2)',
        //             'rgba(255, 159, 64, 0.2)'
        //         ],
        //         borderColor: [
        //             'rgba(255, 99, 132, 1)',
        //             'rgba(54, 162, 235, 1)',
        //             'rgba(255, 206, 86, 1)',
        //             'rgba(75, 192, 192, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(255, 159, 64, 1)'
        //         ],
        //         borderWidth: 1
        //     }]
        // },
      
        // datasets: {
        //     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        //     datasets: [
        //       {
        //         label: '# of Votes - A',
        //         data: [12, 19, 3, 5, 2, 3],
        //         backgroundColor: '#36404D',
        //         borderColor: '#36404D',
        //         borderWidth: 2,
        //         hoverBackgroundColor: '#75D9FD',
        //         hoverBorderColor: '#75D9FD',
        //       },
        //       {
        //         label: '# of Votes - B',
        //         data: [5, 30, 3, 8, 14, 2],
        //         backgroundColor: '#74B649',
        //         borderColor: '#74B649',
        //         borderWidth: 2,
        //         hoverBackgroundColor: '#75FDB5',
        //         hoverBorderColor: '#75FDB5',
        //       }
        //     ]
        //   },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
    return (
        <div className="w-100 mw-100" style={{paddingTop:"20px"}}>
            <Paper >
            <Bar date={datasets} options={state.options} height="200px"/>
            </Paper>
            
        </div>
    )
}


BarChart.propTypes = {
    datasets: PropTypes.object,
  }
    
  BarChart.defaultProps = {
    datasets: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: '# of Votes - A',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: '#36404D',
          borderColor: '#36404D',
          borderWidth: 2,
          hoverBackgroundColor: '#75D9FD',
          hoverBorderColor: '#75D9FD',
        },
        {
          label: '# of Votes - B',
          data: [5, 30, 3, 8, 14, 2],
          backgroundColor: '#74B649',
          borderColor: '#74B649',
          borderWidth: 2,
          hoverBackgroundColor: '#75FDB5',
          hoverBorderColor: '#75FDB5',
        }
      ]
    }
  }