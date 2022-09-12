import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe" id="abtMe" >
        <h1 className="container-fluid p-5 text-light">About Me</h1>
        <p className='bg-dark py-3 px-5 text-light'>
            My name is Ethan McCann, I am 26 years old. I am at the beginning
          of a journey I hope to be life long. Writing code is a new found
          passion of mine that I am working at turning into a career.
          I attended coding bootcamp, to jumpstart and learn important
          fundamentals guiding me into the right direction for an entry level 
          position where I can be molded into an experienced web developer. I
          have the patience and persaverance it will take to find an oppurtunity
          I am hoping for. I am continuing to further my knowledge as well as 
          creating projects to be published along the way. Thank you for
          taking the time to check out my work! 
        </p>
      </div>
    )
  }
}