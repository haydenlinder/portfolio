import state from '../state';

const ScrollArea = ({ pages = 1, children }) => {
    const handleScroll = (e) => {
        state.top = e.target.scrollTop
    }

    return(
        <div style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'auto',
            pointerEvents: 'none'
        }}
            onScroll={handleScroll}
        >
            <div
                style={{
                    height: `${pages * 100}vh`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ScrollArea;