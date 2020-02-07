import React, { Component } from "react";
import { Table } from "reactstrap";
import firebase from "./firebase";

class FarmersData extends Component {
  state = {
    loading: false,
    farmersdata: []
  };
  componentDidMount() {
    const itemsRef = firebase.database().ref("farmdata");
    itemsRef.on("value", snapshot => {
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
        farmersdata: newState
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
              <th>Names</th>
              <th>Phone Number</th>
              <th>Local Government</th>
              <th>Village</th>
              <th>Farm Cluster</th>
              <th>Type of farm produce</th>
              <th>variety of farm produce</th>
              <th>Quantity of harvest</th>
              <th>paid/debt</th>
              <th>Size of farm land</th>
              <th>Harvest period</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.farmersdata.map((item, index) => {
                // console.log(item)
                return (
                  <tr key={index}>
                    {" "}
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.type_of_farm_produce}</td>
                    <td>{item.local_government}</td>
                    <td>{item.village}</td>
                    <td>{item.farm_cluster}</td>
                    <td>{item.variety_of_farm_produce}</td>
                    <td>{item.quantity_of_harvest}</td>
                    <td>{item.paid_or_debt}</td>
                    <td>{item.size_of_farm_land}</td>
                    <td>{item.harvest_period}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FarmersData;
