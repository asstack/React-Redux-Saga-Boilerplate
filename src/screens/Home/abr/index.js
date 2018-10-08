import React, { Component } from 'react';
import Header from '../../Header/abr'
import MainGallery from '../../MainGallery/abr'
import Content from '../../content/abr/eventsIndex'
import Footer from '../../Footer/abr'

class Home extends Component {

  render() {
    return (
      [
        <Header key={1} />,
        <MainGallery key={2} />,
        <Content key={3} />,
        <Footer key={4} />
      ]
    );
  }
}

export default Home;
