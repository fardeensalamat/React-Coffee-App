import React, { useState } from "react";
import { CartContext } from "./CartContext"; 
import { NavLink } from "react-router-dom";
import styles from '../styles/Navbar.module.css';
import logo from '../assets/coffee.svg';
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";



function Navbar() {

     // For mobile view
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // For badge icon on cart

    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.length;


    return (
        <nav className={styles.navbarCustom}>
            <div className={styles.navbarLogo}>
                <img src={logo} alt="Logo" className={styles.logoImg} style={{ height: '60px', width: 'auto' }} />
            </div>

            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <IoClose /> : <IoMenu />}
            </div>

            <ul className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ''}`}>
                <li><NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink></li>
                <li><NavLink to="/menu" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ""}>Menu</NavLink></li>
                <li className={styles.cartWrapper}><NavLink to="/cart" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ""}><FaCartShopping />  {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}</NavLink></li>
                <li><NavLink to="/sign-in" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ""}>Sign In</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
