import React, { useState } from 'react';

const SearchBar = () => {
    const [urlSearch, updateUrlSearch] = useState('')

    return (
        <div>
            <label for='url-input'>Paste in the recipe URL</label>
            <input 
                onChange={e => updateUrlSearch(e.target.value)}
                value={urlSearch}
                type='text' 
                id='url-input'>
            </input>
        </div>
    );
};

export default SearchBar;