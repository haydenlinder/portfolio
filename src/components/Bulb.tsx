import { Vector3 } from "three"

const Bulb = ({ position = [0,0,0], visible = false }) => {
    return (
        <mesh position={new Vector3(...position)}>
            <pointLight castShadow 
                shadow-mapSize-width={2**10}
                shadow-mapSize-height={2**10}
                shadow-radius={10}
            />
            <meshStandardMaterial color='yellow' visible={visible}/>
            <sphereBufferGeometry args={[0.2,100,100]}/>
        </mesh>
    )
}

export default Bulb