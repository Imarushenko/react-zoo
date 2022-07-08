import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import ShowAnimals from "./ShowAnimals";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function AnimalsData() {
  const [animals, setAnimals] = useState([]);
  const [addAnimal, setAddAnimal] = useState(false);

  // read external data
  useEffect(() => {
    const getAnimales = async (db) => {
      // use the collection in the firestore
      const animalsCollection = collection(db, "Animals");
      // gets all the docs of the collection
      const animalsSnapshot = await getDocs(animalsCollection);
      const animalsList = await animalsSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setAnimals(animalsList);
    };
    getAnimales(db);
  }, [animals]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ marginTop: "1rem" }}>Here you can see all our animals in the zoo and add a new animal </h1>
        <hr />

        {/* add a new animal */}
        <Link to='/animals/addNewAnimal'>
          <button className="btn btn-dark" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} onClick={() => setAddAnimal(true)}>Add a new animal</button>
        </Link>
        <div className="row">
          {animals.length > 0 &&
            animals.map((animal) => (
              <div className="col-sm" key={animal.id}>
                <ShowAnimals
                  id={animal.id}
                  category={animal.data.category}
                  name={animal.data.name}
                  img={animal.data.img}
                  isExistInIsrael={animal.data.isExistInIsrael}
                  numOfLegs={animal.data.numOfLegs}
                />
              </div>
            ))}

        </div>

      </div>
    </>
  );
}