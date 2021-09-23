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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "https://th.bing.com/th/id/OIP.LA5nOqH_b0T-CJg5bHWN4wHaEB?w=288&h=180&c=7&o=5&pid=1.7",
    159,
    "Service Name",
    "company name",
    "Dubai",
    4.0
  ),
  createData(
    "https://th.bing.com/th/id/OIP.14g0bLCQX1cG4GFMbwDI8AHaE7?pid=ImgDet&w=800&h=532&rs=1",
    237,
    "Name Here",
    "company name",
    "Abu Dahbi",
    4.3
  ),
  createData(
    "https://allpassdriving.co.uk/wp-content/uploads/2014/07/post19.jpg",
    262,
    "Service name",
    "company name",
    "Yazman",
    6.0
  ),
];

export default function BasicTable() {
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
              <TableCell>Image</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Service Name</TableCell>
              <TableCell align="left">Provided By</TableCell>
              <TableCell align="left">Service Location</TableCell>
              <TableCell align="left">CreatedAt</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" style={{ maxWidth: 100 }}>
                  <img
                    className="img-fluid"
                    src={row.name}
                    style={{ maxWidth: 100, borderRadius: 10 }}
                  />
                  {/* {'row.name'} */}
                </TableCell>
                <TableCell align="left">
                  <Link to="/chatdetails">{row.calories}</Link>
                </TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
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
                    // label="Primary"
                  />
                </TableCell>
                <TableCell align="left">
                  <Link to="/editservice">
                    <Edit style={{ marginLeft: 5, marginleft: 5 }} />
                  </Link>
                  <Link to="/servicedetails">
                    <Visibility
                      style={{ color: "blue", marginLeft: 5, marginleft: 5 }}
                    />
                  </Link>
                  <Delete
                    color="danger"
                    style={{ color: "red", marginLeft: 5, marginleft: 5 }}
                  />
                  {/* {row.protein} */}
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
