import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import NavBar from 'components/NavBar';
import Home from 'pages/Home';
import OMnie from 'pages/OMnie';
import Oferta from 'pages/Oferta';
import Sklep from 'pages/Sklep';
import Blog from 'pages/Blog';
import Kontakt from 'pages/Kontakt';
import Koszyk from 'pages/Koszyk';
import Regulamin from 'pages/Regulamin';
import Polityka from 'pages/Polityka';
import Login from 'pages/Login';
import Error from 'pages/Error';
import ShowBlogPost from 'pages/ShowBlogPost';
import ShowShopItem from 'pages/ShowShopItem';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';


function App() {

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/o-mnie" component={OMnie} />
          <Route path="/oferta" component={Oferta} />
          <Route path="/sklep" exact component={Sklep} />
          <Route path="/sklep/:id" component={ShowShopItem} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={ShowBlogPost} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/koszyk" component={Koszyk} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/polityka-prywatnosci" component={Polityka} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
