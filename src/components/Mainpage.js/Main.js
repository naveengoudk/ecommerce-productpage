import React, { useState } from "react";
import "./Main.css";

export default function Main() {
  const [colour, setColour] = useState("saphhire blue");
  const [storage, setStorage] = useState("128GB");
  const [ram, setRam] = useState("4GB");

  const storageHandler = (e) => {
    setStorage(e.target.className);
  };

  const ramHandler = (e) => {
    setRam(e.target.className);
  };

  const clickHandler = (e) => {
    if (e.target.className === "colour1") {
      document.getElementsByClassName("colour1")[0].style.border =
        "2px solid #FF3465";
      document.getElementsByClassName("colour2")[0].style.border = "none";
      document.getElementsByClassName("colour3")[0].style.border = "none";
      setColour("sapphire Blue");
    } else if (e.target.className === "colour2") {
      document.getElementsByClassName("colour1")[0].style.border = "none";
      document.getElementsByClassName("colour2")[0].style.border =
        "2px solid #FF3465";
      document.getElementsByClassName("colour3")[0].style.border = "none";
      setColour("black");
    } else if (e.target.className === "colour3") {
      document.getElementsByClassName("colour1")[0].style.border = "none";
      document.getElementsByClassName("colour2")[0].style.border = "none";
      document.getElementsByClassName("colour3")[0].style.border =
        "2px solid #FF3465";

      setColour("grey");
    }
  };

  return (
    <div className="main__conatiner">
      <div className="main__leftdiv">
        <div className="preview__container">
          <div>
            <img src="/images/Image 1.png"></img>
          </div>
          <div>
            <img src="/images/Image 3.png"></img>
          </div>
          <div>
            <img src="/images/Image 4.png"></img>
          </div>
          <div>
            <img src="/images/Image 5.png"></img>
          </div>
          <div>
            <img src="/images/Image 6.png"></img>
          </div>
          <div>
            <img src="/images/Image 1.png"></img>
          </div>
        </div>
        <div className="image__container">
          <img src="/images/img1.png"></img>
          <div className="main__buttons">
            <button className="cart__button">Add to cart</button>
            <button className="buy__button">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="main__rightdiv">
        <div className="mainproduct__details">
          <p>
            Product Code <span>ODE349879</span>
          </p>
          <h1 className="productName">Honor 8 pro (Midnight Black , 128gb)</h1>
          <h1 className="productName">(6GB RAM)</h1>
          <h1 className="productPrice">
            $99.99 <span>30% off</span>
          </h1>
          <p>In stock</p>
        </div>
        <div className="productColour__options">
          <p>
            Colour : <span className="colour__div">{colour}</span>
          </p>

          <div className="colourSelection">
            <div onClick={clickHandler} className="colour1"></div>
            <div onClick={clickHandler} className="colour2"></div>
            <div onClick={clickHandler} className="colour3"></div>
          </div>
        </div>
        <div className="product__options">
          <div className="product__options__leftdiv">
            <p>
              Storage : <span>{storage}</span>
              <div className="product__options__innerdiv">
                <div className="64GB" onClick={storageHandler}>
                  <div className="ui_div"></div>64 GB
                </div>
                <div className="128GB" onClick={storageHandler}>
                  128 GB
                </div>
              </div>
            </p>
          </div>
          <div className="product__options__leftdiv">
            <p>
              Ram : <span>{ram}</span>
            </p>
            <div className="product__options__innerdiv">
              <div className="2GB" onClick={ramHandler}>
                <div className="ui_div"></div>2 GB
              </div>
              <div className="4GB" onClick={ramHandler}>
                4 GB
              </div>
            </div>
          </div>
        </div>
        <div className="extra_details">
          <h1>+ Product Details</h1>
        </div>
      </div>
    </div>
  );
}
