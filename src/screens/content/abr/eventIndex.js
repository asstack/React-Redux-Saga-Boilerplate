import React, { Component } from 'react';
import EventList from './eventlist'
import ArtistSection from './artistSection'
import ArtWorkSection from './artWorkSection'
import ContactSection from './contactSection'
import ExhibSection from './exhibSection'
import NewsSection from './newsSection'
import ReviewsSection from './reviewsSection'


class EventIndex extends Component {

    render() {
        return (
            [
                <EventList key={1} />,
                <NewsSection key={2} />,
                <ExhibSection key={3} />,
                <ArtistSection key={4} />,
                <ReviewsSection key={5} />,
                <ArtWorkSection key={6} />,
                <ContactSection key={7} />,
            ]


        );
    }
}



export default EventIndex;
