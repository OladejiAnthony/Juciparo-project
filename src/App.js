import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import Navbar from './Navbar';
import Home from './HomePage/Home';
//import Footer from './Footer';
import AboutUs from './AboutUs/AboutUs';
//import Newsletter from './Newsletter';
import CreateAccount from './LoginPage/CreateAccount';
import AccountLogin from './LoginPage/AccountLogin';
import IntroPage from './Seller/IntroPage';
import SellerCreateAccount from './LoginPage/SellerCreateAccount';
import SellerCreateTwo from './LoginPage/SellerCreateTwo';
import SellerProfile from './Seller/SellerProfile';
import ProductsDetails from './HomePage/ProductDetails';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes> 
          <Route path='/' exact element={<Home />}  />
          <Route path='AboutUs/' element={<AboutUs />} />
          <Route path='AccountLogin/' element={<AccountLogin />  } />
          <Route path='CreateAccount/' element={<CreateAccount />} />
          <Route path='IntroPage/' element={<IntroPage /> } />
          <Route path='SellerCreate/' element={<SellerCreateAccount  />} />
          <Route path='SellerCreateTwo/' element={<SellerCreateTwo />} />
          <Route path='SellerProfile/' element={<SellerProfile />} />
          <Route path='productDetails' element={<ProductsDetails />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
