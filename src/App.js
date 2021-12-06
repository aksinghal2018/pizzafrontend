import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import AddMenu from "./Components/AddMenu";
import Cartcomponent from "./Components/Cartcomponent";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Historyorder from "./Components/Historyorder";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import MenuComponent from "./Components/MenuComponent";
import Navbar from "./Components/Navbar";
import Orderdetail from "./Components/Orderdetail";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div>
       <Navbar />
        <Switch>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/addmenu">
            <AddMenu />
          </Route>
          <Route path="/menu">
            <MenuComponent />
          </Route>
          <Route path="/cart">
            <Cartcomponent />
          </Route>
          <Route path="/historycart">
            <Historyorder />
          </Route>
          <Route path="/orderdetail">
            <Orderdetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
