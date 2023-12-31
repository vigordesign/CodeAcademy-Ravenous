import React from "react";
import styles from "./SearchBar.css";

const sortOptions = {
    "Best Match":"best_match",
    "Highest Rated":"rating",
    "Most Reviewed":"review_count",
};

const SearchBar = () => {
    const renderSortOptions = () => {
        return Object.keys(sortOptions).map((sortOption) => {
            let sortByOptionValue = sortOptions[sortOption];
            return <li key={sortByOptionValue}>{sortOption}</li>;
        });
    };
    
    return (
        <div className="searchBar">
            <div className='searchbarSortOptions'>
                <ul>{renderSortOptions()}</ul> 
            </div>
            <div className='searchFields'>
                <input placeholder="Search Businesses"></input>
                <input placeholder="Location"></input>
            </div>
            <div className='searchBtn'>
                <button type="button">Honk!</button>
            </div>
        </div>
    )
};

export default SearchBar;