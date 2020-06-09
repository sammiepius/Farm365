import React, { Component } from 'react';
// import { Table } from 'reactstrap'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from './firebase';
import { Scrollbars } from 'react-custom-scrollbars';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class VendorsData extends Component {
  state = {
    vendors: [],
  };
  componentDidMount() {
    const itemsRef = firebase.database().ref('vendors');
    itemsRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          time: items[item].time,
          date: items[item].date,
          name: items[item].name,
          phone_number: items[item].phone_number,
          address: items[item].address,
          quantity_of_product: items[item].quantity_of_product,
          paid_or_debt: items[item].paid_or_debt,
          disbursment_agent: items[item].disbursment_agent,
        });
      }
      console.log(newState);
      this.setState({
        vendors: newState,
      });
    });
  }
  useStyles = () => {
    makeStyles({
      table: {
        minWidth: 700,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <br />
        <TableContainer component={Paper}>
          <Scrollbars style={{ width: 1200, height: 500 }}>
            <Table
              className={this.useStyles}
              aria-label="simple table"
              size="small"
              aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell align="right">Time</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Phone Number</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">
                    Quantity of product
                  </StyledTableCell>
                  <StyledTableCell align="right">Paid or Dept</StyledTableCell>
                  <StyledTableCell align="right">
                    Disbursment Agent
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.vendors.map((item, index) => {
                  // console.log(item)
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {item.date}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.time}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.phone_number}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.address}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.quantity_of_product}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.paid_or_debt}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.disbursment_agent}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Scrollbars>
        </TableContainer>
      </div>
    );
  }
}

export default VendorsData;
