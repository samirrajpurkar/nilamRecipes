// increment the likes
export function increment(index) {
  return {
    type: 'INCREMENT-LIKES',
    index
  }
}

// add comment
export function addComment(recipe_id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    recipe_id,
    author,
    comment
  }
}

export function removeComment(recipe_id, comment) {
  return {
    type: 'REMOVE-COMMENT',
    comment,
    recipe_id
  }
}


// remove comment



