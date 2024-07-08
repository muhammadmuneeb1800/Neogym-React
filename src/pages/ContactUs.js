import React from "react";

import contactImg from "../assets/contact-img.jpg";

export default function ContactUs() {
  return (
    <>
      <div id="bg-contact">
        <img src={contactImg} class="float-lg-start img-fluid" alt="" />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="float-lg-end">
                <p id="why" class="pt-5 mt-5 p-0">
                  CONTACT US
                </p>
                <div class="d-flex flex-column gap-4 mt-5">
                  <input
                    id="input"
                    type="text"
                    placeholder="Name"
                    class="form-control mt-2 rounded-0 py-3"
                  />
                  <input
                    id="input"
                    type="email"
                    placeholder="Email"
                    class="form-control mt-2 rounded-0 py-3"
                  />
                  <input
                    id="input"
                    type="number"
                    placeholder="Phone Number"
                    class="form-control mt-2 rounded-0 py-3"
                  />
                  <textarea
                    id="input"
                    name=""
                    placeholder="Message"
                    class="form-control mt-2 rounded-0 py-3"
                  ></textarea>
                  <button class="btn btn-danger rounded-0 px-5 py-2">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
