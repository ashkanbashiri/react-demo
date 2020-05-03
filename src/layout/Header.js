import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div id="particles-js"></div>
      <header style={headerStyle}>
        <h1>
          <NavLink className="my-class" to="/">
            Ashkan's React Application
          </NavLink>
        </h1>
        <NavLink className="my-class" activeClassName="active-link" to="/sv">
          Sorting-Visualizer{" "}
        </NavLink>
        |{" "}
        <NavLink
          className="my-class"
          activeClassName="active-link"
          to="/covid_summary"
        >
          Covid19-Summary{" "}
        </NavLink>
        |{" "}
        <NavLink
          className="my-class"
          activeClassName="active-link"
          to="/covid19"
        >
          Covid19-Daily{" "}
        </NavLink>
        |{" "}
        <NavLink className="my-class" activeClassName="active-link" to="/ml">
          DataScience Projects{" "}
        </NavLink>
      </header>
    </React.Fragment>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
    fontWeight: "Bold",
  },
  ":active": {
    textDecoration: "underline",
    fontWeight: "Bold",
    color: "Blue",
  },
};
const aStyle = {
  color: "#fff",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
    color: "Blue",
  },
  ":active": {
    textDecoration: "underline",
    fontWeight: "Bold",
    color: "Blue",
  },
};

export default Header;
