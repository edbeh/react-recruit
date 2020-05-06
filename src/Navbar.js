import React from "react";

const Navbar = () => {
  return (
    <div className="navigation-area">
      <nav className="navbar navbar-expand-md col-xs-12 container">
        <div>
          <a className="navbar-brand" href="/">
            <img src={require(`./logo.svg`)} alt="logo" />
            <h4>BlackHole</h4>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="font-weight-light">MENU</span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                View Trials
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                Description
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                My Favorites
              </a>
            </li>
            <li className="nav-item text-center">
              <input
                className="form-control"
                type="text"
                placeholder="Search trials"
              ></input>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
