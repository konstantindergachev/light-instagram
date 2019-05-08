import { TOKEN } from '../../constants';
import { getPost, getPosts } from '../../services';
import TYPES from './types';

//Post loading action creator
export const postLoading = () => {
  return {
    type: TYPES.POST_LOADING,
  };
};

//Get all posts action creator
export const getAllPosts = (token) => {
  return async (dispatch) => {
    try {
      const postsFromDB = await getPosts(token);
      dispatch({
        type: TYPES.GET_ALL_POST,
        payload: postsFromDB.data.data,
      });
    } catch (err) {
      dispatch({
        type: TYPES.ERROR,
        payload: err.message,
      });
    }
  };
};

//Get one post action creator
export const getOnePost = (postId, posts) => {
  return async (dispatch) => {
    dispatch(postLoading());
    const token = localStorage.getItem(TOKEN);
    const commentsFromDB = await getPost(postId, token);
    try {
      dispatch({
        type: TYPES.GET_ONE_POST,
        postId,
        posts,
        payload: commentsFromDB.data.data,
      });
    } catch (err) {
      dispatch({
        type: TYPES.ERROR,
        payload: err.message,
      });
    }
  };
};
