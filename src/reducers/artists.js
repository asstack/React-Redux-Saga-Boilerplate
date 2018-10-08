import { SET_ARTISTS } from '../constants';

const initialState = { artists: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.artists
      };
    default:
      return state;
  }
}
