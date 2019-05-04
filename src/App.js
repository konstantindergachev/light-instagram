import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth';
import PageNotFound from './components/page-not-found/PageNotFound';
import OnePost from './components/posts/one-post/OnePost';
import PostList from './components/posts/post-list/PostList';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/post/:id" component={OnePost} />
          <Route render={(props) => <PageNotFound {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
