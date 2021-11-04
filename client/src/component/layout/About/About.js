import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://github.com/TausifM";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dakqa9krs/image/upload/v1636012839/my-photo/Passport_qjaim3.jpg"
              alt="Founder"
            />
            <Typography>Tausif Sheikh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a website of e-commerce. It is a platform where you can
              buy and sell products.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/tausif-sheikh-8b4117bb/"
              target="blank"
            >
              <FaLinkedin className="youtubeSvgIcon" />
            </a>

            <a href="https://wwww.facebook.com/tcssuggest" target="blank">
              <FaFacebook className="instagramSvgIcon" />
            </a>

            <a href="https://github.com/TausifM" target="blank">
              <FaGithub className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
