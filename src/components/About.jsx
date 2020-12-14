import { useRef } from 'react'
import Model from './Model'
import { useFrame, useThree } from 'react-three-fiber'
import { Html, useAspect } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import * as THREE from 'three'
import { Box } from '@react-three/flex'

const About = ({ }) => {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
    const modelRef = useRef()
    const vec = new THREE.Vector3()
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.setFromVector3(
                modelRef.current.rotation.toVector3()
                .lerp(vec.set(0.1,6.28*state.top/vpHeight + 4.4,0),0.1)
            )
        }
    })

    const handleClick = e => {
        state.top = vpHeight*2
    }

    return (
        <Box 
            justify='center'
            align='center'
            height='100%'
        >
            <Box 
                centerAnchor
                height='50%'
            >
                <Html center zIndexRange={[0,0]}>
                    <div style={{ display: 'flex', textAlign: 'center', width: '80vw', flexDirection: 'column', alignItems: 'center' }}>
                        <div>
                            I love JavaScript, cooking, skateboarding, and music.
                        </div>
                        <br/>
                        <div>
                            My background in 3D math gives me an affinity for computational geometry.
                        </div>
                        <br/>
                        <div 
                            onClick={handleClick}
                            style={{padding: 10, paddingRight: 30, paddingLeft: 30, border: '1px solid black', fontWeight: 'bold', borderRadius: 10, background: 'rgb(255,255,255, 0.4)', width: 'fit-content', cursor: 'pointer'}}
                        >
                            See my projects
                        </div>
                    </div>
                </Html>
            </Box>
            <Box 
                centerAnchor
                height='30%'    
            >
                <group 
                    ref={modelRef} 
                    position={[0, 0, 0]}
                    rotation={[0.1,4.4,0]}
                    scale={new Array(3).fill(5)}
                >
                    <group position={[3, 2, -1]} rotation={[0, 1.9, 0]}>
                        <mesh>
                            <planeBufferGeometry args={[3.5,0.6]}/>
                            <meshBasicMaterial color='black' opacity={0.3} transparent/>
                        </mesh>
                        <Text color='white' size={0.2}  thickness={0.2}>
                            San Francisco
                        </Text>
                    </group>
                    <Model
                        path='/lowpoly_earth/scene.gltf'
                        scale={new Array(3).fill(0.03)}
                    />
                    <group rotation={[-0.5,1,-1.5]} position={[2.5,1.2,-0.6]}>
                        <Model
                            path='/push_pin/scene.gltf'
                            scale={new Array(3).fill(0.001)}
                        />
                    </group>
                </group>
            </Box>
        </Box>
    )
}

export default About