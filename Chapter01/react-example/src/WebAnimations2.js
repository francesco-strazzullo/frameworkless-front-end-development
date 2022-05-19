import { useCallback, useState, useEffect, useRef } from 'react'
import { show, hide } from './animations'

const WAExample = () => {
    //using ref to skip a re-render
    const didMountRef = useRef(false);
    const box = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const toggle = useCallback(() => { 
        setIsVisible(!isVisible) 
    }, [isVisible])

    
    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
            return
        }

        const {
            current
        } = box

        if(isVisible){
            show(current)
        } else{
            hide(current)
        }

    }, [box, isVisible])


    return (
        <div>
            <div
                ref={box}
                className='box'
            />
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default WAExample
