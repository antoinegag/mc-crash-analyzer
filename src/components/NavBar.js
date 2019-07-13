import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav>
              <NavItem>
                <Button onClick={this.props.onNew} color="success">
                  New crashlog <i className="ml-2 fas fa-plus" />
                </Button>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/antoinegag/mc-crash-analyzer">
                  <i className="fab fa-github mr-2" />
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
