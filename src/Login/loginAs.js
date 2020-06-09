import React, { Component } from 'react';

import {
  Table,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Container,
  Col,
} from 'reactstrap';

class LoginAs extends Component {
  render() {
    return (
      <div>
        <Container>
          <center>
            <h2 style={{ marginTop: '60px' }}>Log in as...</h2>
          </center>
          <br />

          <Row>
            <Col sm="6" style={{ paddingBottom: '40px' }}>
              <Card
                body
                style={{ height: '95%' }}
                onClick={() => {
                  this.props.history.push('/Login');
                }}>
                <CardTitle>
                  <center>
                    {' '}
                    <h5>Vendor</h5>
                  </center>
                </CardTitle>

                <img
                  style={{ height: 'auto', width: '100% ', maxWidth: '400px' }}
                  className="img-fluid br-3"
                  src={require('../images/vendor.svg')}
                />
              </Card>
            </Col>

            <Col sm="6" style={{ paddingBottom: '40px' }}>
              <Card
                body
                style={{ height: '95%' }}
                onClick={() => {
                  this.props.history.push('/Login2');
                }}>
                <CardTitle>
                  <center>
                    {' '}
                    <h5>Farmer</h5>
                  </center>
                </CardTitle>

                <img
                  style={{ height: 'auto', width: '100% ', maxWidth: '400px' }}
                  className="img-fluid br-3"
                  src={require('../images/farm.svg')}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginAs;
