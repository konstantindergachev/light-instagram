import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import CommentList from '../../comments/comment-list/CommentList';
import Like from '../../like/Like';
import Logout from '../../logout/Logout';
import Spinner from '../../ui/Spinner';

const OnePost = ({ isLoading, id, name, img, likes, comments }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="post__wrap">
      <Logout />
      <div className="post">
        <h2 className="post__name">{name && name.full_name}</h2>
        <div className="post__img-wrap">
          <img
            className="post__img"
            src={img && img.standard_resolution.url}
            alt="first-post-img"
          />
        </div>
        <Like likes={likes && likes.count} />
        <Link to={!id ? `/post/${id}` : '/posts'}>
          <Button pathId={id} addClassName="back__btn" />
        </Link>
      </div>
      <CommentList comments={comments} />
    </section>
  );
};

OnePost.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.string,
  name: PropTypes.object,
  img: PropTypes.object,
  likes: PropTypes.object,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.posts.isLoading,
    id: state.posts.onePost.id,
    name: state.posts.onePost.user,
    img: state.posts.onePost.images,
    likes: state.posts.onePost.likes,
    comments: state.posts.comments,
  };
};

export default connect(mapStateToProps, null)(OnePost);
