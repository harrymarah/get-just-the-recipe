import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import sanitizeHtml from 'sanitize-html'
import './SavedRecipes.css'
import 'animate.css'

const SavedRecipes = (props) => {
  const deleteRecipe = (e) => {
    const recipeID = e.target.parentNode.firstChild.getAttribute('recipeid')
    const updatedRecipes = props.savedRecipes.filter((recipe) => {
      return recipe.id !== recipeID
    })
    e.target.parentNode.classList.add('animate__fadeOut')
    setTimeout(() => {
      props.updateSavedRecipes(updatedRecipes)
    }, 2000)
  }

  const savedRecipeHTML = props.savedRecipes.map((recipe) => {
    return (
      <div className="recipe-card animate__animated" key={uuidv4()}>
        <div
          recipeid={recipe.id}
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(recipe.recipe) }}
        ></div>
        <button className="delete-button" onClick={deleteRecipe}>
          Delete <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    )
  })
  return (
    <div className="SavedRecipes">
      {savedRecipeHTML.length ? (
        savedRecipeHTML
      ) : (
        <h2>You don't have any saved recipes yet...</h2>
      )}
    </div>
  )
}

export default SavedRecipes
