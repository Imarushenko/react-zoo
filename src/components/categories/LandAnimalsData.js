import React, { useState, useEffect } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import ShowAnimals from "../ShowAnimals";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function LandAnimalsData({id}) {
    const [animals, setAnimals] = useState([]);

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
            })).filter(animal => animal.data.category === "land");
            setAnimals(animalsList);
        };
        getAnimales(db);
    }, [animals]);

      // delete animal function
  const handleDelete = async () => {
    // find by id
    const animalDocRef = doc(db, "Animals", id);
    try {
      await deleteDoc(animalDocRef)
    } catch (e) { alert(e) }

  }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 style={{ marginTop: "1rem" }}>Land Animals Category</h1>
                <hr />
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
                                     <button className="btn btn-success">View Animal</button>
                                     <button className="btn btn-danger" style={{ marginTop: 5 }} onClick={() => handleDelete()}>Delete Animal</button>
                            </div>
                            
                        ))}

                </div>

            </div>
        </>
    );
}