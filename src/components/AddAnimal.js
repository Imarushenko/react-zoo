import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AddAnimal() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [numOfLegs, setNumOfLegs] = useState();
  const [isExistInIsrael, setIsExistInIsrael] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Animals"), {
        category: category,
        name: name,
        img: img,
        numOfLegs: numOfLegs,
        isExistInIsrael: false,
        created: Timestamp.now(),
      });
    } catch (e) {
      alert(e);
    }

    setCategory("");
    setName("");
    setImg("");
    setNumOfLegs("");
    setIsExistInIsrael("");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Add a new animal</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            style={{ marginTop: "2em" }}
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            placeholder="Enter animal category"
          />
          <input
            className="form-control"
            style={{ marginTop: "2em" }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter animal name"
          />
          <input
            className="form-control"
            style={{ marginTop: "2em" }}
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="Enter img URL of the animal"
          />
          <input
            className="form-control"
            style={{ marginTop: "2em" }}
            type="text"
            onChange={(e) => setNumOfLegs(e.target.value)}
            value={numOfLegs}
            placeholder="Enter number of animal's legs"
          />
          <input
            className="form-control"
            style={{ marginTop: "2em" }}
            type="text"
            onChange={(e) => setIsExistInIsrael(e.target.value)}
            value={isExistInIsrael}
            placeholder="Does the animal exist in Israel?"
          />
          <button
            type="submit"
            className="btn btn-success"
            style={{ marginTop: "2em", width: "20rem" }}
          >
            Add a new animal
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
