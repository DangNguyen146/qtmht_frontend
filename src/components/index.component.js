import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { urlApi } from "./urlApi";
import "./../css/style.css";
import Loading from "./loading";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], isLoading: "true" };
  }

  loadData = () => {};

  tabRow() {
    axios
      .get(urlApi + "persons")
      .then((response) => {
        console.log(response.data);
        this.setState({ persons: response.data, isLoading: "false" });
      })
      .catch(function (error) {
        console.log(error);
      });

    return this.state.persons.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return (
      <>
        <div className="card px-0">
          {/* <h2>hello!</h2> */}
          <div className="card__body">
            <div className="card__content">
              <div className="card__title text-center">
                <h2>My Tasks</h2>
                <p>{today}</p>
              </div>
              {/* <Loading /> */}
              {this.state.isLoading !== true ? (
                <table
                  className="table table-striped"
                  style={{ marginTop: 20 }}
                >
                  <thead>
                    <tr>
                      <th>Nametask</th>
                      <th>Status</th>
                      <th>Note</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.tabRow()}</tbody>
                </table>
              ) : (
                <Loading />
              )}
            </div>
          </div>
          <div className="mt-3">
            <Loading />
          </div>
        </div>
      </>
    );
  }
}
