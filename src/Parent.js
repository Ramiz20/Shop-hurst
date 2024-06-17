import React from 'react';
import { useState } from 'react';
import './parent.scss';
// import data from './components/data.json';


function Parent() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>

            <i onClick={toggleOpen} className="fa-solid fa-magnifying-glass-plus"></i>
      
                <div className="modal-product" style={{height: openMenu?'0px':'100%'}}>
                    <div className="modal-dialog">
                        <div className="modal-image">
                            <img src='https://template.hasthemes.com/hurst-v1/hurst/img/product/6.jpg' />
                        </div>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1>Aenean eu tristique
                                </h1>
                                <button>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='price-box'>
                                    <hr />
                                    <span className='new-price'>$160.00</span>
                                    <span className='old-price'>$190.00</span>
                                    <hr />
                                </div>
                                <div className='add-cart'>
                                <a href='#'>
                                    See all features
                                </a>
                                <ul>
                                    <li> <input type='number' ></input></li>
                                    <li> <button>Add Cart</button></li>
                                </ul>
                                </div>
                                <div className='product-info'>
                                    
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero.
                                    </p>
                                   
                                </div>
                            </div>
                            <div className="modal-footer">
                                <h2>Share this product</h2>
                                <ul>
                                    <li>
                                        <a href='https://www.google.com/' className='google'>
                                            <i className='fa-brands fa-google-plus-g'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.twitter.com/' className='twitter'>
                                        <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.facebook.com/' className='facebook'>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/' className='linkedin'>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Parent;