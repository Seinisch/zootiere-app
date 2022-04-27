import * as contentful from 'contentful'
import {useState, useEffect} from "react";

export default function AllAnimals() {


    const client = contentful.createClient ({
    //space : 'e2jyvrhf3z9p',
    //accessToken :'gHJwNA71tzCpbxM9mJPGnew2Fwgdczo691FobS36-JE'
    space : process.env.REACT_APP_SPACE_ID,
    accessToken : process.env.REACT_APP_ACCESS_TOKEN,
})
 

const [animals, setAnimals] = useState(null);

useEffect(() => {
client.getEntries()
      .then((response) => {
      setAnimals(response.items);
      })
      .catch((error) => console.log(error));
}, []);


//const zoo = animals ? (animals.map(animal =>(console.log(animal)))) : ("Loading")

return (    
    animals
        ? animals.map((animal) => (
            <div className="col-lg-4 mb-3">
            <div className="card h-100 m-5 d-flex align-items-stretch" style={{width: '25rem'}}>
            <img src={animal.fields.picture.fields.file.url} className="card-img-top" alt="" />
            <div className="card-body h-100">
              <h5 className="card-title">{animal.fields.animalName}</h5>
              <p className="card-text h-50">{animal.fields.shortDescription}</p>
              <a href="#" className="btn btn-primary">Weiterlesen</a>
            </div>
          </div>
          </div>
          ))
        : "Loading..."    
        
)
}