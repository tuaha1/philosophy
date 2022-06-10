import React from "react";
import Header from "./header";
import Card from "./Card";
import data from "../data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./ItemDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <Header />
      {data.map((val, index) => {
        return (
          <Card
            index={index}
            name={val.name}
            born={val.born}
            image={val.image}
          />
        );
      })}
    </div>
  );
};
