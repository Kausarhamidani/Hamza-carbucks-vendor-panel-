import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  AccessAlarm,
  ThreeDRotation,
  Edit,
  Visibility,
  Delete,
} from "@material-ui/icons";
import { TablePagination } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

function createData(id, cName, vName, serviceName, date) {
  return { id, cName, vName, serviceName, date };
}

const rows = [
  createData(
    // "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    468,
    "Mark Allan",
    "Stephen Maguire",
    "service 1",
    "20/06/2020"
  ),
  createData(
    // "https://th.bing.com/th/id/OIP.14g0bLCQX1cG4GFMbwDI8AHaE7?pid=ImgDet&w=800&h=532&rs=1",
    159,
    "Mark Selby",
    "Ronnie O'Sullivan",
    "service 2",
    "20/06/2020"
  ),
  createData(
    // "https://allpassdriving.co.uk/wp-content/uploads/2014/07/post19.jpg",
    145,
    "Mark Williams",
    "Jimmy Robertson",
    "service 3",
    "20/06/2020"
  ),
];

export default function TransactionTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow classes={{ root: "headTable" }}>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Customer Name</TableCell>
              <TableCell align="left">Vendor Name</TableCell>
              <TableCell align="left">Service Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">
                  <Link to="/chatdetails">{row.id}</Link>
                </TableCell>
                <TableCell align="left">
                  <Link to="/transactiondetails">{row.cName}</Link>
                </TableCell>
                <TableCell align="left">
                  <Link to="/transactiondetails">{row.vName}</Link>
                </TableCell>
                <TableCell align="left">{row.serviceName}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <FormControlLabel
                    control={
                      <Switch
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                  />
                </TableCell>
                <TableCell align="left">
                  <Link to="/transactiondetails">
                    <Visibility
                      style={{
                        color: "secondary",
                        marginLeft: 5,
                        marginleft: 5,
                      }}
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableWrapper>
  );
}
const TableWrapper = styled.div`
  .MuiTableCell-head {
    color: #ffffff;
    font-weight: bold;
  }
  .headTable {
    background-color: #a30000;
  }
`;
