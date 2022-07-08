import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animals from "./components/Animals";
import AddAnimal from "./components/AddAnimal";
import AnimalsData from "./components/AnimalsData";
import LandAnimalsData from "./components/categories/LandAnimalsData";
import AirAnimalsData from "./components/categories/AirAnimalsData";
import SeaAnimalsData from "./components/categories/SeaAnimalsData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/AllAnimals" element={<AnimalsData />} />
      <Route path="/animals/addNewAnimal" element={<AddAnimal />} />
      <Route path="/animals/landAnimals" element={<LandAnimalsData />} />
      <Route path="/animals/airAnimals" element={<AirAnimalsData />} />
      <Route path="/animals/seaAnimals" element={<SeaAnimalsData />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
