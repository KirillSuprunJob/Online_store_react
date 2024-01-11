import React from 'react';


export default function Drawer({onClose, items = [] }) {

    console.log(`items Drawer`, items)

  return (
    <div className="overlay">
            <div className="drawer">   
                <h2 className="d-flex justify-content-between align-items-center"> Shopping basket               
                    <img onClick={onClose} className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/> 
                </h2>

                <div className="cartItemsAll"> 
                    {items.map((obj) => 
                        <div className="cartItem d-flex flex-row align-items-center justify-content-center">   

                        <div  className="cartItemImg" style={{backgroundImage: `url(${obj.imageUrl})`}}>         </div>

                        <div className="d-flex flex-column "> 
                        <div className="beforeRemove"> {obj.title} </div>
                        <b> {obj.price} </b>
                        </div>
                        
                        <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
                    </div>

                        
                      )
                    }

                    {/* --------------------------------------- */}
                    {/* <div className="cartItem d-flex flex-row align-items-center justify-content-center">   

                        <div  className="cartItemImg" style={{backgroundImage: 'url(/img/products/2.jpg)'}}>         </div>

                        <div className="d-flex flex-column "> 
                        <div className="beforeRemove"> Your gateway to limitless possibilities </div>
                        <b> 6 999 grn. </b>
                        </div>
                        
                        <img className="removeBtn" width="32" height="32" src="/img/button_remove.svg" alt="remove"/>
                    </div> */}
                    {/* --------------------------------------- */}
                
                
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
