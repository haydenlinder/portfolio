import state from '../state'

const Scroll = ({ pages = 1, children }) => {
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
        const delta = e.nativeEvent.deltaY / 16
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