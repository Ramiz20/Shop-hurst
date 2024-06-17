import './Footer.scss';


function Footer() {
  return (
    <>
      <footer>
       <div className='footer-container'>
       <div className='contact'>
          <h1>Contact us</h1>
          <ul>
            <li><span>Adress:</span>
            28 Green Tower, Street Name, New York City,USA</li>
            <li><span>Cell-Phone :</span>012345 - 123456789</li>
            <li><span>Email :</span>your-email@gmail.com</li>
          </ul>
        </div>
        <div className='account'>
        <h1>Account</h1>
          <ul>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>My Account</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>My Wishlist</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>My Cart</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Sign In</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Check out</a></li>
      
            </ul>
        </div>
        
       
        <div className='shipping'>
        <h1>SHIPPING</h1>
          <ul>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>New Products</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Top Sellers</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Manufactirers</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Suppliers</a></li>
            <li><a href='#'><i className="fa-regular fa-circle-dot"></i>Specials</a></li>
      
            </ul>
        </div>
        <div className='letter'>
        <h1>EMAIL NEWSLETTERS</h1>
        <input type='email' placeholder='Email Address...'></input>
        <button>Subscribe</button>
        </div>
       </div>
      </footer>
    </>
  );
}

export default Footer;