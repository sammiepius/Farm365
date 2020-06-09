import React, { Component } from 'react';
// import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Card,
  CardHeader,
  Button,
  CardBody,
} from 'reactstrap';
import './App.css';

class LandingPage extends Component {
  state = {
    renderForm: true,
  };
  render() {
    return (
      <div>
        {/* <Jumbotron
          className="col-xs-12  col-sm-12  col-md-12  col-lg-12 jumbotron"
          style={{ marginTop: '5vh', backgroundColor: 'white' }}>
          <h5 className="text-center display-3">Welcome to FARM365</h5>
          <p className="lead">
            <center>
              We provide a complete supply chain for a wide variety of products
            </center>
          </p>
          <br />
          <br />
          <center>
            {' '}
            <a href="https://www.farm365.farm/">
              <Button size="sm" style={{ backgroundColor: 'brown' }}>
                Go To Home Page
              </Button>
            </a>
          </center>
        </Jumbotron> */}
        <Row className="p-0 m-0 pt-lg-3  d-flex flex-direction-row align-items-center">
          <Col md={7}>
            <img className="img-fluid br-3" src={require('./Farm365.png')} />

            <span className="text-center">
              <h5>
                {' '}
                We provide a complete supply chain for a wide variety of
                products{' '}
              </h5>
            </span>
            <center>
              {' '}
              <a href="https://www.farm365.farm/">
                <Button size="sm" style={{ backgroundColor: 'brown' }}>
                  Go To Home Page
                </Button>
              </a>
            </center>
          </Col>
          <Col md={5}>
            {this.state.renderForm ? (
              <Card className="p-3" className="shadow">
                <CardHeader> Sign up</CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md={12} className="mt-3">
                        <FormGroup>
                          <Input
                            type="name"
                            name="full_name"
                            placeholder="Full Name"
                            id="name"
                            // onChange={this.onChange}
                            // value={this.state.full_name}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input
                            type="email"
                            name="email"
                            // onChange={this.handleChange}
                            // value={this.state.email}
                            placeholder="example@gmail.com"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="user_address"
                            // onChange={this.handleChange}
                            // value={this.state.user_address}
                            placeholder="Your address in details"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            // onChange={this.handleChange}
                            // value={this.state.password}
                            placeholder="Enter your password"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={12}>
                        <center>
                          {' '}
                          <Button color="primary">Sign up</Button>
                        </center>
                      </Col>
                    </Row>
                    <center>
                      {' '}
                      <small>Have account?</small>{' '}
                      <small className="text-info">
                        <a>Log in</a>
                      </small>{' '}
                    </center>
                  </Form>
                </CardBody>
              </Card>
            ) : (
              <Card className="shadow w-100">
                <CardHeader tag="h6">Log in </CardHeader>
                <Form className="m-2">
                  <Row form>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="email"
                          // value={this.state.email}
                          // onChange={this.onChange}
                          type="email"
                          placeholder="example@gmail.com"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="password"
                          // value={this.state.password}
                          // onChange={this.onChange}
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <center>
                    <Link to="/product">
                      {' '}
                      <Button color="primary">Log in</Button>
                    </Link>
                  </center>
                  <center>
                    <small>
                      Don't have Account? <a className="text-info">Sign up</a>
                    </small>
                  </center>
                </Form>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
