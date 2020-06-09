import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
class Header extends Component {
  state = {
    isOpen: false,
    navCollapsed: true,
    showNavbar: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    var style = {
      color: 'brown',
      fontSize: 17,
      textDecoration: 'none',
      fontFamily: 'Times New Roman',
      width: 50,
      paddingLeft: 10,
      backgroundImage: 'Farm365.png',
    };
    return (
      <div>
        <Navbar
          color=""
          light
          expand="md"
          style={{
            minHeight: '50px',
            margin: 0,
            backgroundColor: '#ffffff',
          }}>
          <div>
            <img src="Farm365.png" alt="" width="150px" height="60"></img>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link style={style} to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link style={style} to="/Vendors">
                    Vendors
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link style={style} to="/FarmerInfo">
                    Farmers
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link style={style} to="/login-as">
                    Login
                  </Link>
                </NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={style}>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/Login">VendorsLogin</Link>
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/Login2">farmersLogin</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <NavLink>
                  {" "}
                  <Link style={style} to="/SignUp">
                  Sign up
                  </Link>
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
