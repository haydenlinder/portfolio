import state from '../state'

const Scroll = ({ pages = 1, children }) => {
    const handleTouchStart = e => {
        state.touchY = e.touches.item(0).pageY
    }
    const handleTouchMove = e => {
        const touchY = e.touches.item(0).pageY
        const event = { nativeEvent: { deltaY: (state.touchY - touchY) } }
        handleWheel(event)
        state.touchY = touchY
    }
    let friction = 1
    const handleWheel = e => {
        if (state.top > 70 && state.top < 83) friction = 20
        else if (state.top > 75 && state.top < 80) friction = 30
        else friction = 1
        let delta = Math.min(Math.abs(e.nativeEvent.deltaY), 5)
        delta /= friction
        if (e.nativeEvent.deltaY < 0) delta *= -1
        if (delta < 0)
            state.top = Math.max(state.top + delta, 0)
        else
            state.top = Math.min(state.top + delta, pages*40)
    }
    return (
        <div
            style={{
                height: '101vh',
                width: '100vw',
            }}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            {children}
        </div>
    )
}

export default Scroll