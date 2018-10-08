import React, { Component } from 'react';
import Header from '../Header/abr'
import MainGallery from '../MainGallery/abr/mainGallery'
import TopSliderSection from '../MainGallery/abr/topSliderSection'
import Content from '../content/abr/eventIndex'
import Footer from '../Footer/abr'

class Home extends Component {

  render() {
    return (
      [
        <Header key={1} />,
        <TopSliderSection key={2} />,
        <MainGallery key={3} />,
        <Content key={4} />,
        <Footer key={5} />
      ]
    );
  }
}

export default Home;
