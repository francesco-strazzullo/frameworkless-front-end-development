const animationTiming = {
    duration: 500,
    ease: 'linear',
    fill: 'forwards'
}

const showKeyframes = [
    { opacity: 0 },
    { opacity: 1 }
]

const hideKeyframes = [
    ...showKeyframes
].reverse()

export const show = (element) => {
    element.animate(showKeyframes, animationTiming)
}

export const hide = (element) => {
    element.animate(hideKeyframes, animationTiming)
}