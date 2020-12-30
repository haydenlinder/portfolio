import { useRef } from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import Text from './Text'
import ProjectItem from './ProjectItem'
import { Box } from '@react-three/flex'
import Atom from './Atom'
import { Vector3 } from 'three'

const Projects = ({ }) => {
    const panRef = useRef()
    const vec1 = new Vector3()
    const vec2 = new Vector3()
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
                height='20%'
                centerAnchor
            >
                <Html center position={[0, 20, 0]} zIndexRange={[0, 10]}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div>Here are some of my projects.</div>
                        <br/>
                        <div>Click on a model to view the project.</div>
                        <br/>
                        <div
                            onClick={handleClick}
                            style={{ padding: 10, paddingRight: 30, paddingLeft: 30, border: '1px solid black', fontWeight: 'bold', borderRadius: 10, background: 'rgb(255,255,255, 0.4)', minWidth: 300, cursor: 'pointer' }}
                        >
                            See my resume
                        </div>
                    </div>
                </Html>
            </Box>
            <Box
                height='auto'
                centerAnchor
            >
                <Html center position={[0, 5, 40]} zIndexRange={[999, 0]} scaleFactor={15}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 70, width: 200 }}>
                            <div onClick={e => handlePan(1)} style={{ cursor: 'pointer', position: 'absolute', top: 0, left: -80 }}>⇦</div>
                            <div onClick={e => handlePan(-1)} style={{ cursor: 'pointer', position: 'absolute', top: 0, right: -80 }}>⇨</div>
                        </div>
                    </div>
                </Html>
                <group ref={panRef} scale={new Array(3).fill(2)}>
                    <mesh position={[0,-0.4,0]} receiveShadow>
                        <cylinderBufferGeometry args={[20,20,0.1,100]}/>
                        <meshPhysicalMaterial />
                    </mesh>
                    <group position={[0,1,17]} >
                        <ProjectItem
                            title='Particles'
                            description='An orbital physics simulator.'
                            link='https://haydenlinder.github.io/particles'
                        />
                        <group scale={[0.5,0.5,0.5]} position={[0,0.5,0]}>
                            <Atom />
                        </group>
                    </group>
                    <group position={[17, 1, 0]} >
                        <ProjectItem
                            title='Abocabo'
                            description='Find cheap produce near you.'
                            link='https://www.abocabo.com'
                        />
                        <Model 
                            path='/avocado/scene.gltf' 
                            scale={new Array(3).fill(0.05)} rotation={[0,Math.PI/3,0]}
                            position={[0,0,0.4]}
                        />
                    </group>
                    <group position={[-17, 1, 0]} >
                        <ProjectItem
                            title='Tickets'
                            description='A project management app featuring complex queries.'
                            link='https://ticats.herokuapp.com/'
                        />
                        <Model 
                            path='/checkmark/scene.gltf'
                            scale={new Array(3).fill(0.3)}
                            rotation={[0,-Math.PI/2,0]}
                            position={[0,0,-0.5]}
                        />
                    </group>
                    <group position={[0, 1, -17]} >
                        <ProjectItem
                            title='Tesla Paint Picker'
                            description='The end result from an in-depth tutorial on Three.js and react-three-fiber.'
                            link='https://haydenlinder.github.io/react-three-fiber/'
                        />
                        <group position={[0,0.5,0]}>
                            <Model 
                                path='/tesla_model_3/scene.gltf'
                                scale={new Array(3).fill(0.007)}
                                rotation={[0,3*Math.PI/4,0]}
                            />
                        </group>
                    </group>
                </group>
            </Box>
        </Box>
    )
}

export default Projects