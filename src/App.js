import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ShowAllUls from './components/ShowAllUls';
import ShowSelectedUls from './components/ShowSelectedUls'
import './App.css'

const App = () => {
  const [recipeUls, setRecipeUls] = useState([])
  const [selectedRecipeUls, setSelectedRecipeUls] = useState([])
  const [isLoading, toggleLoading] = useState(false)

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
      })
      .catch(e => console.error(e))
      toggleLoading(false)
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
    }

  return (
      <main>
          <SearchBar getRecipeUls={getHtml} />

          {isLoading ? 'loading' : ''}

          <ShowAllUls allRecipeUls={recipeUls} selectDiv={selectDiv} showSelectedUls={showSelectedUls} />   

          <ShowSelectedUls selectedRecipeUls={selectedRecipeUls} /> 
    </main>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { 
//       recipeUls : [],
//       selectedRecipeUls: [],
//       isLoading: false
//     }

//     this.getHtml = this.getHtml.bind(this)
//     this.selectDiv = this.selectDiv.bind(this)
//   }

//   getHtml(url) {
//     this.setState({isLoading: true})
//     fetch('https://fierce-basin-26627.herokuapp.com/' + url)
//     .then(response => {
//       return response.text()
//     })
//     .then(html => {
//       const parser = new DOMParser()

//       const doc = parser.parseFromString(html, 'text/html')

//       const uls = doc.querySelectorAll('ul')

//       const ulsArr = Array.prototype.slice.call(uls)

//       this.setState({recipeUls: ulsArr})
//     })
//     .catch(e => console.error(e))
//     this.setState({isLoading: false})
//   }

//   selectDiv(e) {
//     e.currentTarget.classList.toggle('selected')
//     // this.setState({selectedRecipeUls: [...this.state.selectedRecipeUls, e.currentTarget.innerHTML]})
//     // console.log(this.state.selectedRecipeUls)
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar getRecipeUls={this.getHtml} />

//         {this.state.isLoading ? 'loading' : ''}

//         <ShowAllUls allRecipeUls={this.state.recipeUls} selectDiv={this.selectDiv}/>
        
//       </div>
//     );
//   }
// }

export default App;