// import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'

const Home = (props) => {
    // const[name, setName] = useState("BiggJedi")


    // const click = () =>{
    //     setName("dRE")
    // }
  return (
    
    <div>
        <Navbar />
        <Body title='Home'/>
        {/* {name}
        <button onClick={click}>click me</button>
        
        <h2>{props.BiggJedi}</h2> */}
    </div>
  )
}

export default Home