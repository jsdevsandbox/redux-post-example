import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state, //current state
        items: action.payload
      };

    case NEW_POST:
      return {
        ...state, //current state
        item: action.payload
      };

    default:
      return state;
  }
}
