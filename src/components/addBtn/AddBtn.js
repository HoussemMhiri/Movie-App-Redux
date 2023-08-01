import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../redux/actions";

const AddBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    const newMov = {
      img: img,
      movie: title,
      starRate: rate,
    };
    dispatch(add(newMov));
    setImg("");
    setTitle("");
    setRate("");
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Img:</Form.Label>
              <Form.Control
                type="url"
                autoFocus
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rate:</Form.Label>
              <Form.Control
                type="number"
                value={+rate}
                onChange={(e) => setRate(+e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBtn;
