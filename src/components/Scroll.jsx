import state from '../state'

const Scroll = ({ pages = 1, children }) => {
    let friction = 16
    const handleTouchStart = e => {
        state.touchY = e.touches.item(0).pageY
    }
    const handleTouchMove = e => {
        const touchY = e.touches.item(0).pageY
        const event = { nativeEvent: { deltaY: 16 * (state.touchY - touchY) } }
        handleWheel(event)
        state.touchY = touchY
    }
    const handleWheel = e => {
        if (
            state.top > 75 && state.top < 83
        ) friction = 15
        else friction = 0.4
        let delta = 1/friction
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