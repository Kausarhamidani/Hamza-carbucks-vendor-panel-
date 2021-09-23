import styled from "styled-components";
import { Link } from "react-router-dom";
import { AddIcCallOutlined, Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DataTable from "../../components/common/table";
import ServiceCatagoryAddModal from "./modals/addmodal";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
} from "@material-ui/core/";
import CustomInput from "../../components/generic/custom.input/custom.input";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import DownloadButton from "../../components/generic/download.button/download.button";
import ServiceCatagoryAddModalContent from "./modals/addmodal/serviceCatagoryAddModalContent";
import AddModal from "./modals/addmodal";
import EditModal from "./modals/editModal";

const rowsData = [
  {
    id: 159,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z2nf8_Bb9NleZ3nXXJOHmm7nVVHxvraBzyldLI3kJRGDjcbb779YiIWLVmrDc7Nov3o&usqp=CAU",
    title: "Titile 1",
    createdAt: "20/02/2021",
    email: "jhondoe@gmail.com",
  },
  {
    id: 159,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z2nf8_Bb9NleZ3nXXJOHmm7nVVHxvraBzyldLI3kJRGDjcbb779YiIWLVmrDc7Nov3o&usqp=CAU",
    title: "Titile 1",
    createdAt: "20/02/2021",
    email: "jhondoe@gmail.com",
  },
  {
    id: 159,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z2nf8_Bb9NleZ3nXXJOHmm7nVVHxvraBzyldLI3kJRGDjcbb779YiIWLVmrDc7Nov3o&usqp=CAU",
    title: "Titile 1",
    createdAt: "20/02/2021",
    email: "jhondoe@gmail.com",
  },
];

export default function ServiceCategory() {
  const mobileWidth = IsMobileWidth();
  useEffect(async () => {}, []);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
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
        marginTop: 20.5,
      }}
    >
      <Edit
        color="secondary"
        onClick={handleEditOpen}
        style={{ marginLeft: 5, marginRight: 5 }}
      />

      <Delete
        color="danger"
        style={{ color: "red", marginLeft: 5, marginRight: 5 }}
      />
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
      id: "createdAt",
      label: "Created At",
    },
    {
      id: "title",
      label: "Title",
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = () => {
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
            <div className="title">Service Category</div>
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
                  <ServiceCatagoryAddModal />
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
                label="Filter Service Category By Status"
                defaultOption="Filter Service Category By Status"
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
              loading={loading}
              page={page}
              columns={columns}
              loading={loading}
              count={rowsData.length}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              rows={rowsData.slice(
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
