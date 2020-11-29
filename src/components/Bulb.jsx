const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight castShadow />
            <meshStandardMaterial color='yellow'/>
            <sphereBufferGeometry args={[0.2,100,100]}/>
        </mesh>
    )
}

export default Bulb