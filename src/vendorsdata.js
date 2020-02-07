import React, { Component } from "react";
import { Table } from "reactstrap";
import firebase from "./firebase";

class VendorsData extends Component {
  state = {
    vendors: []
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref("vendors");
    itemsRef.on("value", snapshot => {
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
        vendors: newState
      });
    });
  }

  render() {
    return (
      <div className="container">
        <br/>
      

        <Table responsive striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Quantity of product</th>
              <th>Paid or Debt</th>
              <th>Disbursment Agent</th>
              <th>Quantity of product</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.vendors.map((item, index) => {
                // console.log(item)
                return (
                  <tr key={index}>
                    {" "}
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.name}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.address}</td>
                    <td>{item.quantity_of_product}</td>
                    <td>{item.paid_or_debt}</td>
                    <td>{item.disbursment_agent}</td>
                    <td>{item.quantity_of_product}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default VendorsData;
