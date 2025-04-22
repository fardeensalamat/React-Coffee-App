import styles from '../styles/SideMenu.module.css';

function SideMenu(){

    return(
        <div className={styles.SideMenu}>

            <ul>
                
                  <li><a href='#hot'><h5>HOT COFFEE</h5></a></li>
                  <li><a href='#hot'>Americano</a></li>
                  <li><a href='#hot'> Cappucino</a></li>
                  <li><a href='#hot'> Flat White</a></li>
                  <li><a href='#hot'> Caffe Latte</a></li>
            </ul>
   
            <ul>
                  <li><a href='#iced'> <h5>ICED COFFEE</h5></a></li>
                  <li><a href='#iced'>Frappe</a></li>
                  <li><a href='#iced'>Iced Latte</a></li>
                  <li><a href='#iced'>Iced Mocha</a></li>
                  <li><a href='#iced'>Iced Coffee</a></li>
            </ul>

            <ul>
                  <li><a href='#tea'> <h5>TEA</h5></a></li>
                  <li><a href='#tea'>Iced Tea</a></li>
                  <li><a href='#tea'>Milk Tea</a></li>
                  <li><a href='#tea'>Lemon Tea</a></li>
                  <li><a href='#tea'>Black Tea</a></li>
            </ul>
   
            <ul>
                  <li><a href='#snacks'><h5>SNACKS</h5></a></li>
                  <li><a href='#snacks'>Sandwich</a></li>
                  <li><a href='#snacks'>Tuna Sandwich</a></li>
                  <li><a href='#snacks'>Garlic Bread</a></li>
                  <li><a href='#snacks'>Croissant</a></li>
            </ul>
   
            <ul>
                 <li><a href='#dessert'><h5>DESSERT</h5></a></li>
                 <li><a href='#dessert'>Cheesecake</a></li>
                 <li><a href='#dessert'>Brownie</a></li>
                 <li><a href='#dessert'>Cookie</a></li>
   
            </ul>         
        </div>
    );

}

export default SideMenu;