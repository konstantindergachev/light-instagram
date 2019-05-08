import TYPES from '../actions/types';

export const initialState = {
  isLoading: false,
  posts: [],
  onePost: {},
  error: '',
  comments: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_ALL_POST:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
      case TYPES.GET_ONE_POST:
      return {
        ...state,
        isLoading: false,
        onePost: action.posts.find((post) => post.id === action.postId),
        comments: action.payload,
      };
      case TYPES.ERROR:
      return{
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
