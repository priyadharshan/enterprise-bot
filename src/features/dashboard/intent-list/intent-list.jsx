import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './intent-list.css'

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  container: {
    marginLeft: 70,
  }
});

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 13,
    padding: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: "#00A0AE",
      color: "#fff",
    },
    cursor: 'pointer',
  },
}))(TableRow);

export const IntentList = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="intent list">
        <TableHead>
          <StyledTableRow>
          <StyledTableCell colSpan={2}>
          <i class="material-icons">format_list_bulleted</i>
          <h4>INTENT LIST</h4>
          <i class="material-icons intent-list-icons">search</i>
          <i class="material-icons intent-list-icons">control_point</i>
          <span>ADD NEW</span>
          </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {props.intentList.data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name.slice(0,20)}
              </StyledTableCell>
              <StyledTableCell>
                <IconButton aria-label="select intend details" size="small" onClick={() => setOpen(!open)}>
                  <ChevronRightIcon />
                </IconButton>
        </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}