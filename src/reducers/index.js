import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import usersReducer from './users';
import newsReducer from './news';
import eventsReducer from './events';
import exhibitorsReducer from './exhibitors';
import artistsReducer from './artists';
import artworksReducer from './artworks';

export default combineReducers({
  routing: routerReducer,
  usersReducer,
  newsReducer,
  eventsReducer,
  exhibitorsReducer,
  artistsReducer,
  artworksReducer
});
