import styles from '../styles/HomeStore.module.css';
import storeImage from '../assets/home/store.png';

function HomeStore() {
  return (
    <section className={styles.storeSection}>
      <div className='container'>
        <div className='row align-items-center'>

          <div className='col-lg-6'>
            <h3 className={styles.heading}>Visit our Store</h3>
            <p className={styles.description}>
              Step into a cozy corner of comfort and aroma. Whether you're here for your morning boost or an afternoon break, our coffee store offers handcrafted brews, warm vibes, and the perfect spot to relax or catch up. Come in, sip, and stay awhile.
            </p>
          </div>

          <div className='col-lg-6'>
            <img src={storeImage} alt='Interior view of our cozy coffee store' className='img-fluid rounded shadow-sm' />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeStore;
