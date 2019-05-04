import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from '../comment-item/CommentItem';
import './CommentList.scss';

const CommentList = ({ comments }) => (
  <ol className="comment__list">
    {comments.map((comment) => (
      <CommentItem
        key={comment.id}
        username={comment.from.username}
        commenttext={comment.text}
      />
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
