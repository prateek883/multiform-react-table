// UserDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <h1 className="ui centered">Basic Info</h1>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Middle Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UserDetails;
