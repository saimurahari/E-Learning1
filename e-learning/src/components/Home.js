import React from "react";
import './css/Home.css';
import ReactStars from "react-rating-stars-component";
import { AiOutlineLogin } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import home from './4804443.jpg';
import c from './Images/c-modified.png';
import python from './Images/python-modified.png';
import java from './Images/java.jpg';
import mdb from './Images/mongodb-modified.png';
import html from './Images/htmlcss.png'
import node from './Images/node-modified.png';
import dsa from './Images/dsa.png';
import react from './Images/react.png';
import Nav from './nav';
import Footer from './footer';
import Login from './Login';
function Home(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return(
        <div className="background3">
        <div className="background2">
            <Nav />
    <div className="container3">
            <img src={home} alt="home" width="40%"></img>
            <div className="homecontainer">
                <p>We are Excellent<br/> in Programming Languages</p>
                <br/>
                <small>Education is an art and we are the artists</small>
                <br />
                <span><a href="/Home"><FaUniversity /></a>  500+ Universites</span><br/>
                <span><a href="/Home"><FaUniversity /></a>  1000+ Yearly Graduates</span>
                
            </div>
        </div>
        <div className="spl" id="coursename">
        <h2>Courses</h2>
        </div>
        <div className="table">
            <a><img src={c} alt="c"></img><h4>C++</h4></a>
            <a><img src={python} alt="python"></img><h4>Python</h4></a>
            <a><img src={html} alt="html"></img><h4>HTML/CSS</h4></a>
            <a><img src={mdb} alt="mdb" ></img><h4>Mongo DB</h4></a>
            <a><img src={node} alt="node"></img><h4>Node JS</h4></a>
            <a><img src={java} alt="java"></img><h4>Full Stack Development using Java</h4></a>
            <a><img src={dsa} alt="dsa"></img><h4>Data Structures & Algorithms</h4></a>
            <a><img src={react} alt="react"></img><h4>React JS</h4></a>

        </div>
        <div className="spl" id="courseid">
        <h2>Topics Recommended for you</h2>
        </div>
        <div className="table2">
        <table className="recommended">
        <tbody>
            <tr align="center">
                <td><button>Web Development</button></td>
                <td><button>.Net</button></td>
                <td><button>Node Js</button></td>
                <td><button>AWS</button></td>
                <td><button>Azure</button></td>
            </tr>
            <tr align="center">
                <td><button>Python</button></td>
                <td><button>React</button></td>	
                <td><button>Redux</button></td>
                <td><button>HTML</button></td>
            </tr>
            </tbody>
        </table>

        </div>
        <div className="spl" id="courseid">
        <h2>Best Offers!!</h2>
        </div>
        <div className="table">
            
            <a><img src={html} alt="html"></img><h4>HTML/CSS:
                Learn HTML and CSS The Complete 2022 Web Development Guide</h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            
            
            </a>
            <a><img src={mdb} alt="mdb" ></img><h4>MongoDB:
The complete developersGuides 2022</h4>
<ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            
            </a>
            <a><img src={node} alt="node"></img><h4>Node Js: The Complete Guide
            learn Node Js from Top tutors</h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            
            
            </a>
            <a><img src={java} alt="java"></img><h4>Full Stack Development using Java</h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            </a>
            <a><img src={dsa} alt="dsa"></img><h4>DSA: Data Structures & Algorithms,
Level up for coding interviews
</h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            
            </a>
            <a><img src={react} alt="react"></img><h4>React Js: Front end Java Script framework | React JS | Hooks | Routers
            </h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            </a>
            <a><img src={c} alt="c"></img><h4>C++: beginning C++ Programming
From Beginner to Beyond</h4>
<ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            
            </a>
            <a><img src={python} alt="python"></img><h4>Python</h4>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                /><h3>$24.00</h3>
            </a>

        </div>

        </div>
        <div className="footercontainer">
        <Footer />

        </div>
        
        </div>
        
    );
}
export default Home;