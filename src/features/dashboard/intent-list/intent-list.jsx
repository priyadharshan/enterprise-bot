import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export const IntentList = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="intent list">
        <TableHead>
          <TableRow>
          <TableCell colSpan={3}>
          <i class="material-icons">format_list_bulleted</i>
          INTENT LIST
          </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.intentList.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name.slice(0,20)}
              </TableCell>
              <TableCell>
                <IconButton aria-label="select intend details" size="small" onClick={() => setOpen(!open)}>
                  <ChevronRightIcon />
                </IconButton>
        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}