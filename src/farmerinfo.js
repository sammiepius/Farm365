import React, { Component } from "react";
// import moment from 'moment';
import firebase from "./firebase";

import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardFooter
 
} from "reactstrap";

class FarmerInfo extends Component {
  state = {
    date: "",
    name: "",
    phone_number: "",
    local_government: "",
    village: "",
    farm_cluster: "",
    type_of_farm_produce: "",
    quantity_of_harvest: "",
    paid_or_debt: "",
    size_of_farm_land: "",
    harvest_period: "",
    error: "",
    // modals: false,
    farminfo: []
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      error: ""
    });
  };
  resetForm = () => {
    this.setState({
      date: "",
      name: "",
      phone_number: "",
      local_government: "",
      village: "",
      farm_cluster: "",
      type_of_farm_produce: "",

      quantity_of_harvest: "",
      paid_or_debt: "",
      size_of_farm_land: "",
      harvest_period: ""
    });
  };

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    let obj = {
      date: this.state.date,
      name: this.state.name,
      phone_number: this.state.phone_number,
      type_of_farm_produce: this.state.type_of_farm_produce,
      local_government: this.state.local_government,
      village: this.state.village,
      farm_cluster: this.state.farm_cluster,

      quantity_of_harvest: this.state.quantity_of_harvest,
      paid_or_debt: this.state.paid_or_debt,
      size_of_farm_land: this.state.size_of_farm_land,
      harvest_period: this.state.harvest_period
    };

    const {
      date,
      name,
      phone_number,
      type_of_farm_produce,
      local_government,
      village,
      farm_cluster,
     
      quantity_of_harvest,
      paid_or_debt,
      size_of_farm_land,
      harvest_period
    } = this.state;
    if (
      date === "" ||
      name === "" ||
      phone_number === "" ||
      type_of_farm_produce === "" ||
      local_government === "" ||
      village === "" ||
      farm_cluster === "" ||
      
      quantity_of_harvest === "" ||
      paid_or_debt === "" ||
      size_of_farm_land === "" ||
      harvest_period === ""
    ) {
      this.setState({ error: "Please complete the form" });
    } else {
      firebase
        .database()
        .ref("farmdata")
        .push(obj)
        .then(() => {
          this.setState({ submitting: false });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState(
        prevState => ({
          farminfo: prevState.farminfo.concat({
            date: date,
            name: name,
            phone_number: phone_number,
            type_of_farm_produce: type_of_farm_produce,
            local_government: local_government,
            village: village,
            farm_cluster: farm_cluster,
            quantity_of_harvest: quantity_of_harvest,
            paid_or_debt: paid_or_debt,
            size_of_farm_land: size_of_farm_land,
            harvest_period: harvest_period
          })
        }),
        () => this.resetForm()
      );
    }
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      state: {
        error,
        date,
        name,
        phone_number,
        local_government,
        village,
        farm_cluster,
        type_of_farm_produce,
        
        quantity_of_harvest,
        // paid_or_debt,
        size_of_farm_land,
        harvest_period
      }
    } = this;
    return (
      <div className="container">
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <h4>
                <center>Farmers</center>
              </h4>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <div className="col-md-6 col-lg-4">
                  <FormGroup>
                    <label>Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      value={date}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Names</Label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Local Government</Label>
                    <Input
                      type="text"
                      name="local_government"
                      value={local_government}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Village</Label>
                    <Input
                      type="text"
                      name="village"
                      value={village}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Farm Cluster</Label>
                    <Input
                      type="text"
                      name="farm_cluster"
                      value={farm_cluster}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      name="phone_number"
                      value={phone_number}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Type of farm produce</Label>
                    <Input
                      type="text"
                      name="type_of_farm_produce"
                      value={type_of_farm_produce}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Quantity of harvest</Label>
                    <Input
                      type="text"
                      name="quantity_of_harvest"
                      value={quantity_of_harvest}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-12">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="paid_or_debt"
                        value="Paid"
                        onChange={handleChange}
                      />{" "}
                      Paid
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="paid_or_debt"
                        value="Debt"
                        onChange={handleChange}
                      />{" "}
                      Debt
                    </Label>
                    <hr />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Size of farm land</Label>
                    <Input
                      type="text"
                      name="size_of_farm_land"
                      value={size_of_farm_land}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Harvest period</Label>
                    <Input
                      type="text"
                      name="harvest_period"
                      value={harvest_period}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
              </FormGroup>
              {error !== "" ? (
                <center>
                  <p style={{ color: "red" }}>{error}</p>
                </center>
              ) : null}
            </CardBody>
            <CardFooter>
              <center>
                <Button color="primary" outline size="sm">
                  Submit
                </Button>
              </center>
            </CardFooter>
          </Card>
        </Form>
      </div>
    );
  }
}

export default FarmerInfo;
