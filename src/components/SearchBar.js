import React from "react";
import Input from "../assets/styles/Input";
import iconSearch from "../assets/images/search_icon.svg"
import SearchIcon from "../assets/styles/SearchIcon";

const SearchBar = () => {
    return (
        <>
            <Input type="text" placeholder="Search..."></Input>
            <SearchIcon src={iconSearch} alt="Search icon" />
        </>
    );
}

export default SearchBar