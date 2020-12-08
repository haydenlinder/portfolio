import state from '../state'
import { Html } from '@react-three/drei'
import { Flex } from '@react-three/flex';
import { useThree, useFrame } from 'react-three-fiber'
import { useAspect } from '@react-three/drei'
import { useRef } from 'react'

const Header = props => {
    const menuRef = useRef()
    const handleClick = e => {
        state.top = 0;
    }
    useFrame(() => {
        const menu = menuRef.current
        if (menu && state.top === 0) menu.style.display = 'none'
        if (menu && state.top !== 0) menu.style.display = 'block'
    })
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
    return (
        <Html center position={[0,vpHeight/2-3,0]}>
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
                    // position: 'absolute',
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
                        ref={menuRef}
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
        </Html>
    )
}

export default Header