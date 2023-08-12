import React from 'react'
import axios from 'axios';
import { useState } from 'react'


const Apiconsume = () => {
    const [fact, setFact] = useState("");


    const FetchData = () => {
    axios.get('https://catfact.ninja/fact').then(res => {
        setFact(res.data.fact)
        
        // setFact(res.data);
      }).catch(err => {
        console.log(err)
        
      });
    }
  return (
    <div>
        <button onClick={FetchData}>Click to generate a random Cat fact</button>
        <h1>{fact}</h1>
    </div>
  )
}

export default Apiconsume