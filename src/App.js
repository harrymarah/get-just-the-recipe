import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ShowAllUls from './components/ShowAllUls'
import ShowSelectedUls from './components/ShowSelectedUls'
import Guide from './components/Guide'
import ScrollButton from './components/ScrollButton'
import SavedRecipes from './components/SavedRecipes'
import './App.css'

const App = () => {
  const [recipeUls, setRecipeUls] = useState([])
  const [selectedRecipeUls, setSelectedRecipeUls] = useState([])
  const [isLoading, toggleLoading] = useState(false)
  const [stage, updateStage] = useState(1)
  const [showSavedRecipes, updateShowSavedRecipes] = useState(false)

  const localStorageRecipes = JSON.parse(localStorage.getItem('savedRecipes'))
  const [savedRecipes, updateSavedRecipes] = useState(localStorageRecipes || [])

  useEffect(() => {
    if (savedRecipes.length) {
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
    }
  }, [savedRecipes])

  const getHtml = (url) => {
    toggleLoading(true)
    updateShowSavedRecipes(false)
    setSelectedRecipeUls([])
    fetch('https://fierce-basin-26627.herokuapp.com/' + url)
      .then((response) => {
        return response.text()
      })
      .then((html) => {
        const parser = new DOMParser()

        const doc = parser.parseFromString(html, 'text/html')

        const uls = doc.querySelectorAll('ul')

        const ulsArr = Array.prototype.slice.call(uls)

        setRecipeUls(ulsArr)
        updateStage(2)
        toggleLoading(false)
      })
      .catch((e) => console.error(e))
  }

  let selectedDivs = []

  const selectDiv = (e) => {
    if (!e.currentTarget.selected) {
      selectedDivs.push(e.currentTarget.innerHTML)
      e.currentTarget.selected = true
      e.currentTarget.classList.add('selected')
    } else {
      const index = selectedDivs.indexOf(e.currentTarget.innerHTML)
      selectedDivs.splice(index, 1)
      e.currentTarget.selected = false
      e.currentTarget.classList.remove('selected')
    }
  }

  const showSelectedUls = () => {
    setSelectedRecipeUls(selectedDivs)
    window.scrollTo({
      top: 338,
      behavior: 'smooth',
    })
    setRecipeUls([])
    selectedDivs = []
    updateStage(3)
  }

  const resetUI = () => {
    setRecipeUls([])
    setSelectedRecipeUls([])
    updateStage(1)
  }

  const handleSavedRecipesLoad = () => {
    setRecipeUls([])
    setSelectedRecipeUls([])
    updateStage(1)
    updateShowSavedRecipes(true)
  }

  return (
    <main>
      <ScrollButton
        direction="up"
        hidden={false}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      />

      <SearchBar getRecipeUls={getHtml} isLoading={isLoading} />

      <Guide stage={stage} />

      <button className="saved-recipes-button" onClick={handleSavedRecipesLoad}>
        Saved Recipes <i className="fa-solid fa-utensils"></i>
      </button>

      {showSavedRecipes ? (
        <SavedRecipes
          savedRecipes={savedRecipes}
          updateSavedRecipes={updateSavedRecipes}
        />
      ) : (
        ''
      )}

      {recipeUls.length ? (
        <ShowAllUls
          allRecipeUls={recipeUls}
          selectDiv={selectDiv}
          showSelectedUls={showSelectedUls}
        />
      ) : (
        ''
      )}

      {selectedRecipeUls.length ? (
        <ShowSelectedUls
          selectedRecipeUls={selectedRecipeUls}
          resetUI={resetUI}
          savedRecipes={savedRecipes}
          updateSavedRecipes={updateSavedRecipes}
        />
      ) : (
        ''
      )}

      <ScrollButton
        direction="down"
        hidden={false}
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          })
        }
      />
    </main>
  )
}

export default App
