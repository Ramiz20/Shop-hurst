import React from 'react';
import './Product.scss';
import { useState } from "react";
import Slider from 'react-slider';
import Productlist from './Productlist';
import data from './data.json';


function Product() {

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);

    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
        setIsPriceOpen(false);
        setIsColorOpen(false);
        setIsSizeOpen(false);
    };

    const togglePrice = () => {
        setIsPriceOpen(!isPriceOpen);
        setIsCategoriesOpen(false);
        setIsColorOpen(false);
        setIsSizeOpen(false);
    };

    const toggleColor = () => {
        setIsColorOpen(!isColorOpen);
        setIsCategoriesOpen(false);
        setIsPriceOpen(false);
        setIsSizeOpen(false);
    };

    const toggleSize = () => {
        setIsSizeOpen(!isSizeOpen);
        setIsCategoriesOpen(false);
        setIsPriceOpen(false);
        setIsColorOpen(false);
    };

    const min = 50;
    const max = 2000;

    const [values, setvalues] = useState([min, max])

    return (
        <>
            <div className='product-box'>
                <div className='product-option'>
                    <div className='option-button'>
                        <button onClick={toggleCategories}>Categories</button>

                        <div className='dropdown-list' style={{ height: isCategoriesOpen ? '358px' : '0px' }} >
                            <div className='container'>
                                <div className='title'>
                                    <h1>Categories</h1>
                                </div>
                                <div className='categories-box'>
                                    <ul>
                                        <li><span>Chair</span>
                                            <ul>
                                                <li>T-Shirts</li>
                                                <li>Striped Shirts</li>
                                                <li>Half Shirts</li>
                                                <li>Formal Shirts</li>
                                                <li>Bilazers</li>
                                            </ul>
                                        </li>
                                        <li><span>Furniture</span>
                                            <ul>
                                                <li>Men Bag</li>
                                                <li>Shoes</li>
                                                <li>Watch</li>
                                                <li>T-Shirt</li>
                                                <li>Shirt</li>
                                            </ul>
                                        </li>
                                        <li><span>Accessories</span>
                                            <ul>
                                                <li>T-Shirts</li>
                                                <li>Striped Shirts</li>
                                                <li>Half Shirts</li>
                                                <li>Formal Shirts</li>
                                                <li>Bilazers</li>
                                            </ul>
                                        </li>
                                        <li><span>Top Brands</span>
                                            <ul>
                                                <li>T-Shirts</li>
                                                <li>Striped Shirts</li>
                                                <li>Half Shirts</li>
                                                <li>Formal Shirts</li>
                                                <li>Bilazers</li>
                                            </ul>
                                        </li>
                                        <li><span>Jewelry</span>
                                            <ul>
                                                <li>T-Shirts</li>
                                                <li>Striped Shirts</li>
                                                <li>Half Shirts</li>
                                                <li>Formal Shirts</li>
                                                <li>Bilazers</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='option-button'>
                        <button onClick={togglePrice}>Price</button>
                        <div className='dropdown-list' style={{ height: isPriceOpen ? '138px' : '0px' }} >
                            <div className='container'>
                                <div className='title'>
                                    <h1>Price</h1>
                                </div>
                                <div className='price-box'>
                                    <p>You range : <span>${values[0]} - ${values[1]}</span>
                                    </p>
                                    <Slider
                                        onChange={setvalues}
                                        classNAme={'slider'}
                                        value={values}
                                        min={min}
                                        max={max} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='option-button'>
                        <button onClick={toggleColor}>Color</button>
                        <div className='dropdown-list' style={{ height: isColorOpen ? '280px' : '0px' }} >
                            <div className='container'>
                                <div className='title'>
                                    <h1>Color</h1>
                                </div>
                                <div className='color-box'>
                                    <ul>
                                        <li>
                                            <span className='color color-1'></span>
                                            LightSalmon
                                            <span className='count'>12</span>
                                        </li>
                                        <li>
                                            <span className='color color-2'></span>
                                            Dark Salmon
                                            <span className='count'>20</span>
                                        </li>
                                        <li><span className='color color-3'></span>
                                            Tomato
                                            <span className='count'>59</span></li>
                                        <li>
                                            <span className='color color-4'></span>
                                            Deep Sky Blue
                                            <span className='count'>45</span>
                                        </li>
                                        <li>
                                            <span className='color color-5'></span>
                                            Electric Purple
                                            <span className='count'>78</span>
                                        </li>
                                        <li>
                                            <span className='color color-6'></span>
                                            Deep Lilac
                                            <span className='count'>10</span>
                                        </li>
                                        <li>
                                            <span className='color color-7'></span>
                                            Atlantis
                                            <span className='count'>15</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='option-button'>
                        <button onClick={toggleSize}>Size</button>

                        <div className='dropdown-list' style={{ height: isSizeOpen ? '138px' : '0px' }} >
                            <div className='container'>
                                <div className='title'>
                                    <h1>Size</h1>
                                </div>
                                <div className='size-box'>
                                    <ul>
                                        <li>S</li>
                                        <li>M</li>
                                        <li>L</li>
                                        <li>SL</li>
                                        <li>XL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='container-products'>

                    {data.map((item, index) => {

                        return (
                            <Productlist key={index} item={item} />
                        );

                    })}
                </div>


                <div className='pagination'>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className="fa-solid fa-arrow-left-long"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                01
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                02
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                03
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                04
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                05
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Product;