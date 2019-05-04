import React from 'react';
import PropTypes from 'prop-types';
import image from '../../img/sprite.svg';
import './Like.scss';

const Like = ({ likes }) => (
  <div className="like">
    <button className="like__click">
      <svg style={{ fill: likes && 'red', stroke: likes && 'red' }}>
        <use xlinkHref={`${image}#heart`} />
      </svg>
    </button>
    <span className="like__count">{likes}</span>
  </div>
);

Like.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default Like;
