import { useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import * as THREE from 'three'
import ProjectItem from './ProjectItem'
import { Box } from '@react-three/flex'

const Projects = ({ }) => {
    const panRef = useRef()
    const vec1 = new THREE.Vector3()
    const vec2 = new THREE.Vector3()
    useFrame(() => {
        vec1.lerp(vec2.set(0,state.pan,0), 0.1)
        panRef.current.rotation.setFromVector3(vec1)
    })

    const handleClick = e => {
        state.top = state.vpHeight*3
    }

    const handlePan = num => {
        state.pan += num*Math.PI/2
    }

    return (
        <Box 
            align='center'
            justify='center'
            height='100%'
        >
            <Box 
                centerAnchor
                height='50%'
            >
                <group position={[0,0,0]} ref={panRef} scale={[30,30,30]}>
                    <mesh position={[0,-0.4,0]}>
                        <cylinderBufferGeometry args={[1,1,0.1,100]}/>
                        <meshPhysicalMaterial />
                    </mesh>
                    <ProjectItem
                        title='Particles'
                        description='An orbital physics simulator'
                        link='https://haydenlinder.github.io/particles'
                        path='/particles.png'
                        position={[0, 0, 1]}
                    />
                    <ProjectItem
                        title='Abocabo'
                        description='Find cheap produce near you'
                        link='https://www.abocabo.com'
                        path='/abocabo.png'
                        position={[1, 0, 0]}
                    />
                    <ProjectItem
                        title='Tickets'
                        description='A project management app featuring complex queries'
                        link='https://ticats.herokuapp.com/'
                        path='/tickets.png'
                        position={[-1, 0, 0]}
                    />
                    <ProjectItem
                        title='Tesla Paint Picker'
                        description='The end result from an in-depth tutorial on Three.js and react-three-fiber.'
                        link='https://haydenlinder.github.io/react-three-fiber/'
                        path='/fiber.png'
                        position={[0, 0, -1]}
                    />
                </group>
            </Box>
            <Box 
                centerAnchor
                height='10%'
            >
                <Html center position={[0, 0, 0]} zIndexRange={[0,10]}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 70, width: 300}}>
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
            </Box>
        </Box>
    )
}

export default Projects