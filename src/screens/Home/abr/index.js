import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../Header/abr'
import Main from './main'
import NewsIndex from '../../content/abr/news/newsIndex'
import EventsIndex from '../../content/abr/events/eventsIndex'
import Footer from '../../Footer/abr'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/art-boca-raton' component={Main} />
          <Route exact path='/art-boca-raton/news' component={NewsIndex} />
          <Route exact path='/art-boca-raton/events' component={EventsIndex} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
