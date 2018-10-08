import {
  GET_USERS_SAGA, SET_USERS, GET_NEWS_SAGA, SET_NEWS, GET_EVENTS_SAGA, SET_EVENTS,
  GET_EXHIBITORS_SAGA, SET_EXHIBITORS, GET_ARTISTS_SAGA, SET_ARTISTS, GET_ARTWORKS_SAGA, 
  SET_ARTWORKS, GET_BLOCKS_SAGA, SET_BLOCKS
} from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}

export function setNews(news) {
  return {
    type: SET_NEWS,
    news
  }
}

export function getNewsSaga() {
  return {
    type: GET_NEWS_SAGA
  }
}

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    events
  }
}

export function getEventsSaga(params) {
  return {
    type: GET_EVENTS_SAGA,
    params: params
  }
}

export function setExhibitors(exhibitors) {
  return {
    type: SET_EXHIBITORS,
    exhibitors
  }
}

export function getExhibitorsSaga() {
  return {
    type: GET_EXHIBITORS_SAGA
  }
}

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    artists
  }
}

export function getArtistsSaga() {
  return {
    type: GET_ARTISTS_SAGA
  }
}

export function setArtworks(artworks) {
  return {
    type: SET_ARTWORKS,
    artworks
  }
}

export function getArtworksSaga() {
  return {
    type: GET_ARTWORKS_SAGA
  }
}

export function setBlocks(blocks) {
  return {
    type: SET_BLOCKS,
    blocks
  }
}

export function getBlocksSaga() {
  return {
    type: GET_BLOCKS_SAGA
  }
}