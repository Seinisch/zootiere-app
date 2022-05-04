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
/*
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
*/

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as contentful from "contentful";

const Animal = () => {

  const client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        });

  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setAnimal(response);
      })
      .catch((error) => console.log(error));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    <div className="single-animal-container">
      {animal && (
        <>
          <div className="row">
            <h1 className="px-5 pt-5">{animal.fields.animalName}</h1>
            <p className="px-5">{animal.fields.shortDescription}</p>
            <div className="col-sm-12">
              <img
                src={animal.fields.picture.fields.file.url}
                className="animal-picture"
                alt="Tier"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 p-5">
            <div dangerouslySetInnerHTML={{ __html: animal.fields.longDescription }} />
            </div>
          </div>
          <div className="row">
            <div className="text-start d-flex justify-content-center">
              <ul>
            {Object.keys(animal.fields.characteristics).map((keyName, i) => (
              <li className="travelcompany-input" key={i}>
                <span className="input-label">
                  {keyName}: {animal.fields.characteristics[keyName]}
                </span>
              </li>
            ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <Link to="/" className="btn btn-primary my-4">
              Zurück
            </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Animal;
