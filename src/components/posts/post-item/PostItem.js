import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getOnePost } from '../../../actions/postActions';
import Button from '../../button/Button';
import Like from '../../like/Like';
import './PostItem.scss';

const PostItem = ({ id, name, img, likes, text, getOnePost, posts }) => (
  <section className="post__wrap">
    <div className="post">
      <h2 className="post__name">{name}</h2>
      <div className="post__img-wrap">
        <img className="post__img" src={img} alt="first-post-img" />
      </div>
      <Like likes={likes} />
      <p className="post__text">{text}</p>
      <Link to={`/post/${id}`} onClick={() => getOnePost(id, posts)}>
        <Button />
      </Link>
    </div>
  </section>
);

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  getOnePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getOnePost })(withRouter(PostItem));
