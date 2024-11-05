import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${props.id}`);
  };

  return (
    <div className="Card" onClick={handleClick}>
      <Link to={"edit/" + props.id} onClick={(e) => e.stopPropagation()}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <img className="img" src={props.img} alt={props.name} />
      <h2 className="name">{props.name}</h2>
      <p className="damage">{"Damage: " + props.damage}</p>
      <h3 className="ultimate">{"Ultimate: " + props.ultimate}</h3>
      <h4 className="description">{props.description}</h4>
    </div>
  );
};

export default Card;
