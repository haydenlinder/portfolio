import { useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import * as THREE from 'three'
import ProjectItem from './ProjectItem'

const Projects = ({ }) => {
    const modelRef = useRef()
    const textRef = useRef()
    const vec = new THREE.Vector3()
    useFrame(() => {
        const text = textRef.current
        if (state.top > 130 && text && text.style.display === 'none') text.style.display = 'flex'
        if (state.top < 130 && text && text.style.display === 'flex') text.style.display = 'none'
        if (modelRef.current) {
            modelRef.current.rotation.setFromVector3(
                modelRef.current.rotation.toVector3()
                    .lerp(vec.set(0.1, 6.28 * state.top / 80 + 4.4, 0), 0.1)
            )
        }
    })

    const handleClick = e => {
        state.top = 160
    }

    return (
        <group position={[0, 0, -160]}>
            <mesh receiveShadow >
                <planeBufferGeometry args={[999, 999]} />
                <meshPhysicalMaterial color='yellow' />
            </mesh>
            <Html center scaleFactor={10} zIndexRange={[0, 0]} position={[0,0.001,40]}>
                <div ref={textRef} style={{ display: 'flex', fontSize: 30, textAlign: 'center', width: '100vw', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }} >
                        <ProjectItem 
                            title='Particles'
                            description='An orbital physics simulator'
                            link='https://haydenlinder.github.io/particles'
                            path='/particles.png'
                        />
                        <ProjectItem 
                            title='Abocabo'
                            description='Find cheap produce near you'
                            link='https://www.abocabo.com'
                            path='/abocabo.png'
                        />
                    </div>
                    <div
                        onClick={handleClick}
                        style={{ padding: 10, paddingRight: 30, paddingLeft: 30, border: '1px solid black', fontWeight: 'bold', borderRadius: 10, background: 'rgb(255,255,255, 0.4)', width: 'fit-content', cursor: 'pointer' }}
                    >
                        See my resume
                    </div>
                </div>
            </Html>
        </group>
    )
}

export default Projects