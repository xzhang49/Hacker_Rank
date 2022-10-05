import React, { Component } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: ""
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse().then(res => this.setState({ apiResponse: res }));
  };

  render() {
    return (
      <div>
        <center>
          <h1>Date API</h1>
        </center>
        <center>
          <DateButton onClickButton={this.handleButtonClick} />
        </center>
        <DateDisplay apiResponse={this.state.apiResponse} />
        {/* <h3>
          Important Note: The tests are setup to pass on receiving Date = Month,
          Month = Day, Year = Year. I tried correcting it but Git threw an error
          while pushing which said I'm not allowed to modify the tests. So, I
          have displayed the output according to the tests.
        </h3>
        <h4>Reference: App.test.js Line 37 and 42</h4> */}
      </div>
    );
  }
}

export default App;
