import React, { Component } from 'react';
import './App.css';
import {NavBar} from './components/navBar'

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <div className="row">
          <div className="col-md-3 col-lg-2 col-xl-1">
            <NavBar />
          </div>
          <div className="col-md-9 col-lg-10 col-xl-11 text-center">
            <div id="home" className="flex-container">
              <div className="jumbotron">
                <h1 className="display-4">Hi, I'm Aaron!</h1>
                <hr className="my-4" />

                <p className="lead">What do you do Aaron?</p>
                <p>I read. I write. I code.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div id="about">
              <h1 className="display-2">About Me</h1>
              <p>Aaron Anderson writes code by day and stories by night. He has been a librarian, teacher, and researcher. You can find him in the bike lanes of Nashville, Tennessee.</p>
            </div>

            <div id="work">
              <hr className="m-5 double" />
              <h1 className="display-2">My Work</h1>
              <h2>
                Fiction
          </h2>
              <p>
                <a href="https://thedisconnect.co/one/uptime"><i>The Disconnect Vol 1 (Winter 2018)</i>: Uptime</a>
              </p>
            </div>

            {/* <!-- Contact --> */}
            <div id="contact">
              <hr className="m-5 double" />
              <h1 className="display-2">Contact Me</h1>
              <ul>
                <li><div>Email:</div> <div><a href="mailto:me@aaronaanderson.com">me@aaronaanderson.com</a></div></li>
                <li><div>LinkedIn: </div><div><a href="https://www.linkedin.com/in/aaron-anderson-21230199/">https://www.linkedin.com/in/aaron-anderson-21230199/</a></div></li>
                <li><div>Twitter:</div><div> <a href="https://twitter.com/_Aaron_A_">https://twitter.com/_Aaron_A_</a></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
