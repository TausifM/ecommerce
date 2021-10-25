import React from "react";
import PCImg from '../images/pc.png';

function Instant() {
  return (
    <>
      <div className="instant">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="titlepage text_align_left">
                <h2>Get an instant estimate</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <a className="read_more" href="/">
                  Get A quote
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="instant_img">
                <figure>
                  <img src={PCImg} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instant;
