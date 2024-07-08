import React from "react";
import HeroSection from "../components/HeroSection";
import CardUs from "../components/CardUs";

import img1 from "../assets/u-1.png";
import img2 from "../assets/u-2.png";
import img3 from "../assets/u-3.png";
import img4 from "../assets/u-4.png";
import CardTrainer from "../components/CardTrainer";

import t1 from "../assets/t1.jpg";
import t3 from "../assets/t3.jpg";

import contactImg from "../assets/contact-img.jpg";

export default function Home() {
  return (
    <>
      <div id="bg-main">
        <HeroSection />
      </div>

      {/* Why Us !! Section */}

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

      {/* <!-- Healty Mind Section --> */}

      <center>
        <div id="bg-health">
          <div class="container pb-5">
            <div class="row">
              <div class="col pt-5 pb-4">
                <p id="why">HEALTHY MIND, HEALTHY BODY</p>
                <p>
                  It is important to take care of the patient, to be followed by
                  the patient, but it will happen at such a time that there is a
                  lot of work and pain. For to come to the smallest detail, no
                  one should practice any kind of work unless he derives some
                  benefit from it. If the pain of the house is to be blamed for
                  the pleasure, the pain itself is very important. For to come
                  to the smallest detail, no one should practice any kind of
                  work unless he derives some benefit from it. Doubts or irure
                  pain in rebuke in pleasure wants to be a hair
                </p>
                <button class="px-5 fw-semibold mt-4">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </center>

      {/* <!-- Our Trainers Section --> */}

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

      {/* <!-- CONTACT US Section --> */}

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
