import React, { useState, useCallback, useRef } from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col } from "./bootstrap-component";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { 
  height: 250, width: "100%", opacity: "90%" };

function Slider() {
  const [autoplay, /*setAutoplay */] = useState(false);
  const [icon, /*setIcon*/] = useState({});
  const slider_ref = useRef(null);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []);

  return (
    <div className="banner_main">
      <div className="container-fluid" style={{ paddingBottom: 5 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20, zIndex: 1}}>
            <RBCarousel
              animation={true}
              autoplay={autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={icon.leftIcon}
              rightIcon={icon.rightIcon}
              onSelect={_onSelect}
              ref={slider_ref}
              version={4}
            >
              <div style={{ ...styles, height: 450 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/smb-furniture/image/upload/v1635312424/Slider_Image/diwali_sale_smb_q5ohhl.jpg"
                  alt="diwali sale smb"
                  className="slider-img"
                />
                <div className="carousel-caption">Diwali sale</div>
              </div>
              <div style={{ ...styles, height: 450 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/smb-furniture/image/upload/v1635312913/Slider_Image/diwali_sale_smb2_khw1ya.jpg"
                  alt="diwali sale smb"
                />
                <div className="carousel-caption">Diwali sale</div>
              </div>
              <div style={{ ...styles, height: 450 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/smb-furniture/image/upload/v1635313158/Slider_Image/diwali_sale_smb3_spcrpu.jpg"
                  alt="diwali sale smb"
                />
                <div className="carousel-caption">Diwali sale</div>
              </div>
              <div style={{ height: 450 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/smb-furniture/image/upload/v1635312913/Slider_Image/diwali_sale_smb2_khw1ya.jpg"
                  alt="diwali sale smb"
                />
                <div className="carousel-caption">Diwali sale</div>
              </div>
             {/*  <div style={{ ...styles, backgroundColor: "white" }}>
                <div className="carousel-caption relative">
                  <div className="bg_white">
                    <h1 style={{ marginTop: "2rem" }}>
                      Welcome To our <span className="yello">Interior Design</span>
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                    </p>
                  </div>
                  <Link to="/" className="read_more ban_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center"></div>
                <div className="carousel-caption">Youtube</div>
              </div> */}
            </RBCarousel>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Slider;
