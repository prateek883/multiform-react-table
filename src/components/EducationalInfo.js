// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class EducationalInfo extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  constructor(props) {
    super(props);

    this.state = {
      date: "",
    };
  }

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">Educational Info</h1>
        <Form.Field>
          <label>College</label>
          <input
            placeholder="college"
            onChange={this.props.handleChange("college")}
            defaultValue={values.college}
          />
        </Form.Field>
        <Form.Field>
          <label>Degree</label>
          <input
            placeholder="degree"
            onChange={this.props.handleChange("degree")}
            defaultValue={values.degree}
          />
        </Form.Field>
        <Form.Field>
          <label>Specialisation</label>
          <input
            placeholder="Specialisation"
            onChange={this.props.handleChange("specialisation")}
            defaultValue={values.specialisation}
          />
        </Form.Field>
        <Form.Field>
          <label>Date of Passing</label>
          <input
            placeholder="Date of Passing"
            onChange={this.props.handleChange("dateofpassing")}
            defaultValue={values.dateofpassing}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default EducationalInfo;
