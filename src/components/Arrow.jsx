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

export default Arrow