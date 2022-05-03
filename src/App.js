import './App.css';
import AllAnimals from './Components/AllAnimals';
import { Routes, Route } from 'react-router-dom';
import SinglePost from './Components/Animal'
import { useEffect, useState } from 'react';
import {client} from './Components/FetchAllData';

function App() {
  const [animals, setAnimals] = useState([]);
  

    useEffect(() => {
    client.getEntries()
          .then((response) => {
          setAnimals(response.items);
          })
          .catch((error) => console.log(error));
    }, []);

  return (
    <div className="App">
      <div className = 'container'>
        <header>
          <div className="wrapper">
            <h3 className="m-5">Fabrices, Marios und Rainers Streichelzoo</h3>
          </div>
        </header>
        
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
      


    </div>
  );
}

export default App;
