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
        <Html center position={[0,vpHeight/2-4,0]}>
            <header
                style={{
                    zIndex: 999,
                    width: '100vw',
                    margin: 'auto',
                    padding: 10,
                    paddingTop: 20,
                    paddingBottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '250px',
                }}
                >
                <nav 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '80%',
                        maxWidth: '600px',
                    }}
                    >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: 'rgb(255,255,255,0.5)',
                            padding: 10,

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
                    <div
                        ref={menuRef}
                        style={{
                            padding: '10px',
                            border: '1px solid black',
                            borderRadius: 10,
                            cursor: 'pointer',
                            right: '20px',
                            background: 'white',
                            height: 'fit-content'
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