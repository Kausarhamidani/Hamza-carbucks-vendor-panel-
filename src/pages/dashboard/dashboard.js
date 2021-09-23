import React from 'react'
import Drawer from '../../components/drawer/drawer';
import styled from 'styled-components'
import {Paper,Grid,Calander} from '@material-ui/core';
import PaperHeading from '../../components/generic/paper.heading/paper.heading'
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BigCalender from '../../components/generic/calendar/calender';
import  BarChart from '../../components/bar.chart/bar.chart';
import LineChart from '../../components/chart/chart'

export default function Dashboard() {
    return (
            <Drawer>
               <DashboardWrapper>
                   <Grid xs={12} container>
                       <Grid xs={12} md={4} style={{padding:"15px"}}>
                       <PaperHeading icon={<ListAltIcon className="icon"/>} text="Promotions"/>
                       {/* <BarChart/> */}
                       <div className='mt-5'>

                       <LineChart  />
                       </div>
                       </Grid>
                       <Grid xs={12} md={4} style={{padding:"15px"}}>
                       <PaperHeading icon={<LocalOfferIcon className="icon"/>} text="Services"/>
                       {/* <BarChart/> */}
                       <div className='mt-5'>

                       <LineChart />
                       </div>

                       </Grid>
                       <Grid xs={12} md={4} style={{padding:"15px"}}>
                       <PaperHeading icon={<LocalOfferIcon className="icon"/>} text="Products"/>
                       {/* <BarChart/> */}
                       <div className='mt-5'>

                       <LineChart />
                       </div>

                       </Grid>
                   </Grid>
                   <Grid xs={12}>
               
                   </Grid>
                   <Grid xs={12} style={{padding:"15px",paddingTop:"70px"}}>
                      <BigCalender/>
                   </Grid>
               </DashboardWrapper>
            </Drawer>
       
    )
}

const DashboardWrapper = styled.div`


`