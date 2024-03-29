import { Box } from '@react-three/flex'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Plane } from '@react-three/drei'
import Model from './Model'
import state from '../state'
import { Group, Mesh, Vector3 } from 'three'
import { ColoredMaterial, ColoredMaterialBackSide } from './ColoredMaterial'
import Text from './Text'



type Props = React.PropsWithChildren<{
    spin?: boolean;
    text: string;
    scrollTo?: number;
    modelProps?: {
        path: string,
        scale?: number[],
        rotation?: number[]
    }
}>
const MenuItem = ({ 
    children,
    spin = false,
    text, 
    scrollTo = 80,
    modelProps = {
        path: '',
        scale: [1,1,1],
        rotation: [0,0,0]
    } 
}: Props) => {
    const sphereRef = useRef<Group & {isPointerDown: boolean, isHovered: boolean}>(null)
    const boxRef = useRef<Omit<Group, 'children'> & { children: Mesh[]}>(null)
    const modelRef = useRef<Group>(null)

    useFrame(() => {
        const model = modelRef.current
        if (!model?.rotation) return
        if (spin) model.rotation.y += 0.01
    })
    
    const handlePointerEnter = () => {
        if (!sphereRef.current || !boxRef.current) return
        sphereRef.current.isHovered = true
        boxRef.current.children.forEach(child => { 
            if (child.isMesh && !Array.isArray(child.material)) child.material.opacity = 1
        })
    }
    const handlePointerLeave = () => {
        if (!sphereRef.current || !boxRef.current) return 
        sphereRef.current.isHovered = false
        sphereRef.current.isPointerDown = false
        boxRef.current.children.forEach(child => {
            if (child.isMesh && !Array.isArray(child.material)) child.material.opacity = 0.7
        })
    }
    const handlePointerDown = () => {
        if (!sphereRef.current) return 
        sphereRef.current.isPointerDown = true
    }
    const handlePointerUp = () => {
        if (!sphereRef.current) return 
        if (sphereRef.current.isPointerDown) state.top = scrollTo
        sphereRef.current.isPointerDown = false
    }

    const listeners = {
        onPointerEnter: handlePointerEnter, 
        onPointerLeave: handlePointerLeave,
        onPointerDown: handlePointerDown, 
        onPointerUp: handlePointerUp,
    }

    let material = <ColoredMaterial/>
    let materialBackSide = <ColoredMaterialBackSide/>
    
    return (
        <Box 
            centerAnchor 
        >
            <group 
                ref={sphereRef}
            >
                <group ref={boxRef} {...listeners}>
                    <Plane args={[12,12]}  receiveShadow>
                        {material}
                    </Plane> 
                    <Plane args={[12,12]} rotation={[Math.PI/2,0,0]} position={[0,6,6]} receiveShadow>
                        {material}
                    </Plane> 
                    <Plane args={[12,12]} rotation={[Math.PI/2,0,0]} position={[0,-6,6]} receiveShadow>
                        {materialBackSide}
                    </Plane> 
                    <Plane args={[12,12]} rotation={[0,Math.PI/2,0]} position={[-6,0,6]} receiveShadow>
                        {material}
                    </Plane> 
                    <Plane args={[12,12]} rotation={[0,Math.PI/2,0]} position={[6,0,6]} receiveShadow>
                        {materialBackSide}
                    </Plane> 
                </group>
                <group 
                    position={[0,0,6]}
                >
                    {children ? 
                        children : 
                        <group ref={modelRef}>
                            <Model {...modelProps} />
                        </group>
                    }
                    <group position={new Vector3(-0.4*text.length,-4,0)}>
                        <Text hAlign='center' vAlign='center' size={0.7} thickness={1}>
                            {text}
                        </Text>
                    </group>
                </group>
            </group>
        </Box>
    )
}

export default MenuItem