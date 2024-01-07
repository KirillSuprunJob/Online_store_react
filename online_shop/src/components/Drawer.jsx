import React, { Component } from 'react'

export default class Drawer extends Component {
  render() {
    return (
        <div className="overlay">
            <div className="drawer">   
                <h2 className="d-flex justify-content-between align-items-center"> Shopping basket               
                    <img onClick={this.props.onClose} className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/> 
                </h2>

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
    )
  }
}
