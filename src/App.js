
import React from 'react';
import GlobalStyle from './globalStyle';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";

import { Navbar ,Footer,MediaCard} from './components';
import  Home from './pages/HomePage/Home';

 function App() {

  // TODO Handle It

  
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/MediaCard" component={MediaCard}/>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
export default App ;
