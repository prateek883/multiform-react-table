// MainForm.jsx
import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import EducationalInfo from "./EducationalInfo";
import OtherInfo from "./OtherInfo";

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    college: "",
    Degree: "",
    Specialisation: "",
    Dateofpassing: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      middleName,
      lastName,
      college,
      Degree,
      Specialisation,
      Dateofpassing,
    } = this.state;
    const values = {
      firstName,
      middleName,
      lastName,
      college,
      Degree,
      Specialisation,
      Dateofpassing,
    };
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <BasicInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <EducationalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OtherInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default MainForm;
