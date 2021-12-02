import React, { useState } from 'react'
import { useSpring, animated } from "react-spring"
function AnimButton({ text, typeButton, typeButtonTarget }) {

    const [open, toggle] = useState(false)
    const { transform } = useSpring({
        transform: `rotate(${open ? 90 : 0}deg)`,
        config: { duration: 150 }
    })
    const x = useSpring({
        transform: `rotate(${open ? 180 : 0}deg)`,
        config: { duration: 150 }
    })

    return (
        <div className="d-grid gap-2">
            <button
                className="btn text-start d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={typeButtonTarget}
                aria-expanded="false"
                aria-controls={typeButton}
                onClick={() => toggle(!open)}>
                <div>{text}</div>
                <div className=" c-s-b btn-collapse">
                    <animated.span style={x} >
                    </animated.span>
                    <animated.span style={
                        { transform: transform.interpolate(t => `${t} rotate(0deg)`) }
                    }>
                    </animated.span>
                </div>
            </button>
        </div>
    )
}
export default AnimButton
