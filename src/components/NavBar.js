import React, { Component } from 'react';





export default class NavBar extends Component {

  render() {

    return (
      <div className="NavBar" >
        <div className="container-fluid row bg-dark">
          <div className="col-sm-6 text-white row">
            <h1 className="navHead col-sm-8">
              <a href="#top">Ethan McCann</a>
              </h1>
            <br></br>
            <p className="col-sm-4 mt-3">Quick Links</p>
          </div>
          <div className="btnGroup col-sm-6 row">
          <div className="projectsBtn col-sm-4">
              <div className='btn'>
                <button className='btn1 bg-dark text-light'
                  onMouseOver={function() {
                    document.querySelector('.navList').style.display = 'block';
                    
                  }} 
                  onMouseLeave={function() {
                    document.querySelector('.navList').style.display = 'none';
                  }}>Page Navigation</button>
              </div>
              <div className="navList drpDwn row col-sm-6"
                onMouseOver={function() {
                document.querySelector('.navList').style.display = 'block'; 
              }}
              onMouseLeave={function() {
                document.querySelector('.navList').style.display = 'none';
              }} >
                <a href='#abtMe'><button>About Me</button></a>
                <a href='#pgSmry'><button>Page Summary</button></a>
                <a href='#prj1'><button>Projects</button></a>
                <a href='#cI'><button>Contact Info</button></a>
              </div>
            </div> 
            <div className="projectsBtn col-sm-4">
              <div className='btn'>
                <button className='btn2 bg-dark text-light'
                  onMouseOver={function() {
                    document.querySelector('.projectsList').style.display = 'block';
                  }} 
                  onMouseLeave={function() {
                    document.querySelector('.projectsList').style.display = 'none';
                  }}>Projects</button>
              </div>
              <div className="projectsList drpDwn row col-sm-6"
                onMouseOver={function() {
                  document.querySelector('.projectsList').style.display = 'block';
                }} 
                onMouseLeave={function() {
                  document.querySelector('.projectsList').style.display = 'none';
                }}>
                <a href='#prj1'><button>HTML/CSS Refactoring</button></a>
                <a href='#prj2'><button>JS Quiz</button></a>
                <a href='#prj3'><button>Work-Day Scheduler</button></a>
                <a href='#prj4'><button>Note Taker</button></a>
                <a href='#prj5'><button>Date Night</button></a>
                <a href='#prj6'><button>Fitness Connect</button></a>
                <a href='#prj7'><button>Lost Paws</button></a>
              </div>
            </div>    
            <div className="profilesBtn col-sm-4">
              <div className='btn'>
                <button className='btn3 bg-dark text-light'
                  onMouseOver={function() {
                    document.querySelector('.profilesList').style.display = 'block';
                  }} 
                  onMouseLeave={function() {
                    document.querySelector('.profilesList').style.display = 'none';
                  }}>Profiles</button>
              </div>
              <div className="profilesList drpDwn row col-sm-6"
                onMouseOver={function() {
                  document.querySelector('.profilesList').style.display = 'block';
                }} 
                onMouseLeave={function() {
                  document.querySelector('.profilesList').style.display = 'none';
                }}>
                <a href="https://www.emccannbusiness@gmail.com"><button>Gmail</button></a>
                <a href="https://www.github.com/mccannEthan335"><button>GitHub</button></a>
                <a href="https://www.linkedin.com/in/ethan-mccann-b67a22231"><button>LinkedIn</button></a>
                <a href="https://www.facebook.com/ethan.mccann/"><button>Facebook</button></a>
              </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}



