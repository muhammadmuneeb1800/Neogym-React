import React from "react";
import CardTrainer from "../components/CardTrainer";

import t1 from "../assets/t1.jpg";
import t3 from "../assets/t3.jpg";

export default function Trainer() {
  return (
    <>
      <center>
        <div id="bg-our">
          <div class="container">
            <div class="row">
              <div class="col">
                <p id="why">OUR GYM TRAINERS</p>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CardTrainer img={t1} />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CardTrainer img={t3} />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CardTrainer img={t1} />
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
