import React from "react";
import NavLink from "./NavLink.jsx";

export default React.createClass({
  render() {
      return (
        <div className="main">
          <h1 className="slanted">Taggat!</h1>
          <ul className="nav">
            <li><NavLink className="slanted" to="/tags/trav">Trav</NavLink></li>
            <li><NavLink className="slanted" to="/tags/galopp">Galopp</NavLink></li>
            <li><NavLink className="slanted" to="/about">Om</NavLink></li>
          </ul>
          {this.props.children}
        </div>
      );
    }
});
