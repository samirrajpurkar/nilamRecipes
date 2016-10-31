import React from 'react';
import {Link} from 'react-router';

import SingleRecipe from './SingleRecipe';

const RecipeGrid = React.createClass({
  render() {
    return (
      <div className="recipe-grid">
        {this.props.recipes.map((recipe, index) => <SingleRecipe {...this.props} key={index} i={index} recipe={recipe}/>)}
      </div>
    )
  }
})

export default RecipeGrid;