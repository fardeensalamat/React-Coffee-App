import SideMenu from '../components/SideMenu';
import Card from '../components/Card'; 
import styles from '../styles/Menu.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

function Menu({ food = [] }) {

  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item


  // Sending id, name and price of selected item to Cart
  const handleItemSelect = (id, name, price) => {
    setSelectedItem({ id, name, price }); // Save name, id, and price
    addToCart({ id, name, price }); 

  };

  // Checking whether the food object is received from Menu.jsx.

  if (!food || food.length === 0) {
    return null;
  }

  const [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19] = food;

  return (
    <section className={styles.menu}>

      <div className={styles.heading}>

        <h2>Menu</h2>
        <p>
          Discover your perfect brew with our curated coffee menu—
          crafted for every mood, moment, and craving.
        </p>

        <hr />

      </div>

      <div className="container">

        <div className="row">

          <div className="col-lg-3 d-none d-lg-block">

            <div className={styles.stickySideMenu}>
              <SideMenu />
            </div>

          </div>

          <div className="col-lg-9">

            <h5 id="hot">HOT COFFEE</h5>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f1} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f2} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f3} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f4} onItemSelect={handleItemSelect} />
              </div>
            </div>

            <h5 id="iced">ICED COFFEE</h5>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f5} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f6} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f7} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f8} onItemSelect={handleItemSelect} />
              </div>
            </div>

            <h5 id="tea">TEA</h5>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f9} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f10} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f11} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f12} onItemSelect={handleItemSelect} />
              </div>
            </div>

            <h5 id="snacks">SNACKS</h5>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f13} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f14} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f15} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f16} onItemSelect={handleItemSelect} />
              </div>
            </div>

            <h5 id="dessert">DESSERT</h5>
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f17} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f18} onItemSelect={handleItemSelect} />
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <Card item={f19} onItemSelect={handleItemSelect} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;
