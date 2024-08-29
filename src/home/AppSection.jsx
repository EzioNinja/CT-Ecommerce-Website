import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc =
  "Take shop on any device with our app & learn all the time what you want. Just download, install, and start learning.";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img
                  src="/assets/images/app/01.jpg"
                  alt="App Screenshot 1"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/app/02.jpg"
                  alt="App Screenshot 2"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
