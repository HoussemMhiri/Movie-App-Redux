import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../../redux/actions";

const EditBtn = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [img, setImg] = useState(el.img);
  const [title, setTitle] = useState(el.movie);
  const [rate, setRate] = useState(el.starRate);
  const handleAdd = (e) => {
    e.preventDefault();
    const editedMov = {
      id: el.id,
      img: img,
      movie: title,
      starRate: rate,
    };
    dispatch(edit(editedMov));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Movie</Modal.Title>
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

export default EditBtn;
