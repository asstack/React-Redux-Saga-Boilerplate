import { SET_USERS, SET_NEWS } from '../constants';

const initialState = { users: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
