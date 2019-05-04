import React from 'react';
import PropTypes from 'prop-types';
import './CommentItem.scss';

const CommentItem = ({ username, commenttext }) => (
  <li className="comment__item">
    <span className="comment__username">{username}: </span>
    <span className="comment__commenttext">{commenttext} </span>
  </li>
);

CommentItem.propTypes = {
  username: PropTypes.string,
  commenttext: PropTypes.string,
};

export default CommentItem;
