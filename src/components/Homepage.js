import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <h1 style={{ color: "#0E6655" }}>Welcome To The Zoo</h1>
        <hr />
        <img src="https://media.istockphoto.com/photos/world-wildlife-day-forest-silhouette-in-the-shape-of-a-wild-animal-picture-id1336896588?b=1&k=20&m=1336896588&s=170667a&w=0&h=mtucEe5TUJBT52udPW-QFe7iqzg6x_JXwXcCUKHv4f4=" />
        <div>
          <hr />
          <Link to="AllAnimals" style={{ margin: "1em" }}>
            <button className="btn btn-success">See all the animals</button>
          </Link>

          <Link to="animals">
            <button className="btn btn-primary">See animals by categories</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
