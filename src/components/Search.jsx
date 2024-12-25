import React, { useState, useEffect } from "react";
import { CiSearch } from 'react-icons/ci';


function Search () {

    const [datas, setDatas] = useState ([]);

    useEffect(() => {

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));
    }, []);


    return (
        <>
        <div className=''>
            <input type='text' name='searchBar' id="searchBar" placeholder="Rechercher"></input>
        </div>


        <div className="search__results">

            <div className="search__result"></div>
            <button 
              type="submit"
              className="px-2 text-[var(--color-primary)]"
            >
              <CiSearch style={{ color: 'var(--color-primary)' }} size={20} />
            </button>
        </div>
        </>
    )
}

export default Search;