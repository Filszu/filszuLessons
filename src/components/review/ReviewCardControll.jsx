import './review.css';

import React from 'react'

const ReviewCardControll = ({handleClick,text}) => {
  return (
    <div onClick={handleClick}  
        className="reviewCard__controller"
        >

        <div>{text}</div>
      
    </div>
  )
}

export default ReviewCardControll