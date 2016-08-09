import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './component/Home.js';
import About from './component/About.js';
import Account from './component/Account.js';
import Blog from './component/Blog.js';
import Post from './component/Blog/Post.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="account" component={Account} />
    <Route path="blog" component={Blog} />
    <Route path="blog/:title" component={Post} />

  </Route>
)
