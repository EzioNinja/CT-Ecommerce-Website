import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavItems.css";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const Profileimg = "/assets/images/author/01.jpg"; 

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 100);
      setShowScrollTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp blur-background" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {!user ? (
              <>
                <Link to="/signup" className="lab-btn me-3">
                  <span>Create Account</span>
                </Link>
                <Link to="/login">Log in</Link>
              </>
            ) : (
              <div className="user-profile">
                <img
                  src={user.photoURL || Profileimg}
                  alt="Profile"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="profile-photo"
                />
                <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/cart-page">Shopping Cart</Link>
                  </li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="header-button">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {!user ? (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Create Account
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              ) : (
                <div className="user-profile d-none d-md-block">
                  <img
                    src={user.photoURL || Profileimg}
                    alt="Profile"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="profile-photo"
                  />
                  <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                    <li>
                      <Link to="/cart-page">Shopping Cart</Link>
                    </li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}

              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollTopButton && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </header>
  );
};

export default NavItems;
