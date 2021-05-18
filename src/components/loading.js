import React, { Component } from "react";
import "../css/loading.css";

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="loading mt-3">
          <br />
          <div className="loading__square" />
          <div className="loading__square" />
          <div className="loading__square" />
          <div className="loading__square" />
          <div className="loading__square" />
          <div className="loading__square" />
          <div className="loading__square" />
        </div>
      </>
    );
  }
}
