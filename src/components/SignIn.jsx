import React from "react";
import  {useState} from 'react';
import coffeeImage from '../assets/sign-in/coffee-1.jpg';
import styles from '../styles/SignIn.module.css';
import { IoLogInSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";




function SignIn(){

    const [isLogin, setIsLogin] = useState(true);

    return(
            <>
               <div className={styles.container}>


                        <div className={styles.formContainer}>

                            
                            <div className={styles.top}>
                                <img  src={coffeeImage} />
                                <h4>Coffee</h4>
                            </div>
                        
                            <div className={styles.formToggle}>

                                <button className={isLogin ? styles.active : ""} onClick={()=>setIsLogin(true)}>Log in <IoLogInSharp /></button>
                                <button className={!isLogin ? styles.active : ""} onClick={()=>setIsLogin(false)}>Sign Up <FaUser /></button>

                            </div>

                            {isLogin ?  <>
                                                {/* Log in form */}
                                            <div className={styles.form}>                                              
                                                <input type="email" placeholder="Enter email"/>
                                                <input type="password" placeholder="Enter password"/>
                                                <a href="#">Forgot Password?</a>
                                                <button>Log in <IoLogInSharp /></button>
                                                <p>Not a Member? <a href="#" onClick={()=>setIsLogin(false)}>Sign Up now </a></p>
                                            </div>
                                        </> : 
                                        <>
                                                {/* Sign up Form */}
                                            <div className={styles.form}>                                            
                                                <input type="email" placeholder="Enter email"/>
                                                <input type="password" placeholder="Enter password"/>
                                                <input type="password" placeholder="Confirm password"/>
                                                <button>Sign Up <FaUser /></button>
                                            </div>                   
                            
                                         </> }

                        </div>

                    </div>     
            </>
        );
    
}

export default SignIn;