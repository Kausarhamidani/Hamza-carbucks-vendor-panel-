import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from 'styled-components'
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper'


export default function DownloadButton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false)
    const handleClick = (event)=>{
        setOpen(!open)
        setAnchorEl(event.currentTarget)
    }
    return (
        <DownloadWrapper>
            <Button variant="contained" onClick={handleClick}  classes={{root:"btn"}}>
                Download
                <ArrowDropDownIcon/>
            </Button>
            <Popper classes={{root:"popper"}} open={open} placement="bottom-start" anchorEl={anchorEl}>
                <Paper classes={{root:"paper"}}>
                    <div className="tab">
                        CSV
                    </div>
                    <div className="tab">
                       PDF
                    </div>
                </Paper>

            </Popper>
        </DownloadWrapper>
    )
}
const DownloadWrapper = styled.div`
.tab{
    font-size:16px;
}
.btn{
    width:100%;
    background: grey;
    color:white;
   
}


`