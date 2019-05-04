/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/logoutActions';
import image from '../../img/sprite.svg';
import './Logout.scss';

const Logout = ({ logout, history }) => (
  <div className="logout">
    <button className="logout__click" onClick={() => logout(history)}>
      <a href="https://instagram.com/accounts/logout" target="_blank">
        <svg>
          <use xlinkHref={`${image}#logout`} />
        </svg>
        <span>Exit</span>
      </a>
    </button>
  </div>
);

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, { logout })(withRouter(Logout));
