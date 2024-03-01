import { ThreeElements } from "@react-three/fiber"
import { BackSide } from "three"
import { useStore } from "../utils/state"

export const ColoredMaterial = (props: ThreeElements['meshPhysicalMaterial']) => {
    const {isDark} = useStore()
return <meshPhysicalMaterial {...props} color={isDark ? 'black' : 'white'}/>
}

export const ColoredMaterialBackSide = () => {
    const {isDark} = useStore()
    return <meshPhysicalMaterial  transparent opacity={0.7} side={BackSide} color={isDark ? 'black' : 'white'}/>
}