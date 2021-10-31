import React from "react";
import profilePng from "../images/pc.png";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User"></img>
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
