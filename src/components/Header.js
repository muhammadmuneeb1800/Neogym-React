import React from "react";
import search from "../assets/search-icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div id="bg-main">
        {/* <!-- Navbar Section --> */}

        <nav className="navbar navbar-expand-lg mx-2 pt-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
              NEOGYM
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="active nav-link px-4 fw-semibold text-white"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/whyus"
                    className="nav-link px-4 fw-semibold text-white"
                  >
                    WHY US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/trainer"
                    className="nav-link px-4 fw-semibold text-white"
                  >
                    TRAINERS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link px-4 fw-semibold text-white"
                  >
                    CONTACT US
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-4 fw-semibold text-white" href="/">
                    <img src={search} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
      </div>
    </>
  );
}
