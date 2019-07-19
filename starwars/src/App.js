import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Cards from './components/cards.js'
import './App.css';

// const apiReq = axios.get('https://swapi.co/api/people/')
// console.log(apiReq); 

const App = () => {
  const [data, setData] = useState([])

  const fetch = () => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      setData(res.data.results)
    })
    .catch(error => {console.log('seems as if the data is lost somewhere on tattoine!')}
    )
  }

  useEffect(fetch, [])
  console.log(data)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="Header">React Wars</h1>
      </header>  
      {data.map((item, index) => {
        return <Cards charName={item.name} charGender={item.gender} charYear={item.birth_year} />
      })}
    </div>
  );
}

export default App;
