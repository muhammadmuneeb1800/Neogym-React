import React from "react";
import CardUs from "../components/CardUs";

import img1 from "../assets/u-1.png";
import img2 from "../assets/u-2.png";
import img3 from "../assets/u-3.png";
import img4 from "../assets/u-4.png";

export default function whyus() {
  return (
    <>
      <center>
        <div class="bg-3rd">
          <div class="container">
            <div class="row">
              <div class="col pt-5">
                <p id="why">WHY CHOOSE US?</p>
                <br />

                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <CardUs title="QUALITY EQUIPMENT" img={img1} />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <CardUs title="NUTRITION" img={img2} />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <CardUs title="HEALTHY DIET PLAN" img={img3} />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <CardUs title="SPORT TRAINING" img={img4} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </center>
    </>
  );
}
