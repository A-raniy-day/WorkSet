import React from 'react';
import SearchResults from './SearchResults';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const  Api = require("../Api/api")

export default function SearchBar() {
    let { query } = useParams();
    let { filter } = useParams();
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const onChangeHandler = (text) => {
        setText(text)
    }
    const handleSubmit = (event) => {
        async function SearchResults() {
            axios.get(`http://localhost:3001/search?q=${text}`).then((response) => {
                console.log('test');
                let book = [];
                book.push(response.data);
                console.log(book[0])
                setResults(book[0])
            });
        }
        event.preventDefault();
        SearchResults()
        //alert(`The name you entered was: ${text}`)
    }
    useEffect(()=>{
        async function SearchResults() {
            axios.get(`http://localhost:3001/search?q=${query}`).then((response) => {
                console.log('test');
                let book = [];
                book.push(response.data);
                console.log(book[0])
                setResults(book[0])
            });
        }
        async function SearchResultsFilter() {
            axios.get(`http://localhost:3001/search/filter?q=${filter}`).then((response) => {
                console.log('test');
                let book = [];
                book.push(response.data);
                console.log(book[0])
                setResults(book[0])
            });
        }
        //console.log(filter)
        if(query!==undefined)
        {
            setText(query)
            SearchResults()
        }
        else if(filter!==undefined)
        {
            SearchResultsFilter()
        }
    },[])

    return (
        <div className="text-middle" >
            
            <div class="titlediv"><p class="titlep">搜 索</p></div>
            <form onSubmit={handleSubmit}>
                <input class="inputsearch" type="text" value={text} onChange={e => onChangeHandler(e.target.value)} />
                <button class="search-button" type="submit">search</button>
            </form>
            <div className="all-rows">
                <SearchResults results={results} />
            </div>
        </div>
    )
}
// export default function SearchBar(props) {
//     return (
//         <div className="text-middle" >
//             <label>Search</label>
//             <input type="text" className="searchBar"/>
//             <button type="submit">Submit</button>
//         </div>
//     )
// }
