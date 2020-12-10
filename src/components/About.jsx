import { useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import * as THREE from 'three'

const About = ({ }) => {
    const modelRef = useRef()
    const textRef = useRef()
    const vec = new THREE.Vector3()
    useFrame(() => {
        const text = textRef.current
        if (state.top > 50 && text && text.style.display === 'none') text.style.display = 'flex'
        if (state.top < 50 && text && text.style.display === 'flex') text.style.display = 'none'
        if (modelRef.current) {
            modelRef.current.rotation.setFromVector3(
                modelRef.current.rotation.toVector3()
                .lerp(vec.set(0.1,6.28*state.top/80 + 4.4,0),0.1)
            )
        }
    })

    const handleClick = e => {
        state.top = 160
    }

    return (
        <group position={[0, 0, -80]}>
            <mesh  receiveShadow >
                <planeBufferGeometry args={[999, 999]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
            <Html center position={[0, 1.5, 40]} scaleFactor={10} zIndexRange={[0,0]}>
                <div ref={textRef} style={{ display: 'flex', fontSize: 30, textAlign: 'center', width: '100vw', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        I love JavaScript, cooking, skateboaring, and music.
                    </div>
                    <br/>
                    <div>
                        My background in 3D math gives me an inclination for computational geometry.
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
            <group 
                ref={modelRef} 
                position={[0, -4.5, 40]}
                rotation={[0.1,4.4,0]}
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
        </group>
    )
}

export default About