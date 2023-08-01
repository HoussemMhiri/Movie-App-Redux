import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import RateStars from "../stars/RateStars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adventure, all, drama, scifi } from "../../redux/actions";

const HeadNav = ({ inp, search, setRate }) => {
  const { moviesList, filtredMovies } = useSelector((state) => state);
  const [select, setSelect] = useState("all");
  const dispatch = useDispatch();
  const handleSelect = () => {
    switch (select) {
      case "sci-fi":
        return dispatch(scifi());

      case "drama":
        return dispatch(drama());

      case "adventure":
        return dispatch(adventure());

      default:
        return dispatch(all());
    }
  };
  useEffect(() => {
    handleSelect();
  }, [moviesList, select]);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <form action="">
              <div className="select">
                <select
                  name="todos"
                  id=""
                  className="filter-todo"
                  onChange={(e) => setSelect(e.target.value)}
                  value={select}
                >
                  <option value="all">All</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="drama">Drama</option>
                  <option value="adventure">Adventure</option>
                </select>
              </div>
            </form>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={inp}
                onChange={search}
              />
            </Form>
            <RateStars setRate={setRate} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeadNav;
