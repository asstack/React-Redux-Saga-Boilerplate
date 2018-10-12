import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../Header/abr'
import Main from './main'
import NewsIndex from '../../content/abr/news/newsIndex'
import EventsIndex from '../../content/abr/events/eventsIndex'
import EventDetailsIndex from '../../content/abr/eventDetails/eventDetailsIndex'
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
          <Route exact path='/art-boca-raton/event/:id' component={EventDetailsIndex} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
