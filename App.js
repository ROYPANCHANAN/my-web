import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import  Layout  from './components/Layout';
import { Home } from './Home';
import { About } from './About';
import { Service } from './Service';
import { Contact } from './Contact';
import ScrollToTop from 'react-scroll-to-top';
import { Footer } from './components/Footer';


class App extends Component {
  render () {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout/>
        <Router>
          <Switch>
            <Route exact path='/' component={ Home }></Route>
            <Route path='/about' component={ About }></Route>
            <Route path='/service' component={ Service }></Route>
            <Route path='/contact' component={ Contact }></Route>
          </Switch>
        </Router>
        <Footer />
        <div>
          <div style={{marginTop:'auto'}} />
            <ScrollToTop smooth />
          </div>
      </React.Fragment>
    );
  }
}

export default App;
