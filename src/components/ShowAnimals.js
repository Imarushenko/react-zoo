import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function ShowAnimals({
  id,
  category,
  img,
  isExistInIsrael,
  name,
  numOfLegs,
}) {

  // delete animal function
  // const handleDelete = async () => {
  //   // find by id
  //   const animalDocRef = doc(db, "Animals", id);
  //   try {
  //     await deleteDoc(animalDocRef)
  //   } catch (e) { alert(e) }

  // }

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
      {/* <button className="btn btn-success">View Animal</button>
      <button className="btn btn-danger" style={{ marginTop: 5 }} onClick={() => handleDelete()}>Delete Animal</button> */}
    </div>
  );
}
