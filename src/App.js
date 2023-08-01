import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadNav from "./components/headNav/HeadNav";
import CardsCont from "./components/cardsCont/CardsCont";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Detts from "./components/details/Detts";

function App() {
  const { filtredMovies } = useSelector((state) => state);
  const [inp, setInp] = useState("");
  const handleSearch = (e) => {
    setInp(e.target.value);
  };

  const [rate, setRate] = useState(0);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="App">
      <BrowserRouter>
        {show ? (
          <HeadNav inp={inp} search={handleSearch} setRate={setRate} />
        ) : null}

        <Routes>
          <Route path="/" element={<HomePage show={handleShow} />} />
          <Route
            path="/cards"
            element={
              <CardsCont
                moviesList={filtredMovies.filter(
                  (el) =>
                    el.movie
                      .trim()
                      .toLowerCase()
                      .includes(inp.trim().toLowerCase()) && el.starRate >= rate
                )}
              />
            }
          />
          <Route path="/cards/:id" element={<Detts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
