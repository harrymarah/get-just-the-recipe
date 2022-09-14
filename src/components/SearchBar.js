import React, { useState } from 'react';

const SearchBar = (props) => {
    const [urlSearch, updateUrlSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        props.getRecipeUls(urlSearch)
        updateUrlSearch('')
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label htmlFor='url-input'>Paste in the recipe URL</label>
                <input 
                    onChange={e => updateUrlSearch(e.target.value)}
                    value={urlSearch}
                    type='text' 
                    id='url-input'
                >
                </input>
                <input type='submit'></input>
            </form>
            
        </div>
    );
};


export default SearchBar;