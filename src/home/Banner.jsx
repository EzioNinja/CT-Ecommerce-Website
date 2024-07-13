import React, { useState } from "react";
import { Link } from "react-router-dom";
import productData from "../products.json";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousands</span> of Products
  </h2>
);

const dsc = "We have the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInput;
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form onSubmit={handleSearch}>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{dsc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
