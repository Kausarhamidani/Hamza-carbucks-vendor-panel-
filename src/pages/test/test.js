import React from 'react'
import Drawer from '../../components/drawer/drawer';
import DownloadButton from '../../components/generic/download.button/download.button';
import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core/';
import CustomButton from '../../components/generic/custom.button/custom.button';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/generic/custom.input/custom.input';
import CustomSelect from '../../components/generic/select/select';
import BasicTable from '../../components/generic/table/table';
import { IsMobileWidth } from '../../components/generic/util/util';

export default function TestSchedule() {
    const mobileWidth = IsMobileWidth();
    return (
        <Drawer>
            <TestWrapper>
                <Paper classes={{ root: "paper" }}>
                    <Grid xs={12} container justify="space-between" alignItems="center" wrap="wrap">
                        <div className="title">
                            Test Schedule
                        </div>
                        <div className="buttons">
                            <div >
                                <DownloadButton>
                                </DownloadButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} classes={mobileWidth ? { root: "mobileFields" } : { root: "fields" }} style={{ paddingTop: "20px" }} >
                        <Grid xs={12} md={6} lg={3}>
                            <CustomSelect label="Filter Course By Status" defaultOption="Filter Course By Status" />
                        </Grid>
                        <Grid xs={12} md={6} lg={3} style={!mobileWidth ? { paddingLeft: "10px" } : null}>
                            <CustomInput placeholder="Search By Name" label="Search By Name" />
                        </Grid>
                    </Grid>

                    <Grid style={{ paddingTop: "20px" }}>
                        <BasicTable />
                    </Grid>

                </Paper>

            </TestWrapper>

        </Drawer>

    )
}

const TestWrapper = styled.div`

width:100%;

.paper{
    padding:20px;
    .buttons{
        display:flex;
    }
}
.title{
    font-size:20px;
    font-weight:bold;
}
.fields{
    display:flex;
}


`