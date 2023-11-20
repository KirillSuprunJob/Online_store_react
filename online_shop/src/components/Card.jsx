import React from "react";

function Card() {


    return (
        <div className="card">
            <div className="favorite"> 
              <img width="40" height="40" src="/img/heart_unliked.svg" alt="unliked"  />
            </div>
            <img width="133" height="112" src="/img/products/1.jpg" alt="Product" />
            
            <h5 className="py-3"> Your gateway to limitless possibilities. Experience the future of storage  </h5>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">

                <span> Price:  </span>
                <b> 6 999 grn. </b>

              </div>

              <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus"/> </button>

            </div>
          
          </div>
    )

}

export default Card;