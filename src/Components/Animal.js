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
