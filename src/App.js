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
import Newsletter from './Newsletter';
import CreateAccount from './LoginPage/CreateAccount';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />  
        <Routes> 
          <Route path='/' exact element={<Home />}  />
          <Route path='AboutUs/*' element={<AboutUs />} />
          <Route path='SignUp/*' element={<CreateAccount />} />
        </Routes> 
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
