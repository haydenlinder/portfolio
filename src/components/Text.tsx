import React, { useMemo } from "react"
import * as data from "../helvetiker_regular.typeface.json"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { Object3DNode, extend } from '@react-three/fiber'

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
extend({ TextGeometry })
declare module "@react-three/fiber" {
    interface ThreeElements {
      textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
const Text = ({
    children= '',
    vAlign = "center",
    hAlign = "center",
    size = 1,
    thickness = 2,
    color = "#000000",
    ...props
}) => {
    const config = useMemo(() => {
        const font = new FontLoader().parse(data)
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
    }, [thickness])
 
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh >
                <textGeometry args={[children, config]} />
                <meshPhysicalMaterial color={color} />
            </mesh>
        </group>
    )
}

export default Text;