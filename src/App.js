import React from 'react'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import ItemDetails from './ItemDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/shop/:id" component={ItemDetails} />
            </Switch>  
        </div>
    </Router>
      
  );
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
export default App;
