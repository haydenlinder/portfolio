import React, { useMemo } from "react"
import { useUpdate } from "react-three-fiber"
import * as data from 'three/examples/fonts/helvetiker_bold.typeface.json'
import { Font, Vector3 } from 'three'

const Text = ({
    children,
    vAlign = "center",
    hAlign = "center",
    size = 1,
    thickness = 2,
    color = "#000000",
    ...props
}) => {
    const config = useMemo(() => {
        const font = new Font(data.default)
        return({
            font,
            size: 16,
            height: thickness,
            curveSegments: 64,
            // bevelEnabled: true,
            bevelThickness: 3,
            // bevelSize: 1,
            // bevelOffset: 0,
            // bevelSegments: 8,
        })
    }, [])
    const mesh = useUpdate(
        (self) => {
            const size = new Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x
            self.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y
        },
        [children],
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh} >
                <textGeometry args={[children, config]} />
                <meshPhysicalMaterial color={color} />
            </mesh>
        </group>
    )
}

export default Text;