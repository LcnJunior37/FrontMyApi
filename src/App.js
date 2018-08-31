import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import Form from "./componets/Form.js";

class App extends Component {
  state = {
    list: [],
    movies: []
  };

  componentWillMount() {
    this.apiRequest();
  }

  apiRequest = async () => {
    this.setState({ load: true });

    await axios.get("http://localhost:3000/notes").then(response => {
      this.setState({
        list: response.data
      });
    });
  };

  bla() {
    this.apiRequest();
  }
  load() {
    let rows = [];

    for (let i = 0; i < this.state.list.length; i++) {
      rows.push(
        <div className="user" key={this.state.list[i]._id}>
          Id: {this.state.list[i]._id} <br />
          Nome: {this.state.list[i].name}
          <br /> email: {this.state.list[i].email}{" "}
        </div>
      );
    }
    return <div> {rows}</div>;
  }

  render() {
    return (
      <div className="App">
        <Form />

        {this.load()}
      </div>
    );
  }
}

export default App;
