import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/posts_index.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
  </Route>
);
