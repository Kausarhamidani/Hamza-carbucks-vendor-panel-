import styled from "styled-components";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import { FormControlLabel, Grid, Paper, Switch } from "@material-ui/core/";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomButton from "../../components/generic/custom.button/custom.button";
import DownloadButton from "../../components/generic/download.button/download.button";

const rowData = [
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 159,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 160,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 161,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 162,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 163,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 164,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },

  {
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    id: 165,
    serviceName: "Service Name",
    providedBy: "Mark",
    serviceLocation: "Dubai",
    createdAt: "20/02/2021",
  },
];

export default function Courses() {
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

  const actionView = () => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/editservice">
          <Edit style={{ marginLeft: 5, marginRight: 5 }} />
        </Link>
        {/* <Link to="/servicedetails">
                <Visibility style={{color:'blue', marginLeft:5, marginRight:5}} />
                </Link> */}
        <Delete
          color="danger"
          style={{ color: "red", marginLeft: 5, marginRight: 5 }}
        />
      </div>
    );
  };

  const columns = [
    {
      id: "image",
      label: "Image",
      type: "image",
    },
    {
      id: "id",
      label: "ID",
    },
    {
      id: "serviceName",
      label: "Service Name",
    },
    {
      id: "providedBy",
      label: "Provided By",
    },
    {
      id: "serviceLocation",
      label: "Service Location",
    },
    {
      id: "createdAt",
      label: "Created At",
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
            <div className="title">My Services</div>
            <div className={!mobileWidth ? "buttons" : "buttonsMobile"}>
              <div style={!mobileWidth ? { paddingRight: "10px" } : null}>
                <DownloadButton></DownloadButton>
              </div>
              <div style={mobileWidth ? { paddingTop: "10px" } : null}>
                <Link to="/myservice/addservice">
                  <CustomButton>Add Services</CustomButton>
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
                label="Filter Service By Status"
                defaultOption="Filter Service By Status"
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
      </CoursesWrapper>
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
