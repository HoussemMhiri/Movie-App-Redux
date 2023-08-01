import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ReactStars from "react-stars";
import { del } from "../../redux/actions";
import EditBtn from "../editBtn/EditBtn";
import { Link } from "react-router-dom";

const CardItem = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.img} />
        <Card.Body>
          <Card.Title>{el.movie}</Card.Title>
          <div style={{ marginLeft: "5em", marginBottom: "1em" }}>
            <ReactStars count={el.starRate} size={24} color1="#ffd700" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="danger" onClick={() => dispatch(del(el.id))}>
              Delete
            </Button>
            <EditBtn el={el} />
            <Link to={`/cards/${el.id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
