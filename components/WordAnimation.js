import { motion } from 'framer-motion';

const WordAnimation = ({ text, delayPerWord = 0.1 }) => {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * delayPerWord, duration: delayPerWord }}
          style={{ display: 'inline-block', marginRight: '8px' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default WordAnimation;
