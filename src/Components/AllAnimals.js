import { Link } from 'react-router-dom';

export default function AllAnimals({animals}) {

//const zoo = animals ? (animals.map(animal =>(console.log(animal)))) : ("Loading")

return (    
    animals
        ? animals.map((animal) => (
            <div className="col-lg-4 mb-3" key={animal.sys.id}>
            <div className="card h-100 m-5 d-flex align-items-stretch" style={{width: '25rem'}}>
            <img src={animal.fields.picture.fields.file.url} className="card-img-top" alt="" />
            <div className="card-body h-100">
              <h5 className="card-title">{animal.fields.animalName}</h5>
              <p className="card-text h-50">{animal.fields.shortDescription}</p>
              <Link to={animal.sys.id} className="details-button">Weiterlesen</Link>
            </div>
          </div>
          </div>
          ))
        : "Loading..."    
        
)
}
