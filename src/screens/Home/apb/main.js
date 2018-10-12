import React, { Component } from 'react';
import MainGallery from '../../MainGallery/apb'
import Content from '../../content/apb/main/eventsIndex'


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
