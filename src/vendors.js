import React, { Component } from "react";
import firebase from "./firebase";
import moment from 'moment'
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

class Vendors extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('h:mm:a'),
    name: "",
    phone_number: "",
    address: "",
    quantity_of_product: "",
    paid_or_debt: "",
    town_city: "",
    error: "",
    vendors: []
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
      time: "",
      name: "",
      phone_number: "",
      address: "",
      quantity_of_product: "",
      paid_or_debt: "",
      town_city: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let obj = {
      date: this.state.date,
      time: this.state.time,
      name: this.state.name,
      phone_number: this.state.phone_number,
      address: this.state.address,
      quantity_of_product: this.state.quantity_of_product,
      paid_or_debt: this.state.paid_or_debt,
      town_city: this.state.town_city
    };
    const {
      date,
      time,
      name,
      phone_number,
      address,
      quantity_of_product,
      paid_or_debt,

      town_city
    } = this.state;
    if (
      date === "" ||
      time === "" ||
      name === "" ||
      phone_number === "" ||
      address === "" ||
      quantity_of_product === "" ||
      paid_or_debt === "" ||
      town_city === ""
    ) {
      this.setState({ error: "Please complete the form" });
    } else {
      firebase
        .database()
        .ref("vendors")
        .push(obj)
        .then(() => {
          this.setState({ submitting: false });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState(
        prevState => ({
          vendors: prevState.vendors.concat({
            date: date,
            time: time,
            name: name,
            phone_number: phone_number,
            address: address,
            quantity_of_product: quantity_of_product,
            paid_or_debt: paid_or_debt,
            town_city: town_city
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
        date,
        time,
        name,
        phone_number,
        address,
        quantity_of_product,
        error,
        town_city
      }
    } = this;

    return (
      <div className="offset-md-1 offset-lg-1 col-sm-12 col xs-12 col-md-10 com-lg-10">
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <center>
                <h4>Vendors</h4>
              </center>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      name="date"
                      value={date}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Time</Label>
                    <Input
                      type="text"
                      name="time"
                      value={time}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Name</Label>
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
                    <Label>Address</Label>
                    <Input
                      type="text"
                      name="address"
                      value={address}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Quantity of Product</Label>
                    <Input
                      type="text"
                      name="quantity_of_product"
                      value={quantity_of_product}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="col-md-6 col-lg-6">
                  <FormGroup>
                    <Label>Town / City</Label>
                    <Input
                      type="text"
                      name="town_city"
                      value={town_city}
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
                        value="paid"
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
                {" "}
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

export default Vendors;
