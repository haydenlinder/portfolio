import { useRef, useEffect } from 'react'
import { useFrame, useThree, useLoader } from 'react-three-fiber' 
import Effects from './Effects'
import state from '../state'
import Arrow from './Arrow'
import { TextureLoader } from 'three'

const Resume = ({}) => {
    const groupRef = useRef()
    const paperRef = useRef()
    const sunRef = useRef()
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + '/resume.png')
    
    useFrame(() => {
        const group = groupRef.current
        const paper = paperRef.current
        paper.rotation.y += 0.01
        if (state.top >= 200 && !group.visible) group.visible = true
        else if (state.top < 200 && group.visible) group.visible = false
    })

    const { scene } = useThree()
    useEffect(() => {
        scene.sun = sunRef.current
    },[])
    
    return (
        <group position={[0,0,-240]} visible={false} ref={groupRef} >
            <mesh receiveShadow>
                <planeBufferGeometry args={[999,999]}/>
                <meshPhysicalMaterial color='white'/>
            </mesh>
            <group position={[0, -1, 47]}>
                <mesh receiveShadow castShadow  rotation={[0,Math.PI/4,0]}>
                    <boxBufferGeometry args={[1,1,1]}/>
                    <meshPhysicalMaterial />
                </mesh>
                <group position={[0, 1.5, 0]} ref={paperRef} scale={new Array(3).fill(1.3)}>
                    <group position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
                        <mesh castShadow >
                            <planeBufferGeometry args={[0.7272,1]}/>
                            <meshBasicMaterial map={texture}/>
                        </mesh>
                        <Arrow />
                    </group>
                    <group >
                        <mesh receiveShadow castShadow>
                            <planeBufferGeometry args={[0.7272,1]}/>
                            <meshBasicMaterial map={texture}/>
                        </mesh>
                        <Arrow />
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Resume