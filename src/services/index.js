import axios from 'axios';

export const getPosts = (token) => {
  return axios.get(
    `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`
  );
};

export const getPost = (postId, token) => {
  return axios.get(
    `https://api.instagram.com/v1/media/${postId}/comments?access_token=${token}`
  );
};
