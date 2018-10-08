import React, { Component } from 'react';
import EventsSection from './eventsSection'
import ArtistsSection from './artistsSection'
import ArtworksSection from './artworksSection'
import LocationSection from './locationSection'
import ExhibitorsSection from './exhibitorsSection'
import NewsSection from './newsSection'
import ReviewsSection from './reviewsSection'


class EventsIndex extends Component {

    render() {
        return (
            [
                <EventsSection key={1} />,
                <NewsSection key={2} />,
                <ExhibitorsSection key={3} />,
                <ArtistsSection key={4} />,
                <ReviewsSection key={5} />,
                <ArtworksSection key={6} />,
                <LocationSection key={7} />,
            ]
        );
    }
}

export default EventsIndex;
