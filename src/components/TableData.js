import React, { ReactDOM, Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          First_name: "Prateek",
          Middle_name: "Dinesh",
          Last_name: "Singh",
          College: "LTT",
          Degree: "MCA",
          Specialisation: "Computer Science",
          Date_of_Passing: "2/07/2019",
          Allergies: "Skin",
          Hobbies: "Cricket",
          City: "Pune",
          Date_Of_Birth: "27/01/1995",
        },
        {
          id: 1,
          First_name: "Prateek",
          Middle_name: "Dinesh",
          Last_name: "Singh",
          College: "LTT",
          Degree: "MCA",
          Specialisation: "Computer Science",
          Date_of_Passing: "2/07/2019",
          Allergies: "Skin",
          Hobbies: "Cricket",
          City: "Pune",
          Date_Of_Birth: "27/01/1995",
        },
        {
          id: 1,
          First_name: "Prateek",
          Middle_name: "Dinesh",
          Last_name: "Singh",
          College: "LTT",
          Degree: "MCA",
          Specialisation: "Computer Science",
          Date_of_Passing: "2/07/2019",
          Allergies: "Skin",
          Hobbies: "Cricket",
          City: "Pune",
          Date_Of_Birth: "27/01/1995",
        },
        {
          id: 1,
          First_name: "Prateek",
          Middle_name: "Dinesh",
          Last_name: "Singh",
          College: "LTT",
          Degree: "MCA",
          Specialisation: "Computer Science",
          Date_of_Passing: "2/07/2019",
          Allergies: "Skin",
          Hobbies: "Cricket",
          City: "Pune",
          Date_Of_Birth: "27/01/1995",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Table />, document.getElementById("root"));

export default Table;
