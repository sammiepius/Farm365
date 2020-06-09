import React, { Component } from 'react';
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

class FarmersData extends Component {
  state = {
    loading: false,
    farmersdata: [],
  };
  componentDidMount() {
    const itemsRef = firebase.database().ref('farmdata');
    itemsRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          date: items[item].date,
          name: items[item].name,
          phone_number: items[item].phone_number,
          type_of_farm_produce: items[item].type_of_farm_produce,
          local_government: items[item].local_government,
          village: items[item].village,
          farm_cluster: items[item].farm_cluster,
          variety_of_farm_produce: items[item].disbursment_agent,
          quantity_of_harvest: items[item].quantity_of_harvest,
          paid_or_debt: items[item].paid_or_debt,
          size_of_farm_land: items[item].size_of_farm_land,
          harvest_period: items[item].harvest_period,
        });
      }
      console.log(newState);
      this.setState({
        farmersdata: newState,
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
                  <StyledTableCell align="right">Names</StyledTableCell>
                  <StyledTableCell align="right">Phone Number</StyledTableCell>
                  <StyledTableCell align="right">
                    Local Government
                  </StyledTableCell>
                  <StyledTableCell align="right">Village</StyledTableCell>
                  <StyledTableCell align="right">Farm Cluster</StyledTableCell>
                  <StyledTableCell align="right">
                    Type of farm produce
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    variety of farm produce
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Quantity of harvest
                  </StyledTableCell>
                  <StyledTableCell align="right">paid/debt</StyledTableCell>
                  <StyledTableCell align="right">
                    Size of farm land
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Harvest period
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.farmersdata.map((item, index) => {
                  // console.log(item)
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {item.date}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.phone_number}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.type_of_farm_produce}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.local_government}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.village}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.farm_cluster}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.variety_of_farm_produce}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.quantity_of_harvest}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.paid_or_debt}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.size_of_farm_land}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.harvest_period}
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

export default FarmersData;
