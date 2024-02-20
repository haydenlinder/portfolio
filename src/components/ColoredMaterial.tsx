import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { isDark } from "../utils/darkMode"
import { BackSide, Color, MeshPhysicalMaterial } from "three"

export const ColoredMaterial = () => {
    const ref = useRef<MeshPhysicalMaterial>(null)
    useFrame(() => {
        if (isDark() && !ref.current?.color.equals(new Color('black'))) {
            ref.current?.setValues?.({color: 'black'})
            if (ref.current?.color) ref.current.color = new Color('black')
        } else if (!isDark() && ref.current?.color.equals(new Color('black'))) {
           ref.current?.setValues?.({color: 'white'})
           if (ref.current?.color) ref.current.color = new Color('white')
        }
})  
return <meshPhysicalMaterial ref={ref}/>
}

export const ColoredMaterialBackSide = () => {
    const ref = useRef<MeshPhysicalMaterial>(null)
    useFrame(() => {
        if (isDark() && !ref.current?.color.equals(new Color('black'))) {
            ref.current?.setValues?.({color: 'black'})
            if (ref.current?.color) ref.current.color = new Color('black')
        } else if (!isDark() && ref.current?.color.equals(new Color('black'))) {
            ref.current?.setValues?.({color: 'white'})
            if (ref.current?.color) ref.current.color = new Color('white')
        }
    })  
    return <meshPhysicalMaterial ref={ref} transparent opacity={0.7} side={BackSide} />
}