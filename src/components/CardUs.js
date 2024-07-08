import React from "react";

export default function CardUs(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="text-center text-white mb-3">
              <div class="card-body">
                <img src={props.img} class="m-4" alt="" />
                <h5 class="card-title fw-bold mb-2">{props.title}</h5>
                <p class="card-text">
                  The pain is very important, the coaching will be followed, but
                  I will give it this time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
