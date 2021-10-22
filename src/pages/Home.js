import React, {useEffect} from 'react';
import HomeMain from 'components/HomeMain';
import MetaSlider from 'components/MetaSlider';

const Home = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <HomeMain />
      <MetaSlider />
    </>
  )
}

export default Home;