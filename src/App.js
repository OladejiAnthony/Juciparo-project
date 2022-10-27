import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './HomePage/Home';
import Footer from './Footer';
import AboutUs from './AboutUs/AboutUs';
import Login from './LoginPage/Login';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />  
        <Routes> 
          <Route path='/' exact component={Home} />
          <Route path='/Login' exact component={Login} />
          <Route path='/AboutUs' exact component={AboutUs} />
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
