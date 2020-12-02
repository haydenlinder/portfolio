import { Suspense, useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import state from '../state'
import * as THREE from 'three'

const About = ({ }) => {
    const modelRef = useRef()
    const vec = new THREE.Vector3()
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.setFromVector3(
                modelRef.current.rotation.toVector3()
                .lerp(vec.set(0.1,6.28*state.top/80 + 4.4,0),0.1)
            )
        }
    })
    return (
        <>
            <mesh position={[0, 0, -80]} receiveShadow >
                <planeBufferGeometry args={[999, 999]} />
                <meshPhysicalMaterial color='aquamarine' />
            </mesh>
            <Suspense fallback={null}>
                <group 
                    ref={modelRef} 
                    position={[0, -4, -40]}
                    rotation={[0.1,4.4,0]}
                >
                    <Model
                        path='/lowpoly_earth/scene.gltf'
                        scale={new Array(3).fill(0.04)}
                    />
                </group>
            </Suspense>
        </>
    )
}

export default About