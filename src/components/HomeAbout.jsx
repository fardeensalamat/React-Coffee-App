import styles from '../styles/HomeAbout.module.css';
import aboutImage from '../assets/home/about.jpeg';

function HomeAbout(){

    return(

                <section className={styles.about}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h1>ABOUT US</h1>
                                <p className={styles.text}>
                                    Brewed with passion, our coffee shop offers rich, aromatic blends and cozy vibes —
                                    perfect for catching up, chilling out, or grabbing your favorite cup on the go.
                                </p>

                                <br />
            
                                <div className={styles.buttonWrapper}>
                                  <button>Read More</button>
                                </div>             
                            </div>
                    
                            <div className="col-12 col-lg-6">
                                <img src={aboutImage} alt="about image" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </section>
    );


}

export default HomeAbout;