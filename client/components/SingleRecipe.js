import React from 'React';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const SingleRecipe = React.createClass({
  getImage(src) {
    return require('../../images/'+src)
  },

  render() {
    const {recipe, i, comments} = this.props;

    return(
      <figure className="grid-figure">

        <div className="grid-recipe-wrap">
          
          <Link to={'/view/${recipe.code}'}>
            <img src={this.getImage(recipe.display_src)} alt={recipe.caption} />
          </Link>

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={recipe.likes} className="likes-heart">
              {recipe.likes}
            </span>
          </CSSTransitionGroup>
        
        </div>

        <figcaption>
          <p>{recipe.caption}</p>

          <div className="control-buttons">
            <button className="likes">
              &hearts;{recipe.likes}
            </button>
            <Link className="button" to={'/view/${recipe.code}'}>
              <span className="comment-count">
                <span className="speech-bubble">
                </span>
                {comments[recipe.code] ? comments[recipe.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
        
      </figure>
    )
  }
})

export default SingleRecipe;