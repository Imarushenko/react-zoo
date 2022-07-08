import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Animals() {

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <h3>Here you can choose which animals you desire to see between the following categories from our zoo</h3>
          <hr />
          <Link to='/animals/landAnimals'>
            <button className="btn btn-warning" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }}>For Land Animals</button>
          </Link>
          <Link to='/animals/airAnimals'>
          <button className="btn btn-info" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} value="seaAnimals" name="animalType">For Sea Animals</button>
          </Link>
          <Link to='/animals/seaAnimals'>
          <button className="btn btn-success" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} value="airAnimals" name="animalType">For Air Animals</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
