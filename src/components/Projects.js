import React, { Component } from 'react';

export default class Projects extends Component {

  render() {

    return (
      <div className='Projects bg-gray' id='prj1'>
        <div className='container bg-dark'>
          <div className='secTitle text-center bg-light text-dark'>My Projects</div>
          <div className='title'>
          <p>
            Code Refactoring
          </p>
          </div>
          <div className='row content'>
            <div className="prj-png1 col-sm-8">
              <img src={require('../images/prj1.png')} alt='Screenshot of WebPage'/>
            </div>
            <div className='desc col-sm-4 bg-dark'>
              <p>
                My very first project, with very little knowledge of HTML, CSS, or even web developement as a whole.
              I was tasked to refactor this webpage, so that it was more accesible to specific
              users. With the HTML following standard practices for structure and implementing 
              semantic elements allowed for clear readability of the code itself.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className='container bg-dark' id='prj2'>
        <div className='title'>
          <p>
            HTML/CSS/JS Quiz
          </p>
        </div>
        <div className="row content">
          <div className="col-sm-8">
            <img src={require('../images/prj2.png')} alt='Screenshot of my Quiz' />
            </div> 
          
          <div className='desc col-sm-4 bg-dark'>
            <p>
               I spent a good amount of time on this project specifically to break 
               down and truly understand the tools built in to the language.
               Although there is much more to JavaScript, I could see the 
               importance in grasping functions, for loops, each individual
               data type, and a few other key components. This is my first go
               at implementing JavaScript.
            </p>
          </div>
          </div>
        </div>
      <br />
        <div className='container bg-dark' id='prj3'>
        <div className='title'>
          <p>
            Work Day Scheduler
          </p>
          </div>
          <div className='row content'>
            <div className='col-sm-8'>
            <img src={require('../images/prj3.png')} alt='Screenshot of the Scheduler in use' />
            
          </div>
          <div className='desc col-sm-4 bg-dark'>
            <p>
               In this project, you will see that I learned to incorperate 
               third-party api's and now understand how useful they could be for 
               creating applications. Something as simple as the user seeing 
               the correct date when they view this application is made into 
               a much smoother and less time consuming process. 
            </p>
          </div>
          </div>
        </div>
        <br />
       <div>
        <div className='container bg-dark' id='prj4'>
        <div className='title'>
          <p>
            Note Taker
          </p>
          </div>
          <div className='row content'>
            <div className='col-sm-8'>
            <img src={require('../images/prj4.png')} alt='Screen Shot of Note Taker Landing Page' />
            
          </div>
          <div className='desc col-sm-4 bg-dark'>
            <p>
              In this note taker application I was given the task to
              allow a user to submit and save notes. To be able to go back to 
              these notes with a time stamp. The ability to do so without a 
              database and instead use local storage and caches, really 
              showed me the importance of a backend.
            </p>
          </div>
          </div>
        </div>
        <div className='groupProjects container bg-dark'>
          <div className='secTitle text-center'>
            GROUP PROJECTS
          </div>
        <div className='title' id='prj5'>
          <p>
            Date Night in Austin
          </p>
          </div>
          <div className='row content'>
            <div className='col-sm-8 bg-dark'>
            <img src={require('../images/grp-prj1.png')} alt='Landing page' />
            
          </div>
          <div className='desc col-sm-4 bg-dark'>
            <p>
               This project served a greater purpose than only learning the tools
               which this application is built upon. The purpose, or main goal is
               to prepare each contributor of the project to work as a team. 
               Communictation was key in many ways but specifically stood out as
               important when it came down to assigning roles to each individual,
               when setting deadlines, and when needing help from one another.
            </p>
          </div>
          </div>
        
        <div className='title' id='prj6'>
          <p>
            Fitness Connect
          </p>
          </div>
          <div className='row content'>
            <div className='col-sm-8 bg-dark'>
            <img src={require('../images/grp-prj2.png')} alt='Landing page' />
            
          </div>
          <div className='desc col-sm-4 bg-dark'>
            <p>
               Building an application as a team except this time with the knowledge
               that we have all learend up to this point, made this a much smoother 
               process. The way our bootcamp taught us essentially gave us tools in
               an order where it taught us how helpful new packages are. NodeJS was 
               introduced to us as well as Express. The new capabilities from Node
               seem endless.  
            </p>
          </div>
          </div>
      
        <div className='title' id='prj7'>
          <p>
            Lost Paws
          </p>
          </div>
          <div className='row content'>
            <div className='col-sm-8 bg-dark'>
            <img src={require('../images/grpPrj3.png')} alt='Landing page' />
            
          </div>
          <div className='desc col-sm-4 bg-dark'>
            <p>
               Incorperating the popular MERN stack and completing an application
               that contains 'full-stack' development. Was definitely a challenge
               but an important learning experience. Its important to not get discouraged
               when theres bugs or some minor detail causeing some component to fail.
               Just keep working together and an end product will result if you do not
               give up.  
            </p>
          </div>
          </div>
        </div>
     </div>
      </div>
    )
  }
}