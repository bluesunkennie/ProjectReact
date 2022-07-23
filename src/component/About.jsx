import React from "react";
import Products from "./Products";
const About = () => {
  return (
    <div classname="card-image">
      <div class="card bg-dark text-white border-0 ">
        <img
          src="/assets/image6.jpg"
          class="card-img"
          alt="Background"
          height="580px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div
            className="container"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div class="col-md-4">
              <img src="/assets/img6.png" height="400px" width="400px" />
            </div>
            <div class="col-md-6">
              <h5 class="card-title display-2 fw-bolder mb-3">About us</h5>
              <p class="card-text">
                If you have any feedback please send it to us. We will receive
                feedback and answer all your eyes. Thank you.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
