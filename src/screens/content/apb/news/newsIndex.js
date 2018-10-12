import React, { Component } from 'react';
import BannerSection from './bannerSection'
import NewsSection from './newsSection'
import LocationSection from '../main/locationSection'


class NewsIndex extends Component {

    render() {
        return (
            [
                <BannerSection key={1} />,
                <NewsSection key={2} />,
                <LocationSection key={3} />
            ]
        );
    }
}

export default NewsIndex;
