import { SET_EVENTS } from '../constants';

const initialState = { events: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events
      };
    default:
      return state;
  }
}
