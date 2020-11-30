import state from '../state';

const ScrollArea = ({ pages = 1, children }) => {
    const handleScroll = (e) => {
        // e.preventDefault();
        console.log(e.nativeEvent)
        state.top += e.nativeEvent.wheelDeltaY
    }

    return(
        <div style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'auto'
        }}
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