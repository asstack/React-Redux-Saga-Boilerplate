import React, { Component } from 'react';
import BannerSection from './bannerSection'
import EventsSection from './eventsSection'
import LocationSection from '../main/locationSection'


class EventsIndex extends Component {

    render() {
        return (
            [
                <BannerSection key={1} />,
                <EventsSection key={2} />,
                <LocationSection key={3} />
            ]
        );
    }
}

export default EventsIndex;
