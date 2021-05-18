import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlApi } from "./urlApi";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get(urlApi + "persons/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));

    window.location.reload();
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.textTodo}</td>
        <td>{this.props.obj.status}</td>
        <td>{this.props.obj.textTask}</td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
