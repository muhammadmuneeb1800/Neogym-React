import React from "react";
import location from "../assets/location-white.png";
import phone from "../assets/telephone-white.png";
import message from "../assets/envelope-white.png";
export default function Footer() {
  return (
    <>
      <div id="footer" className="container-fluid">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-4 col-sm-12 text-center">
              <div>
                <img src={location} alt="" />
                <p className="text-white mt-4">Location</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <div>
                <img src={phone} alt="" />
                <p className="text-white mt-4">+02 1234567890</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <div>
                <img src={message} alt="" />
                <p className="text-white mt-4">demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="py-2 mt-4">
              © 2020 All Rights Reserved. Design by Free Html Templates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
