import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import './review.css';


const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};



const ReviewCard = ({reviews}) => {
  const [currReview, setCurrReview] = useState(0)
  const [direction, setDirection] = useState(0)

  console.log(reviews)


  const paginate = (newDirection) => {
    // setPage([page + newDirection, newDirection]);
    console.log(`direction:${newDirection}`)

    let newPage =currReview+newDirection;;

    console.log(`new page: ${newPage}`)

    if(newPage<0){
      newPage=reviews.length-1;
    }
    else if(newPage>=reviews.length){
      newPage=0;
    }
    // else{
      
    // }

    setCurrReview(newPage)
    setDirection(newDirection)

  };

  // const currReviewIndex = wrap(1, reviews.length+1, currReview);

  return (

    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.section className="reviewCard"
          drag="x"
          whileDrag={{ scale: 1.1 }}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1} //back to original pos
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}

          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(-1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(1);
            }
          }}

        >
          <h1> {reviews[currReview].userName}</h1>
          <h3>{reviews[currReview].reviewBody}</h3>
         
        </motion.section>
      </AnimatePresence>
    </>
  )
}

export default ReviewCard