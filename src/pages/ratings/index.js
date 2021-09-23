import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import RatingSelect from "../../components/generic/select/RatingsSelect";
import { Visibility } from "@material-ui/icons";
import RatingDialog from "./RatingModal";
import DataTable from "../../components/common/table";
import RatingModal from "./RatingModal";

const rowData = [
  {
    id: 237,
    image:
      "https://th.bing.com/th/id/OIP.14g0bLCQX1cG4GFMbwDI8AHaE7?pid=ImgDet&w=800&h=532&rs=1",
    cName: "Qasim",
    vName: "vendor 2",
    sName: "service 2",
    comment: "lorem ipsum dolar comment",
    date: "20/06/2021",
  },
];

export default function Ratings() {
  const mobileWidth = IsMobileWidth();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [addPromotion, setAddPromotion] = useState(false);
  const optionsArray = ["By Customer", "By Vendors"];
  const [selected, setselected] = useState("");

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

  const actionView = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/ratingdetails">
          <Visibility style={{ color: "secondary" }} />
        </Link>
        <Button
          style={{ marginLeft: 5 }}
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => setOpen(true)}
        >
          Remarks
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
    { id: "id", label: "ID" },
    { id: "image", label: "Image", type: "image" },
    { id: "cName", label: "Customer Name" },
    { id: "vName", label: "Vendor Name" },
    { id: "sName", label: "Service Name" },
    { id: "comment", label: "Comment", type: "comment" },
    { id: "date", label: "Date" },
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
            <div className="title">Ratings</div>
            {/* <div className="buttons">
                            <Grid xs={12}>
                                
                                  <CustomizedDialogs/>
                                    
                                
                            </Grid>
                        </div> */}
          </Grid>
          <Grid
            xs={12}
            classes={
              mobileWidth ? { root: "mobileFields" } : { root: "fields" }
            }
            style={{ paddingTop: "20px" }}
          >
            {/* <Grid xs={12} md={6} lg={3}>
              <RatingsSelect
                label="Filter Ratings"
                defaultOption="Filter Ratings"
              />
            </Grid> */}
            <Grid xs={12} md={6} lg={3}>
              {/* <CustomInput placeholder="Search By Service Name" label="Search By Service Name" /> */}
              <RatingSelect
                selected={setselected}
                options={optionsArray}
                label="Filter Ratings"
                defaultOption="Filter Ratings"
              />
            </Grid>
            {/* <Grid xs={12} md={6} lg={3}>
              <CustomInput placeholder="Search By Service Name" label="Search By Service Name" />
              <GenericSelect
                selected={setselected}
                options={optionsArray}
                label="Filter By Category"
                defaultOption="Filter By Category"
              />
            </Grid> */}

            <Grid
              xs={12}
              md={6}
              lg={3}
              style={!mobileWidth ? { paddingLeft: "10px" } : null}
            >
              <DateSelect />
            </Grid>
            {/* <Grid xs={12} md={6} lg={3} style={!mobileWidth ?{paddingLeft:"10px"} : null}>
                            <CustomInput placeholder="Search By Name" label="Search By Name" />
                        </Grid> */}
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
      <RatingModal open={open} setOpen={setOpen} />
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
