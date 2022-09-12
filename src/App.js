import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import  AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Comment from './components/Comment';

function App() {
  return (
    <div className='body'>
      <div>
      <NavBar />
      </div>
      <br />
      <div className='intro text-light mt-3'>
        <p><b>Hello,</b> 
        <br /> 
        My Name is 
        <br />
        <b className=''>Ethan</b>
        </p>
        <br />
        <p>This is My Web Development Portfolio</p>
      </div>
      <br />
      <div className="summary" id="pgSmry">
        <p>
          The Purpose of this Portfolio is to showcase my projects, as well as give 
          the viewer an idea of my creative ability as well as a look into how my 
          thought process works. The visual aspect, I aimed towards an appealing and
          easy to navigate page. With a "behind the scenes" where I have written the code 
          to be read with ease so that it is self explanitory to those who view the code
          with no questions towards why its written the way it is.
        </p>                                                      
      </div>
      <AboutMe />
      <Projects />
      <Comment />
    </div>
  );
} 

export default App;
