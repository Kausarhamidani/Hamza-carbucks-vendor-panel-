import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import { Delete, Visibility } from "@material-ui/icons";
import { Button, Grid, Paper } from "@material-ui/core/";
import { IsMobileWidth } from "../../components/generic/util/util";
import CustomButton from "../../components/generic/custom.button/custom.button";
import AddRequestModal from "./addRequestModal";
const rowData = [
  {
    id: 9,
    vName: "Stephen Handry",
    cName: "catagory 1",
    date: "20/20/2021",
  },
  {
    id: 19,
    vName: "Stephen Hakings",
    cName: "catagory 2",
    date: "20/20/2021",
  },
  {
    id: 159,
    vName: "Stephen Maguire",
    cName: "catagory 3",
    date: "20/20/2021",
  },
];

export default function RequestCategory() {
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
      <Link to="/viewrequestedcategory">
        <Visibility
          style={{
            color: "secondary",
            marginLeft: 5,
            marginleft: 5,
          }}
        />
      </Link>
      <Delete color="primary" style={{ marginLeft: 5, marginRight: 5 }} />
    </div>
  );

  const columns = [
    { id: "id", label: "ID" },
    { id: "vName", label: "Vendor Name" },
    { id: "cName", label: "Catagory Name" },
    { id: "date", label: "CreatedAt" },
    { id: "action", label: "Action", type: "custom", component: actionView },
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
            <div className="title">Requested Category</div>
            <CustomButton onClick={handleClickOpen}>add request</CustomButton>
          </Grid>
          <Grid style={{ paddingTop: "20px" }}>
            <DataTable
              page={page}
              width={600}
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
      <AddRequestModal setOpen={setOpen} open={open} />
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
