import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const [urlSearch, updateUrlSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        props.getRecipeUls(urlSearch)
        updateUrlSearch('')
    }

    let button
    if(props.isLoading){
        button = <button className='button-loading'><i className="fa-solid fa-spinner"></i></button>
    } else {
        button = <button className='submit-button' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
    }

    return (
            <form onSubmit={handleSearch}>
                <label className='heading' htmlFor='url-input'>Paste in the entire recipe URL</label>
                <div className='searchbar-wrapper'>
                    <input 
                        onChange={e => updateUrlSearch(e.target.value)}
                        value={urlSearch}
                        type='text' 
                        id='url-input'
                    >
                    </input>
                    {button}
                </div>
            </form>
     );
};


export default SearchBar;