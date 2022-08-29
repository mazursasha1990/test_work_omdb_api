import './index.css';

function SearchResults({ searchResults }: any) {
  if (Array.isArray(searchResults)) {
    return (
      <div className='searchResults'>
        {searchResults.map((searchResult: any) => (
          <div className='searchResult' key={searchResult.imdbID}>
            <p>{searchResult.Title}</p>
            <p>{searchResult.Year}</p>
            <img src={searchResult.Poster} alt={searchResult.Title} />
          </div>
        ))}
      </div>
    );
  } else if (typeof searchResults === 'string') {
    return (
      <div className='searchResult'>
        <p>{searchResults}</p>
      </div>
    );
  } else return null;
}

export default SearchResults;
