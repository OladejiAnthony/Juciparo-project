import React,{useEffect,useState} from 'react'
import "./AccountDropDown.css"
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
//import AccountLogin from './LoginPage/AccountLogin';
//import EventBus from "./common/EventBus";
//import { logout } from "./redux/auth";

function AccountDropDown() {
    const [open, setOpen] = React.useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  
    // const dispatch = useDispatch();

    // const logOut = useCallback(() => {
    //   dispatch(logout());
    // }, [dispatch]);
  
    // useEffect(() => {
    //   if (currentUser) {
    //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    //   } else {
    //     setShowModeratorBoard(false);
    //     setShowAdminBoard(false);
    //   }
  
    //   EventBus.on("logout", () => {
    //     logOut();
    //   });
  
    //   return () => {
    //     EventBus.remove("logout");
    //   };
    // }, [currentUser, logOut]);

    const handleOpen = () => {
        setOpen(!open);
  };
  
  useEffect(() => {
    if (window.localStorage.getItem('userToken')) {
      setLoggedIn(true);
      
    }
    else setLoggedIn(false);

  }, [loggedIn])
  
  const logOut = () => {
    window.localStorage.removeItem('userToken');
    navigate("/AccountLogin");
    window.location.reload();

}

  return (
    <div className='dropdown_container'>
      <div onClick={handleOpen}>
        <Icon icon="teenyicons:user-outline" />
        <button >Account</button>
        {open ? 
          <div className='dropdown__list'>
            {!loggedIn ? (
              <div>
              <Link to="/AccountLogin">Sign In</Link>
              <Link to="/CreateAccount">Create an account</Link>
             
                </div>
            ) : (
                <div className='d-flex flex-column '>
              <p onClick={logOut} >Sign Out</p>
              <Link to="/CreateAccount">My Account </Link>
              <Link to={"/AccountSeller"}>
                <Icon icon="teenyicons:user-outline" />
                Saved Items
                  </Link>
                  </div>
            )
            }
              
          </div> 
          
          : 
          <div></div>
        }
      </div>
      
    </div>
  )
}

export default AccountDropDown


//functions : logOut function, 
//Routes : my account page, login page, register page

// {currentUser ? (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <a href="/login" className="nav-link" onClick={logOut}>
//         SignOut
//       </a>
//     </li>
//     <li className="nav-item">
//       <Link to={"/profile"} className="nav-link">
//         {currentUser.username}
//           <p> My Account </>
//       </Link>
//     </li>
//   </div>
// ) : (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/login"} className="nav-link">
//         Login
//       </Link>
//     </li>

//     <li className="nav-item">
//       <Link to={"/register"} className="nav-link">
//         Sign Up
//       </Link>
//     </li>
//   </div>
// )}
