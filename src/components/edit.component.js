import React, { Component } from "react";
import axios from "axios";
import { urlApi } from "./urlApi";
import "../css/create.css";
import Loading from "./loading";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      textTodo: "",
      status: "",
      textTask: "",
    };
  }

  componentDidMount() {
    axios
      .get(urlApi + "todos/edit/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          textTodo: response.data.textTodo,
          status: response.data.status,
          textTask: response.data.textTask,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .post(urlApi + "todos/update/" + this.props.match.params.id, obj)
      .then((res) => console.log(res.data));

    this.props.history.push("/index");
  }

  render() {
    return (
      <div className="card" style={{ marginTop: 10 }}>
        <h3 align="center">Update Todo task</h3>
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
            <input type="submit" value="Add new" className="btn btn-warning" />
          </div>
        </form>
      </div>
    );
  }
}
