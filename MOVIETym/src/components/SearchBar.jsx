const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search movies by title..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;