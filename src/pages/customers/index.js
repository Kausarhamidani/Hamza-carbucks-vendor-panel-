import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import {
  Button,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";
import CustomButton from "../../components/generic/custom.button/custom.button";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import CustomerModal from "./customerModal";
import { Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 159,
    image: "https://ibcc.edu.pk/wp-content/uploads/2016/06/team-1-640x640.jpg",
    name: "Jhon Doe",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545",
  },
  {
    id: 160,
    image: "https://ibcc.edu.pk/wp-content/uploads/2016/06/team-1-640x640.jpg",
    name: "Jhon Doe",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545",
  },
  {
    id: 161,
    image: "https://ibcc.edu.pk/wp-content/uploads/2016/06/team-1-640x640.jpg",
    name: "Jhon Doe",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545",
  },
];

export default function Customers() {
  const mobileWidth = IsMobileWidth();

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    // console.log("newPage: ", newPage);
    setPage(newPage);
  };

  useEffect(async () => {}, []);

  const data = [];

  const statusView = () => {
    return (
      <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
    );
  };

  const actionView = () => (
    <div
      style={{
        display: "flex",
        marginTop: 20.5,
      }}
    >
      <Link to="/customerdetails">
        <Visibility
          style={{
            color: "secondary",
            marginLeft: 5,
            marginRight: 5,
          }}
        />
      </Link>
      <Button
        style={{ marginLeft: 5 }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Comment
      </Button>
    </div>
  );

  const columns = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "image",
      label: "Image",
      type: "image",
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "regDate",
      label: "Registraion Date",
      type: "date",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "phone",
      label: "Phone",
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
      <CoursesWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems=""
            wrap="wrap"
            direction={mobileWidth ? "column" : ""}
          >
            <div className="title">Customer</div>
            <div className={!mobileWidth ? "buttons" : "buttonsMobile"}>
              <div style={!mobileWidth ? { paddingRight: "10px" } : null}>
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
              <CustomSelect
                label="Filter Users By Status"
                defaultOption="Filter Users By Status"
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
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              rows={rowData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
            />
          </Grid>
        </Paper>
      </CoursesWrapper>
      <CustomerModal open={open} setOpen={setOpen} />
    </Drawer>
  );
}

const CoursesWrapper = styled.div`
  width: 100%;
  .paper {
    padding: 20px;
    .buttons {
      display: flex;
    }
    .buttonsMobile {
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
