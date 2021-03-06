import { useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three'

const Arrow = ({}) => {
    return (
        <group position={[0, 0, 0.1]}>
            <mesh position={[0, -0.1, 0]} scale={new Array(3).fill(0.1)} rotation={[0, 0, Math.PI]}>
                <geometry>
                    <face3 args={[0, 1, 2]} attachArray='faces' />
                    <vector3 attachArray='vertices' args={[-1, 0, 0]} />
                    <vector3 attachArray='vertices' args={[1, 0, 0]} />
                    <vector3 attachArray='vertices' args={[0, 1, 0]} />
                </geometry>
                <meshBasicMaterial transparent opacity={0.6} color='black' />
            </mesh>
            <mesh>
                <planeBufferGeometry args={[0.1, 0.2]} />
                <meshBasicMaterial transparent opacity={0.6} color='black' />
            </mesh>
            <mesh position={[0,-0.25,0]}>
                <planeBufferGeometry args={[0.3, 0.08]} />
                <meshBasicMaterial transparent opacity={0.6} color='black' />
            </mesh>
        </group>
    )
}

const ResumePaper = ({}) => {
    const paperRef = useRef()
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + '/resume.png')
    useFrame(() => {
        const paper = paperRef.current
        paper.rotation.y += 0.01
    })
    return (
        <group ref={paperRef} scale={new Array(3).fill(1.3)}>
            <group position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
                <mesh castShadow >
                    <planeBufferGeometry args={[0.7272, 1]} />
                    <meshBasicMaterial map={texture} />
                </mesh>
                <Arrow />
            </group>
            <group >
                <mesh receiveShadow castShadow>
                    <planeBufferGeometry args={[0.7272, 1]} />
                    <meshBasicMaterial map={texture} />
                </mesh>
                <Arrow />
            </group>
        </group>
    )
}

export default ResumePaper