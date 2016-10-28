import React from 'react';
import {render} from 'react-dom';

//Import css
import css from './styles/style.styl';

//Import React components
import Main from './components/Main';
import Single from './components/Single';
import RecipeGrid from './components/RecipeGrid';

//Import React Router deps
import {Router, Route, IndexRoute,browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={RecipeGrid}></IndexRoute>
        <Route path="view/:recipeId" component={Single}></Route>
      </Route>
    </Router>
  )

render(router, document.getElementById('root'));

