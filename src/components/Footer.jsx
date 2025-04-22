import styles from '../styles/Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCoffeeMaker } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { PiTeaBagFill } from "react-icons/pi";
import { IoGiftSharp } from "react-icons/io5";

function Footer(){

    return(
        <>

        <footer>

            <div className="container">

            <hr />
                    <div className="row">
                        
                        <div className="col-sm-3">
                            <h5>Company</h5>
                            <ul>
                                <li>
                                   <a href="#"> Brewed with passion, our coffee shop offers rich, aromatic blends and cozy vibes — perfect for catching up, chilling out, or grabbing your favorite cup on the go.</a>
                                </li>
                                <div className={styles.footerIcons}>
                                    <li><a href="#"><FaFacebook /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaPinterest /></a></li>                                   
                                    <li><a href="#"><FaYoutube /></a></li>
                                </div>
                                
                            </ul>  
                        </div>

                        <div className="col-sm-2">
                            <h5>Products</h5>
                            <ul>
                                <li><a href="#">Coffee <SiCoffeescript /></a></li>
                                <li><a href="#">Coffee maker <MdCoffeeMaker /></a></li>
                                <li><a href="#">Bags<PiTeaBagFill /></a></li>
                                <li><a href="#">Gift cards <IoGiftSharp /></a></li>
                                
                            </ul>  
                        </div>

                        <div className="col-sm-4">
                            <h5>Contact Info</h5>
                            <ul>
                                <li><a href="#"><FaLocationDot /> House #111, Gulshan Ave, Dhaka</a></li>
                                <li><a href="#"><FaPhone /> (+880) 1234567 </a></li>
                                <li><a href="#"><MdEmail /> coffee@example.com</a></li>
                            
                            </ul>  
                        </div>

                        <div className="col-sm-3">
                            <h5>Opening Hours</h5>
                            <ul>
                                <li><a href="#">Sunday-Thursday: 8 AM - 10 PM</a></li>
                                <li><a href="#">Friday: 10 AM - 10 PM</a></li>
                                <li><a href="#">Saturday: Closed</a></li>
                            </ul>  
                        </div>

                    
                    </div>

                    <div className={styles.text}>© 2025 All rights reserved by Fardeen Salamat.</div>

                    <hr />
            </div>

        </footer>

        </>
    );

}

export default Footer;