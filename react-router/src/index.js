
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const routing = (
    <Router>
        <div>
            <h1>React Router Example</h1>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{color: 'red'}}>APP</NavLink>
                </li>
                <li>
                    <NavLink to="/home" exact activeStyle={{color:'green'}}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeStyle={{color:'yellow'}}>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeStyle={{color:'blue'}}>CONTACT</NavLink>
                </li>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
// import App from './App';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// const routing =(
//     <Router>
//         <div>
//             <h1>REACT ROUTER EXAMPLE</h1>
//             <ul>
//                 <li>
//                     <Link to="/">App</Link>
//                 </li>
//                 <li>
//                     <Link to="/home">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//             <Route exact path="/" component={App} />
//             <Route exact path="/home" component={Home} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/contact" component={Contact} />
//         </div>
//     </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Route,BrowserRouter as Router} from 'react-router-dom';
// import App from './App';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';

// const routing =(
//     <Router>
//         <div>
//             <h1>React Router Example</h1>
//             <Route exact path="/" component = {App} />
//             <Route path="/home" component={Home} />
//             <Route path="/about" component ={About} />
//             <Route path="/contact" component = {Contact} />
//         </div>
//     </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

 