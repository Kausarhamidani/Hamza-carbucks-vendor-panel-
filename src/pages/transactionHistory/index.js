import React, { useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core/";
import CustomButton from "../../components/generic/custom.button/custom.button";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomSelect from "../../components/generic/select/select";
import TransactionTable from "../../components/generic/table/transactionTable";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import { Button, FormControlLabel, Switch } from "@material-ui/core/";
import { Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 468,
    cName: "Mark Allan",
    vName: "Stephen Maguire",
    sName: "service 1",
    date: "20/06/2020",
  },
  {
    id: 468,
    cName: "Judd Trump",
    vName: "John Higins",
    sName: "service 2",
    date: "20/06/2020",
  },
  {
    id: 468,
    cName: "Ding Junhui",
    vName: "Mark Selby",
    sName: "service 2",
    date: "20/06/2020",
  },
];

export default function Transaction() {
  const mobileWidth = IsMobileWidth();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    console.log("newPage: ", newPage);
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const statusView = () => {
    return (
      <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
    );
  };

  const actionView = () => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/transactiondetails">
          <Visibility
            style={{
              color: "secondary",
              marginLeft: 5,
              marginleft: 5,
            }}
          />
        </Link>
      </div>
    );
  };

  const columns = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "cName",
      label: "Customer Name",
    },
    {
      id: "vName",
      label: "Vendor Name",
    },
    {
      id: "sName",
      label: "Service Name",
    },
    {
      id: "date",
      label: "Date",
    },
    {
      id: "status",
      label: "Status",
      type: "custom",
      component: statusView,
    },
    {
      id: "action",
      label: "Actions",
      type: "custom",
      component: actionView,
    },
  ];

  return (
    <Drawer>
      <TransactionWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <div className="title">Transaction History</div>
            <div className="buttons">
              <div>
                <DownloadButton />
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            classes={
              mobileWidth ? { root: "mobileFields" } : { root: "fields" }
            }
            style={{ paddingTop: "20px" }}
          >
            <Grid xs={12} md={6} lg={3}>
              <CustomInput
                placeholder="Search By Service Name"
                label="Search By Service Name"
              />
              {/* <CustomSelect label="Filter By Status" defaultOption="Filter By Status"/> */}
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                placeholder="Search By Customer Name"
                label="Search By Customer Name"
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                placeholder="Search By Vendor Name"
                label="Search By Vendor Name"
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <DateSelect />
            </Grid>
          </Grid>

          <Grid style={{ paddingTop: "20px" }}>
            <DataTable
              width={600}
              page={page}
              columns={columns}
              loading={loading}
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              rows={rowData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
            />
          </Grid>
        </Paper>
      </TransactionWrapper>
    </Drawer>
  );
}

const TransactionWrapper = styled.div`
  width: 100%;

  .paper {
    padding: 20px;
    .buttons {
      display: flex;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .fields {
    display: flex;
  }
`;
