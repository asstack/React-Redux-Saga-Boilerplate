import React, { Component } from 'react';
import EventDetailsSection from './eventDetailsSection'
import NewsSection from '../main/newsSection'
import LocationSection from '../main/locationSection'


class EventDetailsIndex extends Component {

    render() {
        return (
            [
                <EventDetailsSection key={1} />,
                <NewsSection key={2} />,
                <LocationSection key={3} />
            ]
        );
    }
}

export default EventDetailsIndex;
