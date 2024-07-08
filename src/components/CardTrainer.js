import React from "react";

import fb from "../assets/facebook-logo.png"
import tw from "../assets/twitter.png"
import ins from "../assets/instagram-logo.png"

export default function CardTrainer(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="position-relative mt-5 mt-md-0">
              <p class="mb-1 fs-4 fw-bold">Smirth Jon</p>
              <img src={props.img} class="rounded-4 img-fluid" alt="" />
              <div
                id="cards-trainer"
                class="d-flex justify-content-center gap-4 align-items-center bg-white mx-auto py-3 rounded-5"
              >
                <a href="/">
                  <img src={fb} alt="" />
                </a>
                <a href="/">
                  <img src={tw} alt="" />
                </a>
                <a href="/">
                  <img src={ins} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
