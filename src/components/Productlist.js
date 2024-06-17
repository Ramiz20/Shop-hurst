import React from "react";
import { useState } from "react";

function Productlist({ item }) {
  const [favorite, setFavorite] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
};

  return (
    <div className="products">
      <div className="product">
        <div className="product-image">
          {item.isNew && <span className="info-new">New</span>}
          {!item.isNew && item.sale && <span className="info-sale">Sale</span>}
          <span className="price">${item.price}</span>
          <img src={item.image} />
        </div>
        <div className="product-info">
          <div className="fix">
            <h4>{item.name}</h4>
          </div>
          <div className="fix">
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </span>
          </div>
          <div className="fix-icon">
            <a
              href="#"
              className="icon"
              onClick={() => setFavorite(!favorite)}
            >
              <i
                className={
                  favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }
              ></i>
            </a>
            <a href="#" className="icon">
              <i onClick={toggleOpen} className="fa-solid fa-magnifying-glass-plus"></i>
              {isOpen && (
               <div className="modal-product">
                 <div className="modal-dialog">
                  <div className="modal-image">
                  <img src={item.image} />
                  </div>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1>Aenean eu tristique
                      </h1>
                      <button>
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </div>
                    <div className="modal-body"></div>
                    <div className="modal-footer"></div>

                  </div>
                </div>
               </div>
              )}
            </a>
            <a href="#" className="icon">
              <i className="fa-solid fa-arrows-rotate"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
