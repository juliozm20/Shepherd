import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "@mui/material";
// import { Link } from "react-router-dom";

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
                Servers
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
  createData("Aldi", "30/Jan/2024 02:11:49", 20, "John Smith", "...", 3.99),
  createData(
    "Foot Locker",
    "30/Jan/2024 02:11:49",
    20,
    "John Smith",
    "...",
    4.99
  ),
  createData("McDonalds", "30/Jan/2024 02:11:49", 10, "Jane Doe", "...", 3.79),
  createData("Starbucks", "30/Jan/2024 02:11:49", 15, "Jane Doe", "...", 2.5),
  createData("Walmart", "30/Jan/2024 02:11:49", 24, "Jane Doe", "...", 1.5),
];

const tableContainerSx = {
  width: "max-content",
  // maxHeight: 500,
  // border: "1px solid rgba(128,128,128,0.4)",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 4,
};

export default function Server() {
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
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Servers</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Other</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
