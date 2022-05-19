import { useCallback, useState } from 'react';
import { motion } from "framer-motion"

const MotionExample = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = useCallback(() => setIsVisible(!isVisible), [isVisible]);

    const opacity = isVisible ? 1 : 0;
    return (
        <div>
            <motion.div
                className='box'
                animate={{ opacity }}
                transition={{ 
                    ease: 'linear',
                    duration: 0.5 
                }}
            />
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default MotionExample
