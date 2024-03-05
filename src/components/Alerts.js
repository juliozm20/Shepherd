import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
// import alerts from "../alerts.json";
// import { Link } from "react-router-dom";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "INC2130379",
        customerId: "Zabbix",
        amount: "prbe530402001",
        ip: "10.120.106.12",
        cpu: "46%",
        freeMemory: "46%",
      },
      {
        customerId: "HM",
        amount: "prbe530403001",
        ip: "10.120.106.10",
        cpu: "22%",
        freeMemory: "22%",
        account: "retailro/readonly",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell
          sx={{
            color:
              (row.protein === "Active" && "red") ||
              (row.protein === "Resolved" && "green") ||
              (row.protein === "Pending" && "orange"),
          }}
        >
          <Typography>{row.protein}</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Case No.</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Server</TableCell>
                    <TableCell>IP</TableCell>
                    <TableCell>CPU</TableCell>
                    <TableCell>Free Memory</TableCell>
                    <TableCell>Account</TableCell>
                    <TableCell>Knowledgebase article</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>{historyRow.ip}</TableCell>
                      <TableCell>{historyRow.cpu}</TableCell>
                      <TableCell>{historyRow.freeMemory}</TableCell>
                      <TableCell>{historyRow.account}</TableCell>
                      <TableCell>
                        <Link
                          href="#"
                          underline="hover"
                          to="https://blueyonder.service-now.com/nav_to.do?uri=%2Fkb_view.do%3Fsysparm_article%3DKB0373253"
                        >
                          KB0375997
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="caption" gutterBottom>
                        Duration: 13 Minutes | Session ID: 323 | Program:
                        ApeEngineOP | Command: DELETE | Status: suspended |
                        Query: DELETE parent FROM Inventory_Item_BU_On_Hand_List
                        AS parent WHERE business_date = '11/06/2022'
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Zabbix|Open transaction Monitor -Assign to Support Team|High|KCWCAPRDDB11V|APP-APP|High",
    "KCWCAPRDDB11V",
    "30/Jan/2024 02:11:49",
    1,
    "✔",
    3.99
  ),
  createData(
    "Zabbix|Disk Space Utilization is >= 80% on volume F:|High|10|GENERIC|High",
    "hema-wfmr-dev-app",
    "30/Jan/2024 01:41:19",
    2,
    "❌",
    4.99
  ),
  createData(
    "Zabbix|Memory Utilization is High on dvbe530401001|Medium|dvbe530401001|GENERIC|Medium",
    "dvbe530401001",
    "30/Jan/2024 00:40:54",
    1,
    "✔",
    3.79
  ),
  createData(
    "Zabbix|Open transaction Monitor -Assign to Support Team|High|KCPRTCCDBSQ|APP-APP|High",
    "KCPRTCCDBSQ",
    "30/Jan/2024 00:11:37",
    1,
    "✔",
    2.5
  ),
  createData(
    "Zabbix|Disk Space Utilization is >= 80% on volume F:|High|10|GENERIC|High",
    "hema-wfmr-dev-app",
    "30/Jan/2024 00:35:19",
    1,
    "❌",
    1.5
  ),
  createData(
    "2Zabbix|Disk Space Utilization is >= 80% on volume F:|High|10|GENERIC|High",
    "hema-wfmr-dev-app",
    "30/Jan/2024 00:35:19",
    1,
    "❌",
    1.5
  ),
];

const tableContainerSx = {
  width: "max-content",
  // maxHeight: 500,
  // border: "1px solid rgba(128,128,128,0.4)",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 4,
};

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={tableContainerSx}>
      <Table aria-label="collapsible table" stickyHeader={true}>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                fontSize: "1rem",
                backgroundColor: "grey.100",
              },
            }}
          >
            <TableCell />
            <TableCell>Description</TableCell>
            <TableCell>Environment</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Instance No.</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <Row key={row.name} row={row} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
