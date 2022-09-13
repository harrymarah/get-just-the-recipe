import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { recipeUls : [] }

    this.getHtml = this.getHtml.bind(this)
  }

  getHtml(url) {
    fetch('https://fierce-basin-26627.herokuapp.com/' + url)
    .then(response => {
      return response.text()
    })
    .then(html => {
      const parser = new DOMParser()

      const doc = parser.parseFromString(html, 'text/html')

      const uls = doc.querySelectorAll('ul')

      const ulsArr = Array.prototype.slice.call(uls)

      console.log(ulsArr)

      this.setState({recipeUls: ulsArr})
    })
    .catch(e => console.error(e))
  }

  render() {
    return (
      <div>
        <SearchBar />
        
      </div>
    );
  }
}

export default App;