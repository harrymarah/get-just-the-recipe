import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const [urlSearch, updateUrlSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        props.getRecipeUls(urlSearch)
        updateUrlSearch('')
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
                    <input type='submit'></input>
                </div>
            </form>
     );
};


export default SearchBar;