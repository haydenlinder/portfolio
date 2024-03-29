import { useRef, useState } from 'react'
import Model from './Model'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import state from '../state'
import ProjectItem from './ProjectItem'
import { Box } from '@react-three/flex'
import Atom from './Atom'
import { Group, Vector3 } from 'three'
import { ColoredMaterial } from './ColoredMaterial'
import { useStore } from '../utils/state'

const physicalMaterial = <ColoredMaterial />

const Projects = ({ }) => {
    const {pan, panBy} = useStore()
    const [vec1, setVec1] = useState(new Vector3(0,pan,0))
    const panRef = useRef<Group>(null)
    const vec2 = new Vector3(0,pan,0)

    useFrame(() => {
        if (!panRef.current) return
        vec1.lerp(vec2, 0.1)
        panRef.current.rotation.setFromVector3(vec1)
    })

    const handleClick = (e: React.MouseEvent) => {
        state.top = state.vpHeight*3
    }

    const handlePan = (num: number) => {
        panBy(num)
        setVec1(new Vector3(0,pan+num,0))
    }

    const ticks = Math.abs(2*pan/Math.PI) % 4

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
                <Html center position={[0, 5, 40]} zIndexRange={[999, 0]} scale={15}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 70, width: 200 }}>
                            <div onClick={e => handlePan(1)} style={{ cursor: 'pointer', position: 'absolute', top: 0, left: -80 }}>⇦</div>
                            <div onClick={e => handlePan(-1)} style={{ cursor: 'pointer', position: 'absolute', top: 0, right: -80 }}>⇨</div>
                        </div>
                    </div>
                </Html>
                {/* 3D */}
                <group ref={panRef} scale={new Vector3(2,2,2)} rotation={[0,pan,0]}>
                    {/* FLOOR */}
                    <mesh position={[0,-0.4,0]} receiveShadow>
                        <cylinderBufferGeometry args={[20,20,0.1,100]}/>
                        {physicalMaterial}
                    </mesh>
                    <group position={[0, 1, 17]} >
                        <ProjectItem
                            focus={ticks === 0}
                            title='Ship Code'
                            description='A Learning Platform for Web Development'
                            link='https://hayden.vercel.app'
                        />
                        <Model
                            path='/small_cargo_ship/scene.gltf'
                            scale={new Array(3).fill(2)} 
                            rotation={[0, -3*Math.PI/4, 0]}
                            position={[0.5, 1, 0.25]}
                        />
                    </group>
                    <group position={[-17, 1, 0]} >
                        <ProjectItem
                        focus={ticks === 3}
                            title='2020 Election by Income'
                            description='2020 United States election results by 2019 median household income per county'
                            link='https://haydenlinder.github.io/2020-election-by-income/'
                        />
                        <Model 
                            path='/election/scene.gltf'
                            scale={new Array(3).fill(0.5)}
                            rotation={[Math.PI/2, 0, Math.PI/2 ]}
                            position={[0,0.2,0]}
                        />
                    </group>
                    <group position={[17, 1, 0]} >
                        <ProjectItem
                        focus={ticks === 1}
                            title='Tesla Paint Picker'
                            description='The end result from an in-depth tutorial on Three.js and react-three-fiber.'
                            link='https://haydenlinder.github.io/react-three-fiber/'
                        />
                        <group position={[0,0.5,0]}>
                            <Model 
                                path='/tesla_model_3/scene.gltf'
                                scale={new Array(3).fill(0.007)}
                                rotation={[0,Math.PI/4,0]}
                            />
                        </group>
                    </group>
                    <group position={[0, 1, -17]} >
                        <ProjectItem
                        focus={ticks === 2}
                            title='Particles'
                            description='An orbital physics simulator.'
                            link='https://haydenlinder.github.io/particles'
                        />
                        <group scale={[0.5, 0.5, 0.5]} position={[0, 0.5, 0]}>
                            <Atom />
                        </group>
                    </group>
                </group>
            </Box>
        </Box>
    )
}

export default Projects