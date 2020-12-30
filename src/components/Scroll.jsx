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
        if (
            state.top > state.vpHeight/2 
            && (state.top%state.vpHeight > state.vpHeight - 10 || state.top%state.vpHeight < 5)
        ) friction = 5
        else friction = 1
        let delta = Math.min(Math.abs(e.nativeEvent.deltaY), 5)
        delta /= friction
        if (e.nativeEvent.deltaY < 0) delta *= -1
        if (delta < 0)
            state.top = Math.max(state.top + delta, 0)
        else
            state.top = Math.min(state.top + delta, pages*state.vpHeight)
    }

    // for scrollbar
    const handlePointerMove = e => {
        if (state.isPointerDown) {
            const dy = (state.touchY - e.pageY)/(state.pages+1)
            if (dy > 0) {
                state.top = Math.max(state.top - dy, 0)
            } else {
                state.top = Math.min(state.top - dy, pages * state.vpHeight)
            }
            state.touchY = e.pageY
        }
    }
    const handlePointerUp = e => {
        state.isPointerDown = false
    }
    const handlePointerLeave = e => {
        if (state.isPointerDown && e.relatedTarget === window) state.isPointerDown = false
    }
    //

    return (
        <div
            id='scroll-area'
            style={{
                height: '101vh',
                width: '100vw',
            }}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            {children}
        </div>
    )
}

export default Scroll