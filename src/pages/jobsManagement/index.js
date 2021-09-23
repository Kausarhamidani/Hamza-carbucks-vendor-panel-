import React, { useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core/";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import GenericSelect from "../../components/generic/select/genericSelect";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Delete, Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 159,
    cName: "Ding Junhui",
    vName: "Mark Selby",
    sName: "company name",
    location: "Dubai",
    date: "20/06/2021",
  },
  {
    id: 160,
    cName: "Aakash Coopra",
    vName: "Zakir Khan",
    sName: "company name",
    location: "Abu Dabi",
    date: "20/06/2021",
  },
  {
    id: 161,
    cName: "Ding Junhui",
    vName: "Mark Selby",
    sName: "company name",
    location: "Sharja",
    date: "20/06/2021",
  },
  {
    id: 162,
    cName: "Ding Junhui",
    vName: "Mark Selby",
    sName: "company name",
    location: "Ajman",
    date: "20/06/2021",
  },
];

export default function JobsManagement() {
  const mobileWidth = IsMobileWidth();
  const optionsArray = ["Service", "Product"];
  const [selected, setselected] = useState("");
  const [itemSelected, setItemSelected] = useState("Booked");
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    setItemSelected(event.target.value);
  };

  const statusView = () => (
    <FormControl variant="filled">
      <Select value={itemSelected} onChange={handleChange}>
        <MenuItem value="Booked">Booked</MenuItem>
        <MenuItem value="InProgress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
        <MenuItem value="Cancelled">Cancelled</MenuItem>
      </Select>
    </FormControl>
  );

  const actionView = () => (
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/jobdetails">
        <Visibility
          style={{
            color: "secondary",
            marginLeft: 5,
            marginleft: 5,
          }}
        />
      </Link>
      <Delete color="primary" style={{ marginLeft: 5, marginleft: 5 }} />
    </div>
  );

  const columns = [
    { id: "id", label: "ID" },
    { id: "cName", label: "Customer Name" },
    { id: "vName", label: "Vendor Name" },
    { id: "sName", label: "Service" },
    { id: "location", label: "Location" },
    { id: "date", label: "Date" },
    { id: "status", label: "Status", type: "custom", component: statusView },
    { id: "action", label: "Actions", type: "custom", component: actionView },
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
            <div className="title">Jobs Management</div>
            <div className="buttons">
              <div>
                <DownloadButton></DownloadButton>
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
              {/* <CustomInput placeholder="Search By Service Name" label="Search By Service Name" /> */}
              <GenericSelect
                selected={setselected}
                options={optionsArray}
                label="Filter By Category"
                defaultOption="Filter By Category"
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                placeholder="Search By Name"
                label="Search By Name"
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
