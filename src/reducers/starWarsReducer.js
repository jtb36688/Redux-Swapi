import { FETCHING, SUCCESS, FAILURE } from  "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};
