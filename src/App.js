import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ShowAllUls from './components/ShowAllUls';
import ShowSelectedUls from './components/ShowSelectedUls'
import Guide from './components/Guide'
import './App.css'

const App = () => {
  const [recipeUls, setRecipeUls] = useState([])
  const [selectedRecipeUls, setSelectedRecipeUls] = useState([])
  const [isLoading, toggleLoading] = useState(false)
  const [stage, updateStage] = useState(1)

  const getHtml = (url) => {
      toggleLoading(true)
      setSelectedRecipeUls([])
      fetch('https://fierce-basin-26627.herokuapp.com/' + url)
      .then(response => {
        return response.text()
      })
      .then(html => {
        const parser = new DOMParser()
  
        const doc = parser.parseFromString(html, 'text/html')
  
        const uls = doc.querySelectorAll('ul')
  
        const ulsArr = Array.prototype.slice.call(uls)
  
        setRecipeUls(ulsArr)
        updateStage(2)
        toggleLoading(false)
      })
      .catch(e => console.error(e))
    }

  let selectedDivs = []

  const selectDiv = (e) => {
      if(!e.currentTarget.selected) {
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
      setRecipeUls([])
      selectedDivs = []
      updateStage(3)
    }

    const resetUI = () => {
      setRecipeUls([])
      setSelectedRecipeUls([])
      updateStage(1)
    }

  return (
      <main>
          <SearchBar getRecipeUls={getHtml} isLoading={isLoading} />

          <Guide stage={stage} />

          {recipeUls.length ? <ShowAllUls allRecipeUls={recipeUls} selectDiv={selectDiv} showSelectedUls={showSelectedUls} /> : ''}   

          {selectedRecipeUls.length ? <ShowSelectedUls selectedRecipeUls={selectedRecipeUls} resetUI={resetUI} /> : ''} 
    </main>
  );
};

export default App;