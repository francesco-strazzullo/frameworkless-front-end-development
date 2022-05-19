import { useCallback, useState, useRef, useEffect } from 'react'
import { hideIfNeeded, showIfNeeded } from './animations'


const WAExample = () => {
    const box = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const toggle = useCallback(() => { setIsVisible(!isVisible) }, [isVisible])

    useEffect(() => {
        if(isVisible){
            showIfNeeded(box.current)
        } else{
            hideIfNeeded(box.current)
        }
    }, [isVisible])


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
