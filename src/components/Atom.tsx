import { useFrame } from '@react-three/fiber'

import { useRef } from 'react'
import { Group, Vector3 } from 'three'
export const physicalMaterial = <meshPhysicalMaterial />
const Sphere = () => (
    <mesh receiveShadow castShadow>
        <sphereBufferGeometry args={[1, 100, 100]} />
        {physicalMaterial}
    </mesh>
)

const Atom = ({}) => {
    const ref2 = useRef<Group>(null)
    const ref3 = useRef<Group>(null)
    const ref4 = useRef<Group>(null)
    const ref5 = useRef<Group>(null)
    useFrame(({clock}) => {
        if (!(ref2.current && ref3.current && ref4.current && ref5.current)) return
        ref2.current.position.x = 2.5*Math.sin(2*clock.getElapsedTime())
        ref2.current.position.y = 2.5*Math.cos(2*clock.getElapsedTime())
        ref2.current.position.z = 2.5*Math.sin(2*clock.getElapsedTime())

        ref3.current.position.x = 2.2*Math.cos(2*clock.getElapsedTime() + 1)
        ref3.current.position.y = 2.2*Math.sin(2*clock.getElapsedTime() + 2)
        ref3.current.position.z = 2.2*Math.sin(2*clock.getElapsedTime() + 3)
        
        ref4.current.position.x = 2.1*Math.cos(2*clock.getElapsedTime() + 4)
        ref4.current.position.y = 2.1*Math.sin(2*clock.getElapsedTime() + 5)
        ref4.current.position.z = 2.1*Math.sin(2*clock.getElapsedTime() + 6)

        ref5.current.position.x = 2.3*Math.cos(2*clock.getElapsedTime() + 1)
        ref5.current.position.y = 2.3*Math.sin(2*clock.getElapsedTime() + 1)
        ref5.current.position.z = 2.3*Math.sin(2*clock.getElapsedTime() + 5)
    })
    return (
        <group >
            <Sphere/>
            <group ref={ref2} position={[1,0,1]} scale={new Vector3(0.5,0.5,0.5)}>
                <Sphere />
            </group>
            <group ref={ref3} position={[0, 0, 1]} scale={new Vector3(0.5,0.5,0.5)}>
                <Sphere />
            </group>
            <group ref={ref4} position={[1,1,-1]} scale={new Vector3(0.5,0.5,0.5)}>
                <Sphere />
            </group>
            <group ref={ref5} position={[1, 1, -1]} scale={new Vector3(0.5,0.5,0.5)}>
                <Sphere />
            </group>
        </group>
    )
}

export default Atom