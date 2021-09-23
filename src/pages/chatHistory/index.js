import React from "react";
import Drawer from "../../components/drawer/drawer";
import DownloadButton from "../../components/generic/download.button/download.button";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core/";
import CustomButton from "../../components/generic/custom.button/custom.button";
import { Link } from "react-router-dom";
import CustomInput from "../../components/generic/custom.input/custom.input";
import CustomSelect from "../../components/generic/select/select";
import { IsMobileWidth } from "../../components/generic/util/util";
import DateSelect from "../../components/generic/date.picker/antDatePicker";
import { Delete, Visibility } from "@material-ui/icons";
import DataTable from "../../components/common/table";

const rowData = [
  {
    id: 159,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    cName: "Qasim",
    vName: "Asim",
    date: "20/06/21",
  },
  {
    id: 159,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    cName: "Qasim",
    vName: "Asim",
    date: "20/06/21",
  },
  {
    id: 159,
    image:
      "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    cName: "Qasim",
    vName: "Asim",
    date: "20/06/21",
  },
];

export default function ChatHistory() {
  const mobileWidth = IsMobileWidth();
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
        <Link to="/chatdetails">
          <Visibility
            style={{
              color: "secondary",
              marginLeft: 5,
              marginleft: 5,
            }}
          />
        </Link>
        <Delete color="primary" style={{ marginLeft: 5, marginleft: 5 }} />
      </div>
    );
  };

  const columns = [
    { id: "id", label: "Label" },
    { id: "image", label: "Image", type: "image" },
    { id: "cName", label: "Customer Name" },
    { id: "vName", label: "Vendor Name" },
    { id: "date", label: "Date" },
    { id: "action", label: "Actions", type: "custom", component: actionView },
  ];

  return (
    <Drawer>
      <ChatWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            wrap="wrap"
          >
            <div className="title">Inbox</div>
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
              <CustomSelect
                label="Filter Chat "
                defaultOption="Filter Chat By Status"
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
      </ChatWrapper>
    </Drawer>
  );
}

const ChatWrapper = styled.div`
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
