import React from "react";
import { Link } from "react-router-dom";
import "../css/pagenotfound.css";

export default function PageNotFound() {
  return (
    <div className="pagenotFound">
      <div className="container">
        <div className="boo-wrapper">
          <div className="boo">
            <div className="face" />
          </div>
          <h1>404 Not Found!!!</h1>
          <p>
            Trở về trang chủ
            <br />
            <Link to="/" replace className="text-decoration-none">
              <button className="btn btn-info">Home</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
