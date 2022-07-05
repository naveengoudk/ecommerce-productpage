import React from "react";
import "./product.css";

export default function Product() {
  return (
    <div className="product__container">
      <header className="header">
        <div className="header__navigation">
          <a>
            Wishlist <img src="images/path.svg"></img>
          </a>
          <span>|</span>
          <a>
            Cart <img src="images/Group 9934.svg"></img>
          </a>
          <span>|</span>
          <a>
            <img src="/images/Group 10515.svg"></img> Naveen{" "}
            <img src="/images/arrow.png"></img>
          </a>
          <span>|</span>
        </div>
      </header>
      <div className="navigation__div">
        <div className="header__title">
          <h1>KRAYA. </h1>
        </div>
        <div className="header__naviation">
          <ul>
            <li>PHONE</li>
            <li>TELEVISION</li>
            <li>REFRIGIRATOR</li>
            <li>LAPTOP</li>
            <li>WASHING MACHINE</li>
            <li>DOWNLOADS</li>
          </ul>
        </div>
        <div className="header__search">
          <img src="/images/search.svg"></img>
          <input placeholder="search for products"></input>
          <img src="/images/close.svg"></img>
        </div>
      </div>
    </div>
  );
}
