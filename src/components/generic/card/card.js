import React from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Image from '../../../assets/images/driving1.jpg'
export default function Card(props) {
    const {driving,name,street,status}= props;
    return (
        <CardWrapper>
            <Paper classes={{root:"cardPaper"}}>
                <div className="Image">
                    <img  src={Image}/>
                </div>
                <div className="content">
                    <h1>
                        {
                            driving
                        }
                    </h1>
                    <div style={{fontSize:"18px"}}>
                       {name}
                    </div>
                    <div  style={{fontSize:"18px"}}>
                        {street}
                    </div>
                    <div >
                        {
                            status
                        }
                    </div>
                </div>
            </Paper>
        </CardWrapper>
    )
}
const CardWrapper = styled.div`
width:100%;
.cardPaper{
    display:flex;
    align-items:center;
    padding:20px;   
    height:200px;
    img{
        max-width:100%;
       
    }
    .content{
        padding-left:20px;
    }

}
`