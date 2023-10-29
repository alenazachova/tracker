import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(project, time) {
  return { project, time };
}

const rows = [
  createData("Férová práce", "12"),
  createData("Geniální potraviny", "13"),
  createData("Jak zabránit další pandemii", "15"),
  createData("Přežít", "10"),
  createData("Neštěkej na svého psa", "5"),
  createData("Manifest menopauzy", "3"),
  createData("Mýty a naděje digitálního světa", "19"),
  createData("Pořiďte si druhý mozek", "20"),
  createData("Šťastnější", "10"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PROJECT</StyledTableCell>
            <StyledTableCell align="right">TIME STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.project}>
              <StyledTableCell component="th" scope="row">
                {row.project}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
