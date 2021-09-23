import React, { useEffect, useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import {
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import VendorModal from "./vendorModal";
import { Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 159,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ding junhui",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 160,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ronnie",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 161,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Mark Selby",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 162,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ding junhui",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 163,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ronnie",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 164,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Mark Selby",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 165,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ding junhui",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 166,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ronnie",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 167,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Mark Selby",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 168,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Ronnie",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
  {
    id: 169,
    image: "https://etimg.etb2bimg.com/photo/74295396.cms",
    name: "Mark Selby",
    regDate: "20/02/2021",
    email: "jhondoe@gmail.com",
    phone: "+344 5621545521",
    company: "ABC",
  },
];

export default function Vendors() {
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

  const actionView = () => {
    return (
      <div
        style={{
          display: "flex",
          marginTop: 20.5,
        }}
      >
        <Link to="/vendordetails">
          <Visibility style={{ color: "secondary" }} />
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
  };

  const statusView = () => {
    return (
      <FormControlLabel control={<Switch name="checkedB" color="primary" />} />
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
      id: "regDate",
      label: "Registration Date",
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
      id: "company",
      label: "Company",
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
            <div className="title">Vendors</div>
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
                label="Filter Vendors By Status"
                defaultOption="Filter Vendors By Status"
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                placeholder="Search By Name/Email/Address"
                label="Search by Name/Email/Address"
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
            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <CustomInput
                placeholder="Search By Company"
                label="Search by Company"
              />
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
      </CoursesWrapper>

      <VendorModal open={open} setOpen={setOpen} />
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
