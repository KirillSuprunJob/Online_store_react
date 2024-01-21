import React from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card.jsx';
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

function App() {
  
  const [cartOpened, setCartOpened]  = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [items, setItems] = React.useState([]);
  // const [nameOrSearch, setNameOrSearch] = React.useState('All products');



  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
    console.log('obj',cartItems);
  };


  React.useEffect(() => {
      fetch('https://659c316ad565feee2dac9ec0.mockapi.io/items').then((res) => { 
          return res.json()
        }
      ).then(json => setItems(json))
    }, []
  );

// !! ????????????????????????????????????????????????????????????????????????
  const onChangeSearchInput = (e) => {
    // console.log(e.target.value);
    // console.log('e.target.value.trim().length', e.target.value.trim().length)
    setSearchValue(e.target.value.trim());
    // e.target.value.trim().length > 0 ? setSearchValue(e.target.value.trim()) : setSearchValue('');

    // searchValue.length ? setNameOrSearch(`Searching by ${searchValue}`) : setNameOrSearch(`All products`)
  }; 
// !! ????????????????????????????????????????????????????????????????????????
  
  

  // const [] = React.useEffect()


 
  // const arr = [
  //   {name:  'Your gateway to limitless possibilities', price: 6999, imageUrl: '/img/products/1.jpg'}, 
  //   {name:  'Explore limitless storage possibilities now', price: 8311, imageUrl: '/img/products/2.jpg'},
  //   {name:  'Unleash boundless storage innovation today', price: 12700, imageUrl: '/img/products/3.jpg'},
  //   {name:  'Embark on limitless storage solutions', price: 3500, imageUrl: '/img/products/4.jpg'},
  // ]

// ?? ------------------------------------------------------------------
  return (
    <div className="wrapper">

      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null }
      
      <Header onClickCart={() => setCartOpened(true)}/>
    
      <hr/>

      <div className="content">
        <div className="content_top d-flex flex-row align-items-center justify-content-between"> 
            <h1> {searchValue ? `Searching by: "${searchValue}"` : `All products`} </h1>
            <div className="search-block d-flex"> 
              <img src="/img/search.svg" alt="Search"/>
              <input onInput={onChangeSearchInput} placeholder="Search... "/>
              <img className="clear-search" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
          </div>
        </div>
          {/* ----------------- */}

        <div className="products d-flex flex-wrap justify-content-between"> 

          {items.map((item, i) => (
              <Card 
                title={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                key={i}
                onClickFavorite={() => console.log(`Click on heart. Add to favorite`) }
                onPlus={(obj) => onAddToCart(obj) } 
              />
            )
          )}

          {/* {items.reverse().map((item, i) => (
              <Card 
                title={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                onClickFavorite={() => console.log(`Click on heart. Add to favorite`) }
                onPlus={() => onAddToCart } 
              />
            )
          )} */}

        </div>

      </div>
    </div>
  );
}

export default App;
