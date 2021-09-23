import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import Drawer from "../../components/drawer/drawer";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import { FormControlLabel, Grid, Paper, Switch } from "@material-ui/core/";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomButton from "../../components/generic/custom.button/custom.button";
import DownloadButton from "../../components/generic/download.button/download.button";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    productName: "product 1",
    providedBy: "company name",
    location: "Dubai",
    createdAt: "20/02/2020",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    productName: "product 2",
    providedBy: "company name",
    location: "Sharja",
    createdAt: "20/02/2020",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    productName: "product 3",
    providedBy: "company name",
    location: "Abu Dabi",
    createdAt: "20/02/2020",
  },
];

export default function Products() {
  const mobileWidth = IsMobileWidth();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const statusView = () => (
    <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
  );

  const actionView = () => (
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/editproducts">
        <Edit style={{ marginLeft: 5, marginRight: 5 }} />
      </Link>
      <Delete
        color="danger"
        style={{ color: "red", marginLeft: 5, marginRight: 5 }}
      />
    </div>
  );

  const columns = [
    { id: "id", label: "ID" },
    { id: "image", label: "Image", type: "image" },
    { id: "productName", label: "Product Name" },
    { id: "providedBy", label: "Provided By" },
    { id: "location", label: "Location" },
    { id: "createdAt", label: "Created At" },
    { id: "status", label: "Status", type: "custom", component: statusView },
    { id: "action", label: "Actions", type: "custom", component: actionView },
  ];

  return (
    <Drawer>
      <JobWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <div className="title">Products</div>
            <div className="buttons">
              <div style={{ paddingRight: "10px" }}>
                <DownloadButton></DownloadButton>
              </div>
              <div style={mobileWidth ? { paddingTop: "10px" } : null}>
                <Link to="/myproducts/addproducts">
                  <CustomButton>Add Products</CustomButton>
                </Link>
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
              <CustomSelect
                label="Filter products By Status"
                defaultOption="Filter Products By Status"
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
      </JobWrapper>
    </Drawer>
  );
}

const JobWrapper = styled.div`
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
