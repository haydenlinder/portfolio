import { useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import * as THREE from 'three'
import ProjectItem from './ProjectItem'

const Projects = ({ }) => {
    const textRef = useRef()
    const panRef = useRef()
    const vec1 = new THREE.Vector3()
    const vec2 = new THREE.Vector3()
    useFrame(() => {
        vec1.lerp(vec2.set(0,state.pan,0), 0.1)
        panRef.current.rotation.setFromVector3(vec1)
        const text = textRef.current
        if (state.top > 130 && text && text.style.display === 'none') text.style.display = 'flex'
        if (state.top < 130 && text && text.style.display === 'flex') text.style.display = 'none'
    })

    const handleClick = e => {
        state.top = 160
    }

    const handlePan = num => {
        state.pan += num*Math.PI/2
    }

    return (
        <group position={[0, 0, -160]} >
            <mesh receiveShadow >
                <planeBufferGeometry args={[999, 999]} />
                <meshPhysicalMaterial/>
            </mesh>
            <group position={[0,1,10]} ref={panRef}>
                <ProjectItem
                    title='Particles'
                    description='An orbital physics simulator'
                    link='https://haydenlinder.github.io/particles'
                    path='/particles.png'
                    position={[0, 0, 30]}
                />
                <ProjectItem
                    title='Abocabo'
                    description='Find cheap produce near you'
                    link='https://www.abocabo.com'
                    path='/abocabo.png'
                    position={[30, 0, 0]}
                />
                <ProjectItem
                    title='Tickets'
                    description='A project management app featuring complex queries'
                    link='https://ticats.herokuapp.com/'
                    path='/tickets.png'
                    position={[-30, 0, 0]}
                />
                <ProjectItem
                    title='Tesla Paint Picker'
                    description='The end result from an in-depth tutorial on Three.js and react-three-fiber.'
                    link='https://haydenlinder.github.io/react-three-fiber/'
                    path='/fiber.png'
                    position={[0, 0, -30]}
                />
            </group>
            <Html center position={[0, -5, 40]} scaleFactor={10}>
                <div ref={textRef} style={{fontSize: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 100, width: 300}}>
                        <div onClick={e => handlePan(1)} style={{cursor: 'pointer'}}>⇦</div>
                        <div onClick={e => handlePan(-1)} style={{cursor: 'pointer'}}>⇨</div>
                    </div>
                    <div
                        onClick={handleClick}
                        style={{ padding: 10, paddingRight: 30, paddingLeft: 30, border: '1px solid black', fontWeight: 'bold', borderRadius: 10, background: 'rgb(255,255,255, 0.4)', minWidth: 300, cursor: 'pointer' }}
                    >
                        See my resume
                    </div>
                </div>
            </Html>
        </group>
    )
}

export default Projects