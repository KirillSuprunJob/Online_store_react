import React from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card.jsx';
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import axios from "axios";

function App() {
  
  const [cartOpened, setCartOpened]  = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  // const [nameOrSearch, setNameOrSearch] = React.useState('All products');



  const onAddToCart = (obj) => {
      axios.post('https://659c316ad565feee2dac9ec0.mockapi.io/cart', obj)
    
      setCartItems(prev => [...prev, obj]);
      console.log('obj',cartItems);

  };


  React.useEffect(() => {   
      axios.get('https://659c316ad565feee2dac9ec0.mockapi.io/items').then((res) => {
        setItems(res.data);
        }
      );
    },
    []
  );


  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value.trimStart());

  }; 





// ?? ------------------------------------------------------------------
  return (
    <div className="wrapper">

      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null }
      
      <Header onClickCart={() => setCartOpened(true)}/>
    
      <hr/>

      <div className="content">
        <div className="content_top d-flex flex-row align-items-center justify-content-between flex-wrap"> 
            <h1> {searchValue ? `Searching by: "${searchValue}"` : `All products`} </h1>
            <div className="search-block d-flex"> 
              <img src="/img/search.svg" alt="Search"/>
              <input onInput={onChangeSearchInput} value={searchValue} placeholder="Search... "/>
              {searchValue ? <img className="clear-search" onClick={() => {setSearchValue('')}} width="32" height="32" src="/img/button_remove.svg" alt="clear-search"/> : null}
          </div>
        </div>
          {/* ----------------- */}

        <div className="products"> 

          {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, i) => (
              <Card 
                title={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                key={item.name}
                onClickFavorite={() => console.log(`Click on heart. Add to favorite`) }
                onPlus={(obj) => onAddToCart(obj) } 
              />
            )
          )};

        </div>

      </div>
    </div>
  );
};

export default App;
