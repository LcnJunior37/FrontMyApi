import React from "react";
import axios from "axios";
export default class Form extends React.Component {
  state = {
    name: "",
    email: "",
    id: ""
  };
  apiDelete() {
    axios({
      method: "delete",
      url: "http://localhost:3000/notes/" + this.state.id,
      data: {
        name: this.state.name,
        email: this.state.email
      }
    })
      .then(response => {
        alert(response);
      })
      .catch(error => {
        alert(error);
      });
  }

  apiPut() {
    /* const user = {
      name: this.state.name,
      email: this.state.email
    }; */

    axios({
      method: "put",
      url: "http://localhost:3000/notes/" + this.state.id,
      data: {
        name: this.state.name,
        email: this.state.email
      }
    })
      .then(response => {
        alert(response);
      })
      .catch(error => {
        alert(error);
      });
  }
  apiPost() {
    axios({
      method: "post",
      url: "http://localhost:3000/notes",
      data: {
        name: this.state.name,
        email: this.state.email
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        alert(error);
      });
  }

  change = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="form">
        <form>
          <input
            type="text"
            name="id"
            placeholder="id"
            value={this.state.id}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />

          <button type="submit" onClick={() => this.apiPost()}>
            Insert
          </button>
          <button type="submit" onClick={() => this.apiPut()}>
            Update
          </button>
          <button type="submit" onClick={() => this.apiDelete()}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}
