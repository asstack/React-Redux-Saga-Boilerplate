import React, { Component } from 'react';
import MainGallery from '../../MainGallery/abr'
import Content from '../../content/abr/main/eventsIndex'


class Main extends Component {

  render() {
    return (
      [
        <MainGallery key={1} />,
        <Content key={2} />
      ]
    );
  }
}

export default Main;
