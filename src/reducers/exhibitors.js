import { SET_EXHIBITORS } from '../constants';

const initialState = { exhibitors: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_EXHIBITORS:
      return {
        ...state,
        exhibitors: action.exhibitors
      };
    default:
      return state;
  }
}
