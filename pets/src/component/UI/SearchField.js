import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({setSearch}) => {
    const [inputValue, setInputValue] = useState("");

  const handlesearch = (e) => {
    setSearch(e.target.value)
    setInputValue(e.target.value);

}


return (
    <div className='mt-3'>
        <div className='position-relative'>
            <TextField style={{ width: "100%" }} id="outlined-basic" onChange={handlesearch} label="Search Keyword" variant="outlined"value={inputValue} />
           
        </div>
    </div>
)
}


export default SearchField;
