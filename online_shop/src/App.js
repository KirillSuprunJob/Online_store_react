import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card.jsx';
import Header from "./components/Header.jsx";

function App() {





// ?? ------------------------------------------------------------------
  return (
    <div className="wrapper">
      <div className="overlay" style={{display: 'none'}}>
        <div className="drawer">   
          <h2 className="d-flex justify-content-between align-items-center"> Shopping basket               <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/> </h2>

          <div className="cartItemsAll"> 
            <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/2.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
            {/* --------------------------------------- */}
            <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
             {/* --------------------------------------- */}
             <div className="cartItem d-flex flex-row align-items-center justify-content-center">   
              {/* <img className="products_photo" width="70" height="70" src="/img/products/2.jpg" alt="product"/> */}

              <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/4.jpg)'}}>         </div>

              <div className="d-flex flex-column "> 
                <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                <b> 6 999 grn. </b>
              </div>
              
              <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
            </div>
            
          </div>

          <div className="cartTotalBlock"> 
            <ul className="">
              <li className=""> <span> Total:      </span>  <div>      </div>  <b> 13 998 grn. </b>  </li>

              <li className=""> <span>  Tax 5%:     </span>  <div>      </div>  <b> 699,9 grn.    </b>  </li>
            </ul>
            {/* -------------- */}
            <button className="greenButton"> Buy now <img src="/img/arrow_right.svg" alt="arrow right" />  </button>

          </div>

        </div>
      
      </div>

      <Header/> 
    
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
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 

        </div>

      </div>
    </div>
  );
}

export default App;
