import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import OMnie from './pages/OMnie';
import Oferta from './pages/Oferta';
import Sklep from './pages/Sklep';
import Przepisy from './pages/Przepisy';
import Blog from './pages/Blog';
import Kontakt from './pages/Kontakt';
import Koszyk from './pages/Koszyk';
import Regulamin from './pages/Regulamin';
import Polityka from './pages/Polityka';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/o-mnie" component={OMnie} />
          <Route path="/oferta" component={Oferta} />
          <Route path="/sklep" component={Sklep} />
          <Route path="/przepisy" component={Przepisy} />
          <Route path="/blog" component={Blog} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/koszyk" component={Koszyk} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/polityka-prywatnosci" component={Polityka} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
