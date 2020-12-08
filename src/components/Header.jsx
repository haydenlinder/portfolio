import state from '../state'

const Header = props => {
    const handleClick = e => {
        state.top = 0;
        console.log('click')
    }

    return (
        <header
            style={{
                zIndex: 1,
                background: 'white',
                height: 0,
                width: '80vw',
                margin: 'auto',
                left: 0,
                right: 0,
                top: 0,
                paddingLeft: '10px',
                paddingRight: '100px',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '600px',
                minWidth: '250px',
            }}
            >
            <nav 
                style={{
                    position:'absolute',
                    top: '20px',
                }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>
                            Hayden Linder
                        </div>
                        <div>Web Developer</div>
                    </div>
            </nav>
            <nav
            >
                <div
                    id='menu-button'
                    style={{
                        padding: '10px',
                        border: '1px solid black',
                        borderRadius: 10,
                        cursor: 'pointer',
                        right: '20px',
                        position: 'absolute',
                        top: '20px',
                    }}
                    onClick={handleClick}
                >
                    Menu
                </div>
            </nav>
        </header>
    )
}

export default Header