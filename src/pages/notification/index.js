import React, { useState } from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core/";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import NotificationSelect from "../../components/generic/select/NotificationSelect";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import { Delete, Edit, Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 159,
    title: "dummy notificatin title 1",
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sollicitudin metus. Curabitur quis sapien ut leo vulputate facilisis. Nam quis purus dolor. Vivamus sagittis a arcu dictum accumsan. Sed quis accumsan massa, vel fringilla libero. Nam est libero, aliquet at elit eget, lobortis ultrices dolor. Vestibulum eleifend ornare placerat. Maecenas at felis eu est tincidunt faucibus. Donec ultricies eget dui gravida semper. Vestibulum ac finibus sem. Donec scelerisque nisl eu magna sollicitudin interdum.",
    date: "01/02/2020",
    notificationType: "service",
  },
];

export default function Notification() {
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

  const actionView = () => (
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/notificationdetails">
        <Visibility
          style={{
            color: "primary",
            marginLeft: 5,
            marginleft: 5,
          }}
        />
      </Link>
      <Delete
        color="danger"
        style={{ color: "red", marginLeft: 5, marginleft: 5 }}
      />
    </div>
  );

  const columns = [
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "msg", label: "Message", type: "msg" },
    { id: "date", label: "Date" },
    { id: "notificationType", label: "Notification Type" },
    { id: "action", label: "Actions", type: "custom", component: actionView },
  ];

  return (
    <Drawer>
      <NotificationWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <div className="title">Notification</div>
            <div className="buttons">
              <div>
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
              <NotificationSelect
                label="Filter Notification By Status"
                defaultOption="Filter Notification By Status"
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
      </NotificationWrapper>
    </Drawer>
  );
}

const NotificationWrapper = styled.div`
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
