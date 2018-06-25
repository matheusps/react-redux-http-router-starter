import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import HomePage from  './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'; 
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
          </main>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
