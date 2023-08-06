import React from 'react';
// import "/assets/style.css";
import "./about.css";

let authorPic = 
<link rel="stylesheet" type="text/css" href="../assets/style.css"/>
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img height="400px" src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="Jayce" />
      <p>
         Jayce is my name, I enjoy the outdores and being with friends and family.  
          I was taught that if i want something you earn it, and that nothing is imposide 
          if you work hard.  I have been working sence I was a kid at the age of 16 Years old.  
          Nothing is imposibe if you strive for it. All you need is Hard work and some time.  
        </p>
        <p>
          I enjoy working with my hands outside in the mud, and inside with 
          technology.  Computer Programing is new to me but with hard work and persistence 
          I can do it.  I choose to Program because of some friends they recamended it to me,
          they thought I would be good at it and would like it.  From what I have learned so 
          far I do enjoy it and I'm learning alot. 
      </p>
      <p>

      </p>
    </div>
  );
}