import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Table } from 'semantic-ui-react';

// import { getUsersSaga } from '../../actions';

// import '../../assets/css/style.css';
// import '../../assets/css/bootstrap.css';
// import '../../assets/css/font-awesome.css';
// import '../../assets/css/owl.carousel.css';


import Header from '../Header/header'
import MainGallery from '../MainGallery/mainGallery'
import TopSliderSection from '../MainGallery/topSliderSection'
import Content from '../content/eventIndex'
import Footer from '../Footer/footer'

class Home extends Component {
  // constructor() {
  //   super();
  // this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  // }

  // handleBtnOnClick() {
  //   this.props.getUsersSaga();
  // }

  render() {
    // const { users } = this.props;
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

// const mapStateToProps = state => ({
//   users: state.usersReducer.users
// });

// const mapDispatchToProps = dispatch => ({
//   getUsersSaga: () =>
//     dispatch(getUsersSaga())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
