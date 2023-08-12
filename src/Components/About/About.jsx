import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'

const About = () => {
// const[digit, setDigit] = useState(20)
// const digitref = useRef()


// const onclick = () => {
//   setDigit(digit * (digitref.current.value))

// }
  return (
    <div>
      {/* {digit}
      <input type ="text"
      ref={digitref}
      />
      <button onClick={onclick}>click</button> */}

      <Navbar />
      <Body title='About' />
    </div>
  )
}

export default About