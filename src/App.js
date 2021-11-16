import React from 'react'
import Axios from 'axios'
import './App.css';


const App = () => {
   const APP_ID = "02752619";

   const APP_KEY = 
   "a6ecbf0852f0fb833efb37522564ce1f";

   const url = 
   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

     const getData = async() => {
      const result = await Axios.get(url);

      console.log(result)
     }
   return (
      <div className="App">
         <h1 onClick={getData}>Food Searching App</h1>
      </div>
   );
};

export default App;
