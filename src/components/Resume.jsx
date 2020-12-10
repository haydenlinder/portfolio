import { useRef } from 'react'
import { useFrame } from 'react-three-fiber' 
import state from '../state'
import ResumePaper from './ResumePaper'
import { Html } from '@react-three/drei'

const Resume = ({}) => {
    useFrame(() => {
        const link = linkRef.current
        if (state.top >= 120 && link.style.display === 'none') link.style.display = 'block'
        if (state.top < 120 && link.style.display === 'block') link.style.display = 'none'
    })
    const linkRef = useRef()
    return (
        <group position={[0,0,-240]}>
            <mesh receiveShadow>
                <planeBufferGeometry args={[999,999]}/>
                <meshPhysicalMaterial color='white'/>
            </mesh>
            <group position={[0, -1, 47]}>
                <mesh receiveShadow castShadow  rotation={[0,Math.PI/4,0]}>
                    <boxBufferGeometry args={[1,1,1]}/>
                    <meshPhysicalMaterial />
                </mesh>
                <Html center position={[0,1.6,0]} scaleFactor={5}> 
                    <a 
                        ref={linkRef}
                        href={process.env.PUBLIC_URL + '/hayden_linder_resume.pdf'} 
                        download
                        style={{
                            height: 210,
                            width: 140,
                            display: 'none',
                        }}
                    ></a> 
                </Html>
                <group position={[0,1.5,0]}>
                    <ResumePaper />
                </group>
            </group>
        </group>
    )
}

export default Resume