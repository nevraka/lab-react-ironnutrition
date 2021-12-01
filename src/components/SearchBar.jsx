const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Are you hungry?"
      ></input>
    </div>
  );
};
export default SearchBar;
