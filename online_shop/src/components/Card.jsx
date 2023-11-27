import React from "react";

function Card(props) {


    return (
        <div className="card">
            <div className="favorite"> 
              <img width="40" height="40" src="/img/heart_unliked.svg" alt="unliked"  />
            </div>
            <img width="133" height="112" src={props.imageUrl} alt="Product" />
            
            <h5 className="py-3"> {props.title}  </h5>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">

                <span> Price:  </span>
                <b> {props.price} grn. </b>

              </div>

              <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus"/> </button>

            </div>
          
          </div>
    )

}

export default Card;