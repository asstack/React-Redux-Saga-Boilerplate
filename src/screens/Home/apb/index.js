import React, { Component } from 'react';
import Header from '../../Header/apb'
import MainGallery from '../../MainGallery/apb'
import Content from '../../content/apb/eventsIndex'
import Footer from '../../Footer/apb'

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
