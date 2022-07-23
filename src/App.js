import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import { Route, Switch } from "react-router-dom";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/abouts" component={About} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
