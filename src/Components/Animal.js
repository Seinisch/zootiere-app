import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {client} from './FetchAllData';


const SinglePost = () => {
const { id } = useParams();
const [animal, setAnimal] = useState(null);
  
useEffect(() => {
    client.getEntry(id)
          .then((response) => {
          setAnimal(response);
          })
          .catch((error) => console.log(error));
    }, []);
    
//const foundAnimal = post.find((post) => id === post.sys.id);

return (
  <div className="single-animal-container">
      {animal && (
        <>
        <div className="row">
            <h2>{animal.fields.animalName}</h2> 
                <p>{animal.fields.shortDescription}</p>
                <div className="col-sm-12">  
                    <img src={animal.fields.picture.fields.file.url} className="animal-picture" alt="Tier" />
                </div>
        </div>
        <div className="row"> 
            <div className="col-sm-12">  
                <p>{animal.fields.longDescription}</p>
            </div>
        </div>
            <div className="row">
                {Object.keys(animal.fields.characteristics).map((keyName, i) => (
                <li className="travelcompany-input" key={i}>
                    <span className="input-label">{keyName}: {animal.fields.characteristics[keyName]}</span>
                </li>
                ))}
            </div>
            <div className="row">
                <Link to="/" className="details-button">Back to Home</Link>
            </div>
        </>
      )}
  </div>
)
}

export default SinglePost