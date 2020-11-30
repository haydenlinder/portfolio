import * as THREE from "three"
import React, { useMemo } from "react"
import { useLoader, useUpdate } from "react-three-fiber"
import * as data from 'three/examples/fonts/helvetiker_bold.typeface.json'
import { Box } from '@react-three/flex'

const Text = ({
    children,
    vAlign = "center",
    hAlign = "center",
    size = 1,
    color = "#000000",
    ...props
}) => {
    const font = new THREE.Font(data.default)
    // const font = useLoader(THREE.FontLoader, "three/examples/fonts/helvetiker_regular.typeface.json")
    const config = useMemo(
        () => ({
            font,
            size: 16,
            height: 1,
            curveSegments: 32,
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
        <Box dir='row' wrap='wrap' width='100%' justify='center'>
            {children.split(' ').map(child => 
            <Box mr={1} mb={1} >
                <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
                    <mesh ref={mesh} castShadow receiveShadow>
                        <textGeometry args={[child, config]} />
                        <meshPhysicalMaterial color="black" />
                    </mesh>
                </group>
            </Box>
            )}
        </Box>
    )
}

export default Text;