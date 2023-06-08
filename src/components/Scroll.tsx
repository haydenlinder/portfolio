import React, { PointerEventHandler, TouchEventHandler } from 'react'
import state from '../state'
type Props = React.PropsWithChildren<{
    pages: number
}>
const Scroll = ({ pages = 1, children }: Props) => {
    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
        const py = e.touches.item(0)?.pageY
        if (!py) return
        state.touchY = py
    }
    const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
        const touchY = e.touches.item(0)?.pageY
        if (!touchY) return 
        const event = { nativeEvent: { deltaY: (state.touchY - touchY) } }
        handleWheel(event)
        state.touchY = touchY
    }
    let friction = 1
    const handleWheel = (e: { nativeEvent: { deltaY: number }}) => {
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
    const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
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
    const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
        state.isPointerDown = false
    }
    const handlePointerLeave: PointerEventHandler<HTMLDivElement> = (e) => {
        if (state.isPointerDown && e.relatedTarget === window) state.isPointerDown = false
    }
    //

    return (
        <div
            id='scroll-area'
            style={{
                height: '100vh',
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