import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import sanitizeHtml from 'sanitize-html'
import './SavedRecipes.css'

const SavedRecipes = (props) => {
  const savedRecipeHTML = props.savedRecipes.map((recipe) => {
    return (
      <div
        className="recipe-card"
        key={uuidv4()}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(recipe) }}
      ></div>
    )
  })
  return <div className="SavedRecipes">{savedRecipeHTML}</div>
}

export default SavedRecipes