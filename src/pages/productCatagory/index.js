import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
} from "@material-ui/core/";
import CustomButton from "../../components/generic/custom.button/custom.button";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import AddCatagoryDialog from "../serviceCategory/modals/addmodal";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import { Delete, Edit } from "@material-ui/icons";
import DataTable from "../../components/common/table";
import AddModal from "./modal/addModal";
import EditModal from "./modal/editModal";

const rowData = [
  {
    id: 237,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9CpxtMds6wEoYS8g6NrZZ-iupuZ5AhZSwpLlkblxKB0caDR-IyLpkPqUERun_Eqiayc&usqp=CAU",
    title: "Title 2",
    createdAt: "20/03/2021",
  },
  {
    id: 238,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9CpxtMds6wEoYS8g6NrZZ-iupuZ5AhZSwpLlkblxKB0caDR-IyLpkPqUERun_Eqiayc&usqp=CAU",
    title: "Title 3",
    createdAt: "20/03/2021",
  },
  {
    id: 239,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9CpxtMds6wEoYS8g6NrZZ-iupuZ5AhZSwpLlkblxKB0caDR-IyLpkPqUERun_Eqiayc&usqp=CAU",
    title: "Title 4",
    createdAt: "20/03/2021",
  },
];

export default function ProductCategory() {
  const mobileWidth = IsMobileWidth();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const statusView = () => (
    <FormControlLabel control={<Switch name="checkedB" color="#123456" />} />
  );

  const actionView = () => (
    <div
      style={{
        display: "flex",
        marginTop: 20.5,
      }}
    >
      <Edit
        color="secondary"
        onClick={handleClickEdit}
        style={{ marginLeft: 5, marginRight: 5 }}
      />

      <Delete
        color="danger"
        style={{ color: "red", marginLeft: 5, marginRight: 5 }}
      />
    </div>
  );

  const columns = [
    { id: "id", label: "ID" },
    { id: "image", label: "Image", type: "image" },
    { id: "title", label: "Title" },
    { id: "createdAt", label: "Created At" },
    { id: "status", label: "Status", type: "custom", component: statusView },
    { id: "action", label: "Actions", type: "custom", component: actionView },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickEdit = () => {
    setOpenEdit(true);
  };

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
            <div className="title">Product Category</div>
            <div className={!mobileWidth ? "buttons" : "buttonsMobile"}>
              <div style={!mobileWidth ? { paddingRight: "10px" } : null}>
                <DownloadButton />
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
              >
                Add Catagory
              </Button>
              {/* <div className="buttons">
                <Grid xs={12}>
                  <AddCatagoryDialog />
                </Grid>
              </div> */}
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
                label="Filter Product Category By Status"
                defaultOption="Filter Product Category By Status"
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
      <AddModal open={open} setOpen={setOpen} />
      <EditModal open={openEdit} setOpen={setOpenEdit} />
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
