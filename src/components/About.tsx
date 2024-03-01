import { useRef } from 'react'
import Model from './Model'
import { GroupProps, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Html, useAspect } from '@react-three/drei'
import state from '../state'
import { Vector3 } from 'three/src/math/Vector3'
import { Box } from '@react-three/flex'
import { Group, ExtrudeGeometry, Shape, TextureLoader } from 'three'
import Text from './Text'
import { ColoredMaterial } from './ColoredMaterial'

const About = ({ }) => {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height)
    const modelRef = useRef<Group>(null)
    const vec = new Vector3()
    useFrame(({clock}) => {
        if (!modelRef.current) return
        const { x, y, z } = modelRef.current.rotation
        modelRef.current.rotation.setFromVector3(
            new Vector3(x,y,z)
            .lerp(vec.set(0.1,6.28*state.top/vpHeight + 4.4,0),0.1)
        )
    })

    const handleClick = (e: React.MouseEvent) => {
        state.top = vpHeight*2
    }

    return (
        <Box 
            justify='center'
            align='center'
            height='100%'
        >
            <Box 
                height='40%'
                marginTop={20}
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
                {/* EARTH */}
                <Skill rotation={[0,0.6,0.2]} position={[-30,20,0]} logoUrl='ts.svg' text='TypeScript'/>
                <Skill rotation={[0,-0.6,-0.2]} position={[30,20,0]} logoUrl='three.svg' text='Three.js'/>
                <Skill rotation={[-0.2,-0.6,-0.2]} position={[30,0,0]} logoUrl='react.png' text='React.js'/>
                <Skill rotation={[-0.2,0.6,0.2]} position={[-30,0,0]} logoUrl='sql.svg' text='SQL'/>
                <group 
                    ref={modelRef} 
                    position={[0, 15, 0]}
                    rotation={[0.1,4.4,0]}
                    scale={[5,5,5]}
                >
                    <group position={[3, 2, -1]} rotation={[0, 1.9, 0]}>
                        <mesh>
                            <planeBufferGeometry args={[3.5,0.6]}/>
                            <meshBasicMaterial color='black' opacity={0.3} transparent/>
                        </mesh>
                        <Text immune position={[-1.3,-0.15,0]} color='white' size={0.2}  thickness={0.2}>
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


const Skill = ({logoUrl, text, position, ...props}: { logoUrl: string, text: string, position:number[] } & GroupProps) => {
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + logoUrl)
    const ref = useRef<Group>(null)
    const p = position || [0,0,0]
    const random = 3*Math.random()
    useFrame(({clock}) => {
        const paper = ref.current
        if (!paper) return
        paper.position.y = position[1] + Math.sin(2*random*clock.getElapsedTime()-random)
    })
    return (
        <group ref={ref} {...{...props, position}}>
        <mesh position={[0,0,2.8]} >
                    <planeBufferGeometry args={[4, 4]} />
                    <meshBasicMaterial map={texture} />
                </mesh>
        <mesh receiveShadow castShadow  geometry={createBoxWithRoundedEdges(5, 3.5, 1, 10)}>
            <ColoredMaterial/>
        </mesh>
        <Text position={[-text.length/2.5,-6,0]}size={0.7}>
            {text}
        </Text>
        </group>
    )
}

function createBoxWithRoundedEdges(width: number, depth: number, radius0: number, smoothness: number) {
    let shape = new Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, width - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(width - radius * 2, width - radius * 2, eps, Math.PI / 2, 0, true);
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    let geometry = new ExtrudeGeometry(shape, {
        depth,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
    });

    geometry.center();

    return geometry;
  }

export default About