import state from '../state';

const ScrollArea = ({ pages = 1 }) => {
    const handleScroll = (e) => {
        state.top = e.target.scrollTop/8
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
            onScroll={handleScroll}
        >
            <div
                style={{
                    height: `${pages * 100}vh`,
                }}
            >
            </div>
        </div>
    )
}

export default ScrollArea;