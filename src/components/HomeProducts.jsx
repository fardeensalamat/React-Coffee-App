import styles from '../styles/HomeProducts.module.css';
import productImage1 from '../assets/home/p1.png';
import productImage2 from '../assets/home/p2.jpg';
import productImage3 from '../assets/home/p3.png';


function HomeProducts(){

    return(

        <section className={styles.products}>

            <div className='container'>

                <h1>OUR PRODUCTS</h1>
           

                <div className="row">                       
                        <div className="col-12 col-lg-4">
                            <div className={styles.card}>
                                <img src={productImage1} alt='product' />
                                <h4>Coffee Maker</h4>
                                <p>Brew your perfect cup with ease using our coffee maker.</p>
                            </div>
                        </div>  
                        <div className="col-12 col-lg-4">
                            <div className={styles.card}>
                                <img src={productImage2} alt='Coffee' />
                                <h4>Coffee</h4>
                                <p>Indulge in the perfect brew with our premium coffee selection.</p>
                            </div>
                        </div>  
                        <div className="col-12 col-lg-4">
                            <div className={styles.card}>
                                <img src={productImage3} alt='Gift Card' />
                                <h4>Gift Card</h4>
                                <p>Give the gift of choice with our convenient gift card.</p>
                            </div>
                        </div>                        
                </div>   
                                                    
            </div>

    </section>

    );
}

export default HomeProducts;