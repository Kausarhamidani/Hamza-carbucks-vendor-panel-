import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Visibility } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core/";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomButton from "../../components/generic/custom.button/custom.button";
import EscalateModal from "./modals/escalateDisputeModal";
const rowData = [
  {
    id: 1,
    vName: "Stephen Handry",
    cName: "Jimmy White",
    sName: "service 1",
    location: "Dubai",
    createdAt: "20/20/2021",
  },
  {
    id: 2,
    vName: "Ding Junhui",
    cName: "Mark Selby",
    sName: "service 1",
    location: "Sharja",
    createdAt: "20/20/2021",
  },
  {
    id: 3,
    vName: "Shaun Murphy",
    cName: "Sturat Bhingum",
    sName: "service 1",
    location: "Abu Dabi",
    createdAt: "20/20/2021",
  },
];

export default function Disputes() {
  const mobileWidth = IsMobileWidth();
  const [open, setOpen] = useState(false);
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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const actionView = () => (
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/disputedetails">
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

  const columns = [
    { id: "id", label: "ID" },
    { id: "vName", label: "Verdor Name" },
    { id: "cName", label: "Customer Name" },
    { id: "sName", label: "Service Name" },
    { id: "location", label: "Location" },
    { id: "createdAt", label: "Created At" },
    { id: "action", label: "Actions", type: "custom", component: actionView },
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
            <div className="title">Disputes</div>
            <CustomButton onClick={handleClickOpen}>
              escalate dispute
            </CustomButton>
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

      <EscalateModal setOpen={setOpen} open={open} />
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
