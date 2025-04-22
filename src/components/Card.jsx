import { useState } from 'react';
import styles from '../styles/Card.module.css';
import { CiDiscount1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";


function Card({ item , onItemSelect }) {
  const [showModal, setShowModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const showPopUpModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const handleAddToCart = () => {
    setAddedToCart(true); 

    // Sending id, name and price of selected item to Menu
    if (onItemSelect) {
      onItemSelect(item.id, item.name, item.price);
    }
    setTimeout(() => {
      setAddedToCart(false); 
      setShowModal(false);  
    }, 1000);

};


 

  return (
    <>
      <div className={styles.card}>
        <div className={styles.star}><FaStar />&nbsp;{item.star}</div>

        <img src={item.image} alt={item.name} className={styles.image} />

        <div className={styles.top}>
          <span className={styles.name}><b>{item.name}</b></span>
          {item.discountAvailable && (
            <span className={styles.discount}>10% <CiDiscount1 /></span>
          )}
        </div>

        <span className={styles.price}>
          {item.discountAvailable ? (
            <>
              <span className={styles.oldPrice}>{item.price} Taka</span>
              <span className={styles.newPrice}> {item.price * 0.9} Taka</span>
            </>
          ) : (
            `${item.price} Taka`
          )}
        </span>

        {/* For popup modal */}
        <button className={styles.addButton} onClick={showPopUpModal}>
          <IoIosAddCircle className={styles.addIcon} /> Add to Cart
        </button>
      </div>

      {/* --------------- POP UP MODAL --------------- */}

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>

                <div className={styles.topSection}>
                   
                    <div className={styles.star}><FaStar />&nbsp;{item.star}</div>
                    <button onClick={closeModal}><IoCloseCircle size={24}/></button>
                    
                </div>

                <h3>{item.name} </h3>

                <div className={styles.imageModal}>
                    <img src={item.image} alt={item.name} className={styles.image} />
                </div>                                     

                <p className={styles.priceModal}>{item.discountAvailable ? `Discounted Price: ${item.price * 0.9} Taka` : `${item.price} Taka`} </p>

                <p className={styles.textDescription}>{item.description || "No description available."}</p>


               {addedToCart ?
                  (<h4 className={styles.cartMessage}>{item.name} added to cart! </h4>) : 
                  (
                          
                    <button className={styles.addButton2} onClick={handleAddToCart}>
                      <IoIosAddCircle className={styles.addIcon} /> Add to Cart
                    </button>
                  )
                }
            

          </div>
        </div>
      )}

      {/* --------------- END POP UP MODAL --------------- */}
      
    </>
  );
}

export default Card;
