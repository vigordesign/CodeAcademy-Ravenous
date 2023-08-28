import React from 'react';
import styles from "./Business.css";

const Business = ({business}) => {
    return (
      <div className='Business'>
        <div className="imageContainer">
          <img src={business.imageSrc} alt=""/>
        </div>
        <h2>{business.name}</h2>
        <div className="BusinessInfo">
          <div className="BusinessAddress">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className="BusinessReviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }

export default Business;