import React, { Component } from "react";
import axios from "axios";
import { urlApi } from "./urlApi";
import "../css/create.css";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      textTodo: "",
      status: "todo",
      textTask: "",
    };
  }

  onChangeName(e) {
    this.setState({
      textTodo: e.target.value,
    });
  }

  onChangeCompany(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      textTask: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      textTodo: this.state.textTodo,
      status: this.state.status,
      textTask: this.state.textTask,
    };
    axios
      .post(urlApi + "persons/add", obj)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      status: "",
      textTask: "",
    });
  }

  render() {
    return (
      <>
        <div className="card" style={{ marginTop: 10 }}>
          <h3>Add New Todo</h3>
          <details className="warning">
            <summary>Create new ToDo</summary>
            <p>Some text to be hidden.</p>
          </details>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name Todo: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.textTodo}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <label>Status: </label>
              <input
                type="text"
                className="form-control"
                defaultValue="todo"
                value={this.state.status}
                onChange={this.onChangeCompany}
                disabled
              />
            </div>
            <div className="form-group mb-3">
              <label>Note: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.textTask}
                onChange={this.onChangeAge}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add new"
                className="btn btn-warning"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
