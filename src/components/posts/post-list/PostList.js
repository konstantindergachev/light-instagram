import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../../logout/Logout';
import Spinner from '../../ui/Spinner';
import PostItem from '../post-item/PostItem';
import './PostList.scss';

const PostList = ({ isLoading, posts }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="post__list">
      <Logout />
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          name={post.user.full_name}
          img={post.images.standard_resolution.url}
          likes={post.likes.count}
          text={post.caption.text}
        />
      ))}
    </section>
  );
};

PostList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.posts.isLoading,
  posts: state.posts.posts,
});

export default connect(mapStateToProps, null)(PostList);
