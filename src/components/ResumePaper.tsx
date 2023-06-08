import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { BufferAttribute, BufferGeometry, Group, TextureLoader, Vector3 } from 'three'
const basicMaterial = <meshBasicMaterial transparent opacity={0.6} color='black' />

const Arrow = ({}) => {
    const vertices = new Float32Array([
        -1, 0, 0,
        1, 0, 0,
        0, 1, 0
    ])
    const geometry = new BufferGeometry()
    const indices = [
        0, 1, 2,
    ];
    geometry.setIndex( indices );
    geometry.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );

    return (
        <group position={[0, 0, 0.1]}>
            <mesh 
                position={[0, -0.1, 0]} 
                scale={new Vector3(0.1,0.1,0.1)} 
                rotation={[0, 0, Math.PI]}
                geometry={geometry}
            >
                {basicMaterial}
            </mesh>
            <mesh>
                <planeBufferGeometry args={[0.1, 0.2]} />
                {basicMaterial}
            </mesh>
            <mesh position={[0,-0.25,0]}>
                <planeBufferGeometry args={[0.3, 0.08]} />
                {basicMaterial}
            </mesh>
        </group>
    )
}


const ResumePaper = ({}) => {
    const paperRef = useRef<Group>(null)
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + '/resume.png')
    const material = <meshBasicMaterial map={texture} />
    useFrame(() => {
        const paper = paperRef.current
        if (!paper) return
        paper.rotation.y += 0.01
    })
    return (
        <group ref={paperRef} scale={new Vector3(1.3, 1.3, 1.3)}>
            <group position={[0, 0, -0.1]} rotation={[0, Math.PI, 0]}>
                <mesh castShadow >
                    <planeBufferGeometry args={[0.7272, 1]} />
                    {material}
                </mesh>
                <Arrow />
            </group>
            <group >
                <mesh receiveShadow castShadow>
                    <planeBufferGeometry args={[0.7272, 1]} />
                    {material}
                </mesh>
                <Arrow />
            </group>
        </group>
    )
}

export default ResumePaper