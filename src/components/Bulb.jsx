const Bulb = ({ position = [0,0,0], visible = false }) => {
    return (
        <mesh position={position}>
            <pointLight castShadow 
                shadow-mapSize-width={2**10}
                shadow-mapSize-height={2**10}
                shadow-radius={10}
                bias={-0.001}
            />
            <meshStandardMaterial color='yellow' visible={visible}/>
            <sphereBufferGeometry args={[0.2,100,100]}/>
        </mesh>
    )
}

export default Bulb