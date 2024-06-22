import './main.scss';
import { useState } from 'react';

function Main() {

    const [openMenu, setOpenMenu] = useState(false);
    const [openRow, setOpenRow] = useState(false);
    const [openPages, setOpenPages] = useState(false);

    const handleClick = () => setOpenMenu(!openMenu);

    const showRow = () => {
        setOpenRow(!openRow);
    }
    const showPages = () => {
        setOpenPages(!openPages);
    }
    return (
        <>
            <section className='mobile-menu'>
                <div className='menu-area'>
                    <span>MENU</span>
                    <i className={openMenu ? 'fa-solid fa-x' : 'fa-solid fa-bars'} onClick={handleClick} ></i>
                </div>
                <div className='hidden-menu' style={{ maxHeight: openMenu ? '861px' : 0 }}>
                    {(
                        <nav className='nav-menu'>
                            <ul>
                                <li><a href='index.html'>Home</a>
                                    <i onClick={showRow} className={openRow ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}></i>
                                    {openRow && (
                                        <div className='row' style={{ height: openPages ? '0' : '82px' }} >

                                            <ul>
                                                <li><a href='#'>HOME VERSION 1</a></li>
                                                <li><a href='#'>HOME VERSION 2</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                              
                                <li><a href='index.html'>Products</a></li>
                                <li><a href='index.html'>Accesories</a> </li>
                                <li><a href='index.html'>Lookbook</a></li>
                                <li><a href='index.html'>Blog</a></li>
                                <li><a href='index.html'>Pages</a>
                                    <i onClick={showPages} className={openPages ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}></i>
                                    {openPages && (
                                        <div className='row' style={{ height: openPages ? '0' : '779px' }}>

                                            <ul>
                                                <li><a href='index.html'>SHOP</a> </li>
                                                <li><a href='index.html'>SHOP SIDEBAR</a> </li>
                                                <li><a href='index.html'>SHOP RIGHT SIDEBAR</a> </li>
                                                <li><a href='index.html'>SHOP LIST</a> </li>
                                                <li><a href='index.html'>SHOP LIST RIGHT SIDEBAR</a> </li>
                                                <li><a href='index.html'>SINGLE PRODUCT</a> </li>
                                                <li><a href='index.html'>SINGLE PRODUCT SIDEBAR</a> </li>
                                                <li><a href='index.html'>SHOPPING CART</a> </li>
                                                <li><a href='index.html'>WISHLIST</a> </li>
                                                <li><a href='index.html'>CHECKOUT</a> </li>
                                                <li><a href='index.html'>ORDER</a> </li>
                                                <li><a href='index.html'>LOGIN / REGISTRATION</a> </li>
                                                <li><a href='index.html'>MY ACCOUNT</a> </li>
                                                <li><a href='index.html'>404</a> </li>
                                                <li><a href='index.html'>BLOG</a> </li>
                                                <li><a href='index.html'>SINGLE BLOG</a> </li>
                                                <li><a href='index.html'>SINGLE BLOG SIDEBAR</a> </li>
                                                <li><a href='index.html'>ABOUT US</a> </li>
                                                <li><a href='index.html'>CONTACT</a> </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                <li><a href='index.html'>About us</a></li>
                                <li><a href='index.html'>Contact</a></li>
                            </ul>
                        </nav>
                    )}
                </div>

            </section>

            <main>
                <div className='container'>
                    <div className='main-center'>
                        <h1>Shop</h1>
                    </div>
                    <div className='main-end'>
                        <ul>
                            <li><span>Home</span></li>
                            <li>/</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Main;