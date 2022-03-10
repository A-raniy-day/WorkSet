// import Header from '../components/Header';
//import Main from '../components/Main';
import"../css/search.css"
import SearchBar from '../components/SearchBar';
import data from '../components/data'
import { useState } from 'react';

function Search() {
  const { products } = data;
  //const [cartItems, setCartItems] = useState([])
  const [Items] = useState(products.map((product) => ({ ...product})))
  return (
    <body class="search-body">
    <div className="Search">
      {/* <Header countCartItems={Items.length} headerText={"Search"} ></Header> */}
      <SearchBar></SearchBar>
    </div>
    </body>
  );
}

export default Search;