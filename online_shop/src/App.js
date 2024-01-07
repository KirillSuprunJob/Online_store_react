import React from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card.jsx';
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

function App() {

  const [cartOpened, setCartOpened]  = React.useState(false);
  


  const arr = [
    {name:  'Your gateway to limitless possibilities. Experience the future of storage', price: 6999, imageUrl: '/img/products/1.jpg'}, 
    {name:  'Explore limitless storage possibilities now', price: 8311, imageUrl: '/img/products/2.jpg'},
    {name:  'Unleash boundless storage innovation today', price: 12700, imageUrl: '/img/products/3.jpg'},
    {name:  'Embark on limitless storage solutions', price: 3500, imageUrl: '/img/products/4.jpg'},
  ]

  console.log(arr)

// ?? ------------------------------------------------------------------
  return (
    <div className="wrapper">

      {cartOpened ? <Drawer onClose={() => setCartOpened(false)}/> : null }
      
      <Header onClickCart={() => setCartOpened(true)}/>
    
      <hr/>

      <div className="content">
        <div className="content_top d-flex flex-row align-items-center justify-content-between"> 
            <h1 > All products </h1>
            <div className="search-block d-flex"> 
              <img src="/img/search.svg" alt="Search"/>
              <input placeholder="Search... "
                                              />
          </div>
        </div>
          {/* ----------------- */}

        <div className="products d-flex flex-wrap justify-content-between"> 

          {arr.map((item, i) => (
              <Card 
                title={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                onClickFavorite={() => console.log(`Click on heart. Add to favorite`) }
                onClickPlus={() => console.log(`Click on Plus Button. Add to Cart`) } 
              />
            )
          )}

          {arr.reverse().map((item, i) => (
              <Card 
                title={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                onClickFavorite={() => console.log(`Click on heart. Add to favorite`) }
                onClickPlus={() => console.log(`Click on Plus Button. Add to Cart`) } 
              />
            )
          )}

        </div>

      </div>
    </div>
  );
}

export default App;
