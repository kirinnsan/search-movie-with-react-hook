import React, { useState } from 'react'
import { Button } from '@material-ui/core';

import useStyles from './Style';

const Search = (props) => {
  const classes = useStyles();
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
      <Button variant="contained" size="small" color="primary" onClick={callSearchFunction} className={classes.margin}>
        検索
      </Button>
    </form>
  )

}

export default Search;