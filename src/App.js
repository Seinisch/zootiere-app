import './App.css';
import AllAnimals from './Components/AllAnimals'

function App() {
  

  return (
    <div className="App">
      <div className = 'container'>
        <header>
          <div className="wrapper">
            <h3 class="m-5">Fabrices, Marios und Rainers Streichelzoo</h3>
          </div>
        </header>
        
        <main>
        <div className="wrapper">
        <div class="row">  
        <AllAnimals />
        </div>
        </div>
        </main>
      </div>
      


    </div>
  );
}

export default App;
