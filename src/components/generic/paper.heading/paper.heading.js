import React from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import { Icon } from '@material-ui/core';
export default function PaperHeading(props) {
    const {icon,text} = props;
    return (
        <PaperWrapper>
            <Paper elevation={1} classes={{root:"paper"}}>
                  {
                      icon
                  }
                <div>
                  {
                      text
                  }
                </div>
            </Paper>
        </PaperWrapper>
    )
}

const PaperWrapper = styled.div`

width:100%;
.paper{
    display:flex;
    align-items:center;
    font-size: 20px;
    font-weight: bold;
    padding:20px 20px;
    color: #A30000;
        .icon{
            font-size:32px;
            margin-right:15px;
            font-weight:900;
        }
        
    


}
`
