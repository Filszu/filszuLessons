import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";

export const TypingText = ({title, textStyles}) => (
  <motion.p
    variants={textContainer}
  >
    {Array.from(title).map((letter,index)=>(
      <motion.span
        variants={textVariant2}
        key={index}
        style={{display:'block'}}
      >
        {letter===' '?'\u00A0': letter}
      </motion.span>
    )
    )}

  </motion.p>
);


export const TypingText2 = ({title, textStyles}) => (
    <motion.p
      variants={textContainer}
    >
      {Array.from(title).map((letter,index)=>(
        <motion.span
          variants={textVariant2}
          key={index}
        >
          {letter===' '?'\u00A0': letter}
        </motion.span>
      )
      )}
  
    </motion.p>
  );
