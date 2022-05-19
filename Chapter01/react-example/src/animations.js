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

const isElementVisible = (element) => {
    const style = getComputedStyle(element)
    const {
        opacity
    } = style

    return parseInt(opacity) === 1
}

export const showIfNeeded = (element) => {
    if (isElementVisible(element)) {
        return
    }

    element.animate(showKeyframes, animationTiming)
}

export const hideIfNeeded = (element) => {
    if (!isElementVisible(element)) {
        return
    }

    element.animate(hideKeyframes, animationTiming)
}