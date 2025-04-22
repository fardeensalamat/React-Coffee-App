import styles from '../styles/HomeHero.module.css';

function HomeHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1>Welcome to Coffee App</h1>
          <p>Enjoy your favorite coffee blends with us</p>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
