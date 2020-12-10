import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'

const Sphere = () => (
    <mesh receiveShadow castShadow>
        <sphereBufferGeometry args={[0.6, 100, 100]} />
        <meshPhysicalMaterial />
    </mesh>
)

const Atom = ({}) => {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    useFrame(({clock}) => {
        // ref1.current.rotation.y += 0.1
        // ref1.current.rotation.x += 0.01
        ref2.current.position.x = 1.5*Math.sin(2*clock.getElapsedTime())
        ref2.current.position.y = 1.5*Math.cos(2*clock.getElapsedTime())
        ref2.current.position.z = 1.5*Math.sin(2*clock.getElapsedTime())

        ref3.current.position.x = 1.2*Math.cos(2*clock.getElapsedTime() + 1)
        ref3.current.position.y = 1.2*Math.sin(2*clock.getElapsedTime() + 2)
        ref3.current.position.z = 1.2*Math.sin(2*clock.getElapsedTime() + 3)
        
        ref4.current.position.x = 1.1*Math.cos(2*clock.getElapsedTime() + 4)
        ref4.current.position.y = 1.1*Math.sin(2*clock.getElapsedTime() + 5)
        ref4.current.position.z = 1.1*Math.sin(2*clock.getElapsedTime() + 6)

        ref5.current.position.x = 1.3*Math.cos(2*clock.getElapsedTime() + 1)
        ref5.current.position.y = 1.3*Math.sin(2*clock.getElapsedTime() + 1)
        ref5.current.position.z = 1.3*Math.sin(2*clock.getElapsedTime() + 5)
    })
    return (
        <group ref={ref1}>
            <Sphere/>
            <group ref={ref2} position={[1,0,1]} scale={new Array(3).fill(0.5)}>
                <Sphere />
            </group>
            <group ref={ref3} position={[0, 0, 1]} scale={new Array(3).fill(0.5)}>
                <Sphere />
            </group>
            <group ref={ref4} position={[1,1,-1]} scale={new Array(3).fill(0.5)}>
                <Sphere />
            </group>
            <group ref={ref5} position={[1, 1, -1]} scale={new Array(3).fill(0.5)}>
                <Sphere />
            </group>
        </group>
    )
}

export default Atom