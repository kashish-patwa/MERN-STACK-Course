import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaGlobe, FaUserCircle } from "react-icons/fa";
import { HiMenu, HiOutlineGift } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
function NavBar() {
  const [user, updateUser] = useState(false);
  const [showMenuBar, updatemenuBar] = useState(false);

  //  we have to make a api request to the server so veri user exist or not
  const api = "http://localhost:4000/currentUser";
  async function getCurrentUser() {
    try {
      const response = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include" // tells the browser to send cookies
      });
      const data = await response.json();
      if(data.success)
      {
        updateUser(data.message)
      }else{
        updateUser(false)
      }

     
    } catch(error){
      console.log(error);
    }
  }

  getCurrentUser();

  function handleMenuBar() {
    if (showMenuBar) {
      updatemenuBar(false);
    } else {
      updatemenuBar(true);
    }
  }
  return (
    <nav className="navbar">
      {/* Left */}

      <div className="navbar-logo">
        <Link to="/">
          <h2>AirStay</h2>
        </Link>
      </div>

      {/* Center */}

      <div className="navbar-search">
        <div className="search-item">
          <span>Anywhere</span>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <span>Any week</span>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <span>Add guests</span>
        </div>

        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Right */}

      <div className="navbar-right">
        <button className="host-btn">Become a Host</button>

        <button className="icon-btn">
          <FaGlobe />
        </button>

        <div className="profile-wrapper">
          <div className="profile-menu">
            {user ? (
              <p  onClick={handleMenuBar}>Hi {user.name}</p>
              // <FaUserCircle
              //   className="user-icon"
              //   onClick={handleMenuBar}
              // ></FaUserCircle>
            ) : (
              <HiMenu onClick={handleMenuBar} />
            )}
          </div>

          {showMenuBar && (
            <div className="profile-dropdown">
              {user ? (
                <>
                  <Link to="/profile">Profile</Link>
                  <Link to="/my-bookings">My Bookings</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/my-listings">My Listings</Link>

                  <button className="logout-btn">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
