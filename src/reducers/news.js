import { SET_NEWS } from '../constants';

const initialState = { news: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.news
      };
    default:
      return state;
  }
}
