import { Link } from "react-router-dom";


export default function AllAnimals({ animals }) {
  return (
    <div className="wrapper">
      <div className="row mb-5">
        {animals
          ? animals.map((animal) => (
              <div key={animal.sys.id} className="col-lg-4 mb-5">
                <div
                  className="card h-100 m-5 d-flex align-items-stretch"
                  style={{ width: "25rem" }}
                >
                  <img
                    src={animal.fields.picture.fields.file.url}
                    className="card-img-top img-fluid"
                    alt={animal.fields.animalName}
                  />
                  <div className="card-body h-75">
                    <h5 className="card-title">{animal.fields.animalName}</h5>
                    <p className="card-text h-50">
                      {animal.fields.shortDescription}
                    </p>
                    <Link to={animal.sys.id} className="btn btn-primary mt-4">
                      Weiterlesen
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
