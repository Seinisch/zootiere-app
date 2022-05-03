/*
import { useParams } from "react-router-dom";

export default function Animal({ animals }) {
  //an dieser Stelle nicht mit dem kompletten animals Array arbeiten
  //sondern anhand der ID des Entries einen neuen Fetch von Contentful
  //--> das ermöglicht das direkte Teilen von Links auf die Detailseiten

  const { id } = useParams();
  console.log(id);
  //console.log(animals);

  //const foundAnimal = animals.find((animal) => id === animals.sys.id);
  //console.log(foundAnimal);

  return <h1>Hallo Animal</h1>;
}
*/

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Animal = ({ animals }) => {
  const { id } = useParams();

  const foundAnimal = animals.find((post) => id === post.sys.id);

  console.log();

  return (
    <div className="single-animal-container">
      {foundAnimal && (
        <>
          <div className="row">
            <h2>{foundAnimal.fields.animalName}</h2>
            <p>{foundAnimal.fields.shortDescription}</p>
            <div className="col-sm-12">
              <img
                src={foundAnimal.fields.picture.fields.file.url}
                className="animal-picture"
                alt="Tier"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>{foundAnimal.fields.longDescription}</p>
            </div>
          </div>
          <div className="row">
            {Object.keys(foundAnimal.fields.characteristics).map(
              (keyName, i) => (
                <li className="travelcompany-input" key={i}>
                  <span className="input-label">
                    {keyName}: {foundAnimal.fields.characteristics[keyName]}
                  </span>
                </li>
              )
            )}
          </div>
          <div className="row">
            <Link to="/" className="details-button">
              Back to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Animal;
