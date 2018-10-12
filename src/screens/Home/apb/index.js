import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../Header/apb'
import Main from './main'
import NewsIndex from '../../content/apb/news/newsIndex'
import Footer from '../../Footer/apb'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/art-palm-beach' component={Main} />
          <Route exact path='/art-palm-beach/news' component={NewsIndex} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
