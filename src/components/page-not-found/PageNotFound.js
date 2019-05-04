import React from 'react';
import { withRouter } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => (
  <section className="page__not-found">
    <h1 className="error__text">404</h1>
    <h2 className="error__text">Page Not Found</h2>
    <p>Sorry, this page does not exist</p>
  </section>
);
export default withRouter(PageNotFound);
