import React, { Component } from 'react';


export default class Comment extends Component {
  render() {
  
  return (
    <div className='Comment' id='cI'>
      <div className='container-fluid row'>
        <div className='form col-sm-8'>
          <form>
            <div className='uEmail'>
            <label for="form-input-control-email">Enter Your Email</label>
            <br />  
            <input
              id="form-input-control-email"
              type="text"
              label="Email"
              name="user_email"
              placeholder="Email…"
              required
              size="40"
            />
            </div>
            <br />
            <div className="uName">
            <label for="form-input-control-name">Enter Your Name</label>  
            <br />
            <input
              id="form-input-control-name"
              type="text"
              label="Name"
              name="user_name"
              placeholder="Name…"
              required
              size="40"
            />
            </div>
            <br />
            <textarea
              id="form-textarea-control-opinion"
              type="input"
              label="Message"
              name="user_message"
              placeholder="Type Message Here…"
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='col-sm-4'>
          <div className='authorInfo'>
            <h1>Author Info</h1>
            <div className=''>
              <ul>
                <div><li>Email:<a href="https://www.emccannbusiness@gmail.com">emccannbusiness@gmail.com</a></li></div>
                <div><li>GitHub:<a href="https://github.com/mccannEthan335">mccannEthan335</a></li></div>
                <div><li>LinkedIn:<a href="https://www.linkedin.com/in/ethan-mccann-b67a22231">Authors Profile</a></li></div>
                <div><li>Facebook:<a href="https://www.facebook.com/ethan.mccann/">Friend Request the Author!</a></li></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}}

