import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

export default function FadeUpAnimation({children, styling}) {
    const squareVariants = {
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 }, y: 0 },
        hidden: { opacity: 0.2, y: 80 }
      };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {

    if (inView) {
        controls.start("visible");
    }

    }, [controls, inView]);

  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    className={styling}
    >
    {children}
    </motion.div>
  )
}
