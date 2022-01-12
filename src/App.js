// import logo from './logo.svg';
import "./App.css";
// import ListUsers from './components/ListUsers';
// import Form from './components/Form';
import Header from "./components/Header/Header";
// import Card from './components/Card/Card';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/movies/id/:id" component={MovieDetail} />
    </Router>
  );
}

export default App;
