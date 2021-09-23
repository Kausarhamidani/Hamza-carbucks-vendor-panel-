import { Link } from "react-router-dom";
import styled from "styled-components";
import { Visibility } from "@material-ui/icons";
import { FormControlLabel, Grid, Paper, Switch } from "@material-ui/core/";
import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import DownloadButton from "../../components/generic/download.button/download.button";
import CustomButton from "../../components/generic/custom.button/custom.button";
import CustomInput from "../../components/generic/custom.input/custom.input";

const rowData = [
  {
    id: 159,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ding junhui",
    email: "jhondoe@gmail.com",
  },
  {
    id: 160,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ronnie",
    email: "jhondoe@gmail.com",
  },
];

export default function SubAdmin() {
  const [name, setName] = useState("");
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
          marginTop: 20.5,
        }}
      >
        <Link to="/subadminview">
          <Visibility style={{ color: "secondary" }} />
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
      id: "image",
      label: "Image",
      type: "image",
    },
    {
      id: "name",
      label: "Name",
    },

    {
      id: "email",
      label: "Email",
    },
    {
      id: "status",
      label: "Status",
      type: "custom",
      component: statusView,
    },
    {
      id: "action",
      label: "Action",
      type: "custom",
      component: actionView,
    },
  ];

  const mobileWidth = IsMobileWidth();
  useEffect(async () => {}, []);

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
            <div className="title">Sub-Admin</div>
            <div className={!mobileWidth ? "buttons" : "buttonsMobile"}>
              <div style={!mobileWidth ? { paddingRight: "10px" } : null}>
                <DownloadButton />
              </div>
              <div style={mobileWidth ? { paddingTop: "10px" } : null}>
                <Link to="/subadmin/addsubadmin">
                  <CustomButton>Add Sub-Admin</CustomButton>
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
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                value={name}
                setValue={setName}
                placeholder="Search By Name"
                label="Search By Name"
              />
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
