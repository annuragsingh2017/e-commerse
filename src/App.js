import "./App.css";
import About from "./component/Context/About";
import NodeState from "./component/Context/NodeState";
import Nav from "./component/Navbar/nav";
import Cart from "./component/cart/Cart";

import { Route, Switch } from "react-router-dom";
import Login from "./component/Login/Login";
import Category from "./component/Category/Category";
import AddToCart from "./component/AddToCart/AddToCart";

function App() {
  return (
    <div>
  
    <Switch>
    
      <NodeState>
        <Route path="/" exact>
          <Nav />
        </Route>
        <Route path="/Home">
        <Nav />
          <h1 style={{textAlign:"center"}}> Shoping Products</h1>
          <Cart />
        </Route>
        <Route path="/Login">
        <Nav />
          <Login/>
        </Route>
        <Route path="/AddToCart">
        <Nav />
          <AddToCart/>
        </Route>
        <Route path="/Category">
        <Nav />
          <Category/>
        </Route>

        <div className="App">
          <About />
        </div>
      </NodeState>
    </Switch>
    </div>
  );
}

export default App;
