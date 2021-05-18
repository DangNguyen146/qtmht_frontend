import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./../css/navbar.css";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav
        ref={this.myRef}
        onScroll={this.onScroll}
        className="navbar navbar-expand-md navbar-light w-100  px-5 py-3 fw-bolder"
        id="navbar"
      >
        <div className="navbar-star ">
          <Link className="navbar-brand" to="/">
            TodoList
          </Link>
        </div>
        {/* responsive */}
        <div className="menu-wrap d-block d-md-none">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li className="nav-item bg-orange py-3">
                    <Link className="navbar-brand text-light" to="/">
                      TodoList
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link to={"/create"} className="nav-link">
                      Create
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link to={"/index"} className="nav-link">
                      List todo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarScroll"
          style={{ flexGrow: "unset" }}
        >
          <div className="navbar-center">
            <ul
              className="navbar-nav mr-auto my-2 my-md-0 navbar-nav-scroll"
              style={{ maxHeight: 100 }}
            >
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/index"} className="nav-link">
                  List todo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
