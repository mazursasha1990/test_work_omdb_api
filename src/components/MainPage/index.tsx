import React, { useState } from 'react';
import SearchResults from '../SearchResults';
import './index.css';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=f1aa9db&s=${searchValue}`
    );
    const actualData = await response.json();
    console.log('actualData', actualData);

    if (actualData.Response === 'False') {
      setData(actualData.Error);
    } else {
      setData(actualData.Search);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className='mainPage'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='name'
            placeholder='Enter film name'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>

      <SearchResults searchResults={data} />
    </div>
  );
}

export default SearchForm;
