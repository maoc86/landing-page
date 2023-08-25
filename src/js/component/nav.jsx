import React from "react";

const NavBar = () => {
	return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ms-auto me-5">
      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Service</a>
      <a className="nav-item nav-link" href="#">Conctact</a>
    </ul>
  </div>
</nav>
);
};

export default NavBar;