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
// import VendorDialog from "../../dialog/venderRemarkDialog/vendorDialog";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import {
  AccessAlarm,
  ThreeDRotation,
  Edit,
  Visibility,
  Delete,
} from "@material-ui/icons";

export default function DataTable({
  rows,
  width,
  page,
  count,
  columns,
  loading,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: width || 1150 }} aria-label="caption table">
          <TableHead>
            <TableRow classes={{ root: "headTable" }}>
              {columns.map((col) => (
                <TableCell key={col.id}>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? null
              : rows && rows.length === 0
              ? null
              : rows.map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((col) => (
                      <TableCell>
                        {col.type === "image" ? (
                          <img
                            style={{
                              height: 40,
                              borderRadius: 10,
                              marginTop: 5,
                            }}
                            src={row[col.id]}
                          />
                        ) : col.type === "custom" ? (
                          col.component(row)
                        ) : col.type === "msg" ||
                          col.type === "title" ||
                          col.type === "comment" ? (
                          row[col.id].length > 20 ? (
                            row[col.id].slice(0, 20) + "..."
                          ) : (
                            row[col.id]
                          )
                        ) : (
                          row[col.id]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        {loading ? (
          <div
            colSpan={8}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress style={{ margin: 20 }} />
          </div>
        ) : rows && rows.length === 0 ? (
          <div
            className="title"
            style={{
              display: "flex",
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            No record found!
          </div>
        ) : null}
      </TableContainer>

      <TablePagination
        page={page}
        count={count}
        component="div"
        rowsPerPage={rowsPerPage}
        // onPageChange={handleChangePage}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[5, 10, 25, 100]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
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
