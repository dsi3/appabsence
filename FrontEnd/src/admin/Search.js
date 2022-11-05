import React from 'react';
import ReactDOM from 'react-dom'
function SearchBar(props) {
    const [searchVal, setSearchVal] = React.useState('');
    
    const handleInput = (e) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }
    
    const filteredProducts = props.products.filter((product) => {
      return product.includes(searchVal);
    });
    
    return (
      <div className='container'>
        <div className='input-wrap'>
          <i className="fas fa-search"></i>
          <label 
            for="product-search" 
            id="input-label"
          >
            etudiant search
          </label>
          <input 
            onChange={handleInput}
            value={searchVal}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search"
          />
          <i 
            onClick={handleClearBtn}
            className="fas fa-times"
          ></i>
        </div>
        <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'>{product}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  function App() {
    let products = [
      '12717043','12475465'
    ];
    
    return (
      <div>
        <SearchBar products={products} />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
export default SearchBar;