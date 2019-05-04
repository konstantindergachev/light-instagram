import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ pathId, addClassName }) => (
  <button className={!pathId ? 'btn' : `btn ${addClassName}`}>
    {!pathId ? 'Read post' : 'Back to Feed'}
  </button>
);

Button.propTypes = {
  pathId: PropTypes.string,
  addClassName: PropTypes.string,
};

export default Button;
