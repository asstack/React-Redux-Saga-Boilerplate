import { SET_ARTWORKS } from '../constants';

const initialState = { artworks: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_ARTWORKS:
      return {
        ...state,
        artworks: action.artworks
      };
    default:
      return state;
  }
}
