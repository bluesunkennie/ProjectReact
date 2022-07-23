import React from "react";
import Products from "./Products";
const Contact = () => {
  return (
    <div classname="card-image">
      <div class="card bg-dark text-white border-0 ">
        <img
          src="/assets/contact-background.jpg"
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
              <h5
                class="card-title display-2 fw-bolder mb-3"
                style={{ color: "white" }}
              >
                Contact us
              </h5>
              <p class="card-text" style={{ display: "block", color: "white" }}>
                If you have any feedback please send it to us. We will receive
                feedback and answer all your eyes. Thank you.
              </p>
            </div>{" "}
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label" style={{ color: "white" }}>
                  Input name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please enter name"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" style={{ color: "white" }}>
                  Input email
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please enter email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" style={{ color: "white" }}>
                  Description
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Please enter description"
                ></textarea>
              </div>
              <div class="mb-3" style={{ textAlign: "right" }}>
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{ width: "100px" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
