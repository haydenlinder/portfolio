import { useEffect, useMemo, useRef } from "react"
import * as data from "../helvetiker_regular.typeface.json"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { Object3DNode, extend } from '@react-three/fiber'

import { Color, MeshPhysicalMaterial } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { useStore } from "../utils/state"

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
    immune = false,
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
    }, [])

    const ref = useRef<MeshPhysicalMaterial>(null)
    const {isDark} = useStore()

    useEffect(() => {
        if (immune) return
        if (isDark && ref.current?.color.equals(new Color('black'))) {
            ref.current?.setValues?.({color: 'white'})
            if (ref.current?.color) ref.current.color = new Color('white')
        } else if (!isDark && !ref.current?.color.equals(new Color('black'))) {
            ref.current?.setValues?.({color: 'black'})
            if (ref.current?.color) ref.current.color = new Color('black')
        }
    }, [isDark]) 
 
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh castShadow={true}>
                <textGeometry args={[children, config]} />
                <meshPhysicalMaterial ref={ref}  />
            </mesh>
        </group>
    )
}

export default Text;