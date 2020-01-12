import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
            <div className='pa2'>
                <input 
                    className='bg-green ba pa3 bg-lightest-blue cr2'
                    type='search'
                    placeholder='search-robots'
                    onChange={searchChange }
                />
            </div>
            );
}
export default SearchBox;

