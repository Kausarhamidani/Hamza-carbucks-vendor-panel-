import EmailModal from "./promotionModal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { FormControlLabel, Grid, Paper, Switch } from "@material-ui/core/";
import { Delete, Edit } from "@material-ui/icons";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import { IsMobileWidth } from "../../components/generic/util/util";
import CountrySelect from "../../components/generic/select/countrySelect";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import CustomInput from "../../components/generic/custom.input/custom.input";

const rowData = [
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 159,
    name: "name 1",
    title: "title 1",
    createdFor: "reason one",
    date: "20/06/2020",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 160,
    name: "name 2",
    title: "title 2",
    createdFor: "reason two",
    date: "20/06/2020",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 161,
    name: "name 3",
    title: "title 3",
    createdFor: "reason three",
    date: "20/06/2020",
  },
];

export default function Promotion() {
  const mobileWidth = IsMobileWidth();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [addPromotion, setAddPromotion] = useState(false);
  const [country, setcountry] = useState();

  const handleClick = () => {
    setAddPromotion(!addPromotion);
  };

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
        <Link to="/editpromotion">
          <Edit style={{ marginLeft: 5, marginleft: 5 }} />
        </Link>

        <Delete
          color="danger"
          style={{ color: "red", marginLeft: 5, marginleft: 5 }}
        />
      </div>
    );
  };

  const columns = [
    { id: "image", label: "Image", type: "image" },
    { id: "id", label: "ID" },
    { id: "name", label: "Promotion Name" },
    { id: "title", label: "Promotion Title" },
    { id: "createdFor", label: "Created For" },
    { id: "date", label: "Created At" },
    { id: "status", label: "Status", type: "custom", component: statusView },
    { id: "action", label: "Actions", type: "custom", component: actionView },
  ];

  return (
    <Drawer>
      <PromotionWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <div className="title">Promotion</div>
            <Button
              variant="contained"
              classes={{ root: "btn" }}
              onClick={() => setOpen(true)}
            >
              <AddIcon />
              Create Promotion
            </Button>
          </Grid>
          <Grid
            xs={12}
            classes={
              mobileWidth ? { root: "mobileFields" } : { root: "fields" }
            }
            style={{ paddingTop: "20px" }}
          >
            <Grid xs={12} md={6} lg={3}>
              <CountrySelect
                label="Filter By Country"
                country={country}
                onChange={setcountry}
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
      </PromotionWrapper>

      <EmailModal open={open} setOpen={setOpen} />
    </Drawer>
  );
}

const PromotionWrapper = styled.div`
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
