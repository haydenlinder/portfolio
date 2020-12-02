const Bulb = ({ position = [0,0,0], visible = false }) => {
    return (
        <mesh position={position}>
            <pointLight castShadow 
                // shadow-mapSize-width={1024*10}
                // shadow-mapSize-height={1024*10}
                shadow-camera-far={75}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <meshStandardMaterial color='yellow' visible={visible}/>
            <sphereBufferGeometry args={[0.2,100,100]}/>
        </mesh>
    )
}

export default Bulb