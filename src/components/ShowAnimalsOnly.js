import React from "react";

export default function ShowAnimalsOnly({
  category,
  img,
  isExistInIsrael,
  name,
  numOfLegs,
}) {

  return (
    <div className="card" style={{ width: "18rem", marginTop: "2em" }}>
      <img className="card-img-top" src={img} height={250} width={400} />
      <div className="card-body">
        <h5 className="card-text">Category: {category}</h5>
        <h5 className="card-text">Name: {name}</h5>
        <h5 className="card-text">
          Is the animal exist in Israel? {isExistInIsrael}
        </h5>
        <h5 className="card-text">Number of legs: {numOfLegs}</h5>
      </div>
    </div>
  );
}
