import React, { useState, useEffect } from 'react'
import headshot from './assets/headshot.jpg'

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> Introduction -> {CHILDREN}
*/

function Introduction () {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ["a Software Engineer", "a Runner", "lorem ipsum"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  const style = {
    animationFillMode: "both",
    animationDuration: "1000ms",
    animationDelay: "0ms",
    animationIterationCount: 1,
    opacity: 1,
    animationName: "react-reveal-614925314712219-1",
  };

  //TODO:add more friendly looking animation
  return (
    <div className='d-flex align-items-center'>
      <div id="showcase" className="react-reveal" style={style}><div className="showcase-content"><h1>Hello, I'm Camran</h1><h2> I am <span className="txt-rotate">
      <span>{textArray[textIndex]}</span>
    </span></h2></div></div>
    <div className="col-md-6 mx-auto">
      <img className="img-fluid" src={headshot} alt="" />
    </div>
    </div>
  )
}

export default Introduction;