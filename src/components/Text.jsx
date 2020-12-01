import * as THREE from "three"
import React, { useMemo } from "react"
import { useUpdate } from "react-three-fiber"
import * as data from 'three/examples/fonts/helvetiker_bold.typeface.json'

const Text = ({
    children,
    vAlign = "center",
    hAlign = "center",
    size = 1,
    color = "#000000",
    ...props
}) => {
    const font = new THREE.Font(data.default)
    const config = useMemo(
        () => ({
            font,
            size: 16,
            height: 2,
            curveSegments: 64,
            // bevelEnabled: true,
            bevelThickness: 3,
            // bevelSize: 1,
            // bevelOffset: 0,
            // bevelSegments: 8,
        }),
        [font]
    )
    const mesh = useUpdate(
        (self) => {
            const size = new THREE.Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x
            self.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y
        },
        [children],
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh} castShadow receiveShadow>
                <textGeometry args={[children, config]} />
                <meshPhysicalMaterial color={color} clearcoat={1}/>
            </mesh>
        </group>
    )
}

export default Text;