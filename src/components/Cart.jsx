import styles from '../styles/Cart.module.css';
import Payment from './Payment';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    // Create a state to track quantity of each item by their id
    const [itemCounts, setItemCounts] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = 1; // initialize quantity to 1 for each item
            return acc;
        }, {})
    );

    const increment = (itemId) => {
        setItemCounts((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] + 1
        }));
    };

    // Don't decrease below 1
    const decrement = (itemId) => {
        setItemCounts((prevState) => {
            if (prevState[itemId] > 1) {
                return {
                    ...prevState,
                    [itemId]: prevState[itemId] - 1
                };
            }
            return prevState; 
        });
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const quantity = itemCounts[item.id] || 1;
        return total + item.price * quantity;
    }, 0);
    

    return (
        <section>
            <div className="container">
                <div className="row">


                    <div className="col-lg-8 mt-3 mb-3">

                        <h1>Cart <FaShoppingCart /></h1>

                        <hr />

                        {cartItems.length === 0 ? 

                        <div className={styles.emptyCart}>
                            <div className={styles.textMain}> <h1 className={styles.text1}>Your Cart is </h1><h1 className={styles.text2}>&nbsp;Empty</h1> </div>
                            <p>Must add items before you proceed to check out.</p> 
                            <Link to="/menu" className="btn btn-danger rounded-pill">Return to Menu</Link>         
                        </div> :  

                        <div className={styles.tableParent}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Quantity</th>                                       
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>                                                
                                                <button onClick={() => decrement(item.id)} className={styles.quantityBtn} disabled={itemCounts[item.id] <= 1}><TbTriangleInvertedFilled /></button>                  
                                                {itemCounts[item.id]} {/* Display the quantity for each item */}
                                                <button onClick={() => increment(item.id)} className={styles.quantityBtn}><IoTriangle /></button>                                              
                                            </td>
                                            <td>{itemCounts[item.id] * item.price} Taka</td> {/* Total price calculation */}
                                            <td>
                                                <button onClick={() => removeFromCart(item.id)} className={styles.trashButton}><FaTrash /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                    </div>


                    <div className="col-lg-4 mt-3 mb-3">
                        <Payment total={totalPrice} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
