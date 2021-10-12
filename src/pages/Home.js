import React from 'react';
import HomeMain from 'components/HomeMain';
import styles from './Home.module.scss'

const Home = () => {
  
  return (
    <div className={styles.wrapper}>
      <HomeMain />
      <div className={styles.mainOpis}>
        {/* <h2>Moja dieta pomogła już ponad 176 podopiecznym. <br></br>
      Sprawdź ich metamorfozy!
        </h2> */}
      </div>
    </div>
  )
}

export default Home;