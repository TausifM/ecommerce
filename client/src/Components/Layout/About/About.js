import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
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
              src="https://res.cloudinary.com/smb-furniture/image/upload/v1635605959/Founder/HozefaSMB_gbqn4o.jpg"
              alt="Founder"
            />
            <Typography>Hozefa Bohra</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              We are team of like-minded designers, engineers, and artists – all
              looking to make a difference in the world with our craft. We focus
              on creating design that is visually stunning, yet not cheap or
              overpriced. The results are elegant and practical, and we do it
              with a lot of love and support.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.indiamart.com/smb-furniture/" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/smb-furniture" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
