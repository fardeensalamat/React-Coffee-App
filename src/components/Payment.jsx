import styles from '../styles/Payment.module.css';
import React, {useState} from 'react'; 
import VisaImage from '../assets/cart/visa.jpg'; 
import MastercardImage from '../assets/cart/mastercard.jpg'; 
import BkashImage from '../assets/cart/bkash.jpg'; 

function Payment({ total }){

    const [promo, setPromo] = useState("");

    const delivery = 50;

    function handlePromoCode(event){ 

        setPromo(event.target.value); 

    } 

    return(
        <div className={styles.rightSide}>

                <div className={styles.promo}>

                    <p><b>Have Promo Code ?</b></p>

                    <div className={styles.inputBox}>
                        <textarea  onChange={handlePromoCode} placeholder='Enter Promo Code'/>
                        <button>Apply</button>
                    </div>
                
                </div>

                <div className={styles.priceCalculation}>
                   
                    <div className={styles.priceCalculationValues}> <span>Price:</span>  <span>{total} TK</span> </div>
                    <div className={styles.priceCalculationValues}> <span>Discount</span>  <span>0.0 TK</span> </div>
                    <div className={styles.priceCalculationValues}> <span>Delivery fee</span>  {total > 0 ? <span>{delivery} TK </span> : <span>0 TK </span>}    </div>
                    <hr />
                    <div className={styles.priceCalculationValues}> <span><b>Total</b></span>  {total > 0 ? <span><b>{total + delivery} TK </b></span> : <span><b>0.00 TK </b></span>} </div>
                    
                </div>

                <div className={styles.methods}>  

                    <img src={VisaImage} alt='visa'/>
                    <img src={MastercardImage} alt='mastercard'/>
                    <img src={BkashImage} alt='bkash'/>
                    <h4>Cash</h4>

                </div>

        </div>
    );
}

export default Payment;