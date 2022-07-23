import React from "react";
import Products from "./Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div classname="card-image">
      <div class="card bg-dark text-white border-0 ">
        <img
          src="/assets/image3.jpg"
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
            <div>
              <h5 class="card-title display-3 fw-bolder mb-2">Top figures</h5>
              <p class="card-text display-1 fs-3">
                Cheap, Beautiful, Durable, Quality, Good price.
              </p>
            </div>{" "}
            <div>
              <img src="/assets/img2.png" height="400px" width="400px" />
            </div>
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
};
export default Home;
