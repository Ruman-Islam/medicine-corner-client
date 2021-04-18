import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login";
import MedicalService from "./components/MedicalService/MedicalService";
import Orders from "./components/Orders/Orders";
import AddReviews from './components/AddReview/AddReview';
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from "react";
export const userContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: '',
    photo: '',
    email: ''
  });

  const [allProducts, setAllProducts] = useState([]);
  console.log('here are all products ', allProducts)

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser, allProducts, setAllProducts]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <MedicalService />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <AddReviews />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
