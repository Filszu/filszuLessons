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
  const [currReview, setCurrReview] = useState(1)


  const paginate = (newDirection) => {
    // setPage([page + newDirection, newDirection]);
    console.log(newDirection)
    setCurrReview(currReview+newDirection)

  };

  return (

    <>
      <AnimatePresence>
        <motion.section className="reviewCard"
          drag="x"
          whileDrag={{ scale: 1.1 }}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1} //back to original pos
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}

          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}

        >
          {reviews[currReview].userName}
        </motion.section>
      </AnimatePresence>
    </>
  )
}

export default ReviewCard