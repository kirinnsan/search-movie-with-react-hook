import React, { useState } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchinputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form>
      <input type="text" value={searchValue} onChange={handleSearchinputChange} />
      <input type="submit" value="検索" onClick={callSearchFunction} />
      </form>
  )

}

export default Search;