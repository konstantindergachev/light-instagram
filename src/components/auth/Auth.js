import React from 'react';
import InstagramLogin from 'react-instagram-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllPosts } from '../../actions/postActions';
import { config } from '../../config/config';
import './Auth.scss';

class Auth extends React.Component {
  responseInstagram = (response) => {
    localStorage.setItem('token', response);
    const { getAllPosts, history } = this.props;
    getAllPosts(response);
    history.push('/posts');
  };
  render() {
    return (
      <section className="authorize">
        <h1 className="authorize__title">Light Instagram</h1>
        <InstagramLogin
          clientId={config.clientID}
          buttonText="Enter"
          onSuccess={this.responseInstagram}
          onFailure={this.responseInstagram}
          cssClass="instagram"
          implicitAuth={true}
        />
      </section>
    );
  }
}

export default connect(null, { getAllPosts })(withRouter(Auth));
