import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllAnimals from "./Components/AllAnimals";
import Animal from "./Components/Animal";
import { useEffect, useState } from "react";
import * as contentful from "contentful";

function App() {
  const zoo = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    function getAllAnimals() {
      zoo
        .getEntries()
        .then((response) => {
          setAnimals(response.items);
          //console.log(response.items);
        })
        .catch((error) => console.log(error));
    }
    getAllAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="d-flex justify-content-center">
            <h1 className="my-5 head-h1 w-90">
              Fabrices, Marios und Rainers Streichelzoo
            </h1>

        </header>
      <div className="container">
        

        <main>
        <div className="wrapper">
        <div className="row">  
        
        <Routes>
          <Route path="/" element={<AllAnimals animals={animals}/>}/>
          <Route path="/:id" element={<SinglePost />}/>
        </Routes>
        </div>
        </div>

        </main>

      


      </div>
      <footer id="footer-color" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
      
            <span className="text-muted">© 2022 Streichelzoo, Inc</span>
        </div>

        <ul class="nav col-md-4 list-unstyled justify-content-end mr-5" >
            <li className="ms-3"><i className="fa fa-twitter 2x" style={{fontSize: '48px'}}></i></li>
            <li className="ms-3"><i className="fa fa-whatsapp 2x" style={{fontSize: '48px'}}></i></li>
            <li className="ms-3"><i className="fa fa-facebook 2x" style={{fontSize: '48px'}}></i></li>
            <li className="ms-3"><i className="fa fa-instagram 2x" style={{fontSize: '48px'}}></i></li>
        </ul>
    </footer>
    </div>
  );
}

export default App;
