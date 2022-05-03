import './App.css';
import { Routes, Route } from "react-router-dom";
import AllAnimals from './Components/AllAnimals'
import Animal from "./Components/Animal"
import {useEffect, useState} from "react";
import * as contentful from 'contentful'

function App() {
  const zoo = contentful.createClient ({
    space : process.env.REACT_APP_SPACE_ID,
    accessToken : process.env.REACT_APP_ACCESS_TOKEN,
})

const [animals, setAnimals] = useState(null);

  useEffect(() => {
    function getAllAnimals() {
     zoo.getEntries()
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
      <div className = 'container'>
        <header>
          <div className="wrapper">
            <h3 className="m-5">Zoo</h3>
          </div>
        </header>
        
        <main>

        {/* RouterConfig */}
        <Routes>
          <Route path="/" element={<AllAnimals animals={animals}/>}/>
          <Route path="/:id" element={<Animal animals={animals} />} />
        </Routes>
        </main>
      </div>
      


    </div>
  );
}

export default App;
