// Confirmation.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class OtherInfo extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">OtherInfo</h1>
        <Form.Field>
          <label>Allergies(if Any)</label>
          <input
            placeholder="allergies"
            onChange={this.props.handleChange("allergies")}
            defaultValue={values.allergies}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobbies</label>
          <input
            placeholder="Hobbies"
            onChange={this.props.handleChange("hobbies")}
            defaultValue={values.hobbies}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            placeholder="city"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Date of Birth</label>
          <input
            placeholder="Date of Birth"
            onChange={this.props.handleChange("dateofbirth")}
            defaultValue={values.dateofbirth}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default OtherInfo;
