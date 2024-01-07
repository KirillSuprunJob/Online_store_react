import React from "react";
import styles from './Card.module.scss';

console.log(styles)

function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }




  return (
      <div className={styles.card}>
          <div onClick={props.onClickFavorite} className={styles.favorite}> 
            <img width="40" height="40" src="/img/heart_unliked.svg" alt="unliked"  />
          </div>
          <img width="133" height="112" src={props.imageUrl} alt="Product" />
            
           <h5 className="py-3"> {props.title}  </h5>

          <div className="d-flex justify-content-between align-items-center"> 
            <div className="d-flex flex-column">

              <span> Price:  </span>
              <b> {props.price} grn. </b>

            </div>

              <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/button_checked.svg" : "/img/button_plus.svg" } alt="Plus"/> 
          </div>
          
      </div>
  )

}

export default Card;