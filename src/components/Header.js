import './Header.scss';
import React from "react";
import { useState } from 'react';

let links = {

    shortCodes: [
        'ACCORDION',
        'TOGGLES',
        'TAB',
        'PRODUCT TAB',
        'PRODUCT TAB 2',
        'PRODUCT CAROUSEL',
        'PRODUCT CAROUSEL 2',
        'BUTTON',
        'TABLE',
        'PROGRESS BAR',
        'BLOG',
        'BLOG - 2',
        'TEAM',
        'FOOTER',
        'FOOTER  2',
        'TEAM',
        'MAP'
    ],
    pages: [
        'SHOP',
        'SHOP SIDEBAR',
        'SHOP RIGHT SIDEBAR',
        'SHOP LIST',
        'SHOP LIST RIGHT SIDEBAR',
        'SINGLE PRODUCT',
        'SINGLE PRODUCT SIDEBAR',
        'SHOPPING CART',
        'WISHLIST',
        'CHECKOUT',
        'ORDER',
        'LOGIN / REGISTRATION',
        'MY ACCOUNT',
        '404',
        'BLOG',
        'SINGLE BLOG',
        'SINGLE BLOG SIDEBAR',
        'ABOUT US',
        'CONTACT'
    ],
    brand: [
        'HENNING KOPPEL',
        'JEHS + LAUB',
        'VICKE LINDSTRAND',
        'DON CHADWICK',
        'AKIKO KUWAHATA',
        'BARBRO BERLIN',
        'CECILIA HALL',
        'DON CHADWICK',
    ],

};




function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    const showMenu = () => setOpenMenu(!openMenu)


    return (
        <>
            <header>

                <div className='left-side'>
                    <i onClick={showMenu} className='fa-solid fa-bars' ></i>
                    <div className='main-menu' style={{ left: openMenu ? '0px' : '-100%' }} >
                        <i onClick={showMenu} className="fa-solid fa-x"></i>

                        <nav className='navbar' >
                            <ul>
                                <li><a href='index.html'>Home</a>
                                    <div className='row'>
                                        <h2>PAGE'S</h2>
                                        <ul>
                                            <li>HOME VERSION 1</li>
                                            <li>HOME VERSION 2</li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href='index.html'>Products</a>
                                    <div className='row' style={{ width: '500px', paddingLeft: '0' }}>
                                        <div className='product-brands'>
                                            <div className='brand'>
                                                <h2>Best Brands</h2>
                                                <ul>
                                                    {links.brand.map((br, countbr) => {

                                                        return (
                                                            <>

                                                                <li key={countbr}>
                                                                    {br}
                                                                </li>

                                                            </>
                                                        );

                                                    })}
                                                </ul>
                                            </div>
                                            <div className='brand'>
                                                <h2>popular Brands</h2>
                                                <ul>
                                                    {links.brand.map((br, countbr) => {
                                                        return (
                                                            <>

                                                                <li key={countbr}>
                                                                    {br}
                                                                </li>

                                                            </>
                                                        );
                                                    })}
                                                </ul>
                                            </div>

                                        </div>
                                        <div className='product-image'>
                                            <img src='https://template.hasthemes.com/hurst-v1/hurst/img/megamenu/1.jpg'></img>
                                        </div>
                                    </div>
                                </li>
                                <li><a href='index.html'>Shortcodes</a>
                                    <div className='row'>
                                        <h2>Shortcodes</h2>
                                        <ul>
                                            {links.shortCodes.map((code, i) => {

                                                return (
                                                    <>


                                                        <li key={i}>
                                                            {code}
                                                        </li>


                                                    </>
                                                );

                                            })}
                                        </ul>
                                    </div>
                                </li>
                                <li><a href='index.html'>Accesories</a> </li>
                                <li><a href='index.html'>Lookbook</a></li>
                                <li><a href='index.html'>Blog</a></li>
                                <li><a href='index.html'>Pages</a>
                                    <div className='row'>
                                        <h2>PAGE'S</h2>
                                        <ul>
                                            {links.pages.map((page, countpage) => {

                                                return (
                                                    <>
                                                        <li key={countpage}>
                                                            {page}
                                                        </li>

                                                    </>
                                                );

                                            })}
                                        </ul>
                                    </div>
                                </li>
                                <li><a href='index.html'>About us</a></li>
                                <li><a href='index.html'>Contact</a></li>


                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='center-side'>
                    <img src='https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png' />
                </div>
                <div className='right-side'>
                    <i className="fa-solid fa-cart-shopping"> </i>
                    <div className='dropdown-menu'>
                        <div className='items-count'>
                            <p>You have <span style={{ color: '#c87065' }}>03 items</span> in your shopping bag</p>
                        </div>
                        <div className='container'>
                            <div className='item'>
                                <div className='item-photo'>
                                    <img src='https://template.hasthemes.com/hurst-v1/hurst/img/cart/1.jpg' />
                                </div>
                                <div className='item-info'>
                                    <h5>DUMMY PRODUCT NAME</h5>
                                    <p>Price : $ 100.00</p>
                                    <p> Qty : 02</p>
                                    <i className="fa-solid fa-x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='item'>
                                <div className='item-photo'>
                                    <img src='https://template.hasthemes.com/hurst-v1/hurst/img/cart/1.jpg' />
                                </div>
                                <div className='item-info'>
                                    <h5>DUMMY PRODUCT NAME</h5>
                                    <p>Price : $ 100.00</p>
                                    <p> Qty : 02</p>
                                    <i className="fa-solid fa-x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item-total'>
                            <h1>TOTAL $500.00</h1>
                        </div>
                        <div className='cart-buttons'>
                            <button>View cart</button>
                            <button>Check out</button>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}


export default Header;