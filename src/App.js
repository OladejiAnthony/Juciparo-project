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
import Cart from './Cart/Cart';
import CheckoutOne from './Cart/CheckoutOne';
import Help from './Help/Help';
import Privacy from './Help/Privacy';
import Track from './Help/Track';
import ContactUs from './Help/ContactUs';
import Terms from './Help/Terms';
import PlaceOrder from "./Help/PlaceOrder"
import DeliveryMethod from './Cart/DeliveryMethod';
import PaymentMethod from './Cart/PaymentMethod';


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
          <Route path='productDetails/:id' element={<ProductsDetails />} />
          <Route path='Cart/' element={<Cart />}  />
          <Route path='CheckoutOne' element={<CheckoutOne />} />
          <Route path='Help/' element={<Help />} />
          <Route path='/Privacy' exact element={<Privacy />}  />
          <Route path='/Track' exact element={<Track />}  />
          <Route path='/ContactUs' exact element={<ContactUs />}  />
          <Route path='/Terms' exact element={<Terms />}  />
          <Route path='/PlaceOrder' exact element={<PlaceOrder />}  />
          <Route path='/DeliveryMethod' exact element={<DeliveryMethod />}  />
          <Route path='/PaymentMethod' exact element={<PaymentMethod />}  />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
