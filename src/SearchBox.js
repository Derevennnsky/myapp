import React from "react";
import "./SearchBox.css"
const SearchBox=({searchChange, searchfield})=>{
    return(
        <div>
            <input onChange={searchChange} type="search" placeholder="Введите имя." className="Search"/>

        </div>
    )
}
export default SearchBox