import { useFrame, useThree } from '@react-three/fiber'
import { useAspect } from '@react-three/drei'
import { useRef } from 'react'
import state from '../state'
import { Mesh, Vector3 } from 'three'
import { ThreeEvent } from '@react-three/fiber'

const Scrollbar = ({}) => {
    const vec = new Vector3()
    const scrollbarRef = useRef<Mesh>(null)
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height)
    const barx = vpWidth / 2 - 3
    const barz = 0
    const barHeight = vpHeight / (state.pages + 1)
    const max = (vpHeight - barHeight) / 2
   
    useFrame(() => {
        if (!scrollbarRef.current) return
        const d = state.top/(state.pages+1)
        scrollbarRef.current.position.lerp(
            vec.set(barx,max-d,barz), 
            0.1
        )
    })

    const handlers = {
        onPointerDown: ( e: ThreeEvent<PointerEvent>)=> {
            e.stopPropagation()
            state.isPointerDown = true
            state.touchY = e.pageY
            if (!scrollbarRef.current) return
            const d = state.top/(state.pages+1)
            scrollbarRef.current.position.lerp(
                vec.set(barx,max-d,barz), 
                1
            )
        }   
    }

    const handleJump =( e: ThreeEvent<PointerEvent>) => {
        state.top = e.pageY/(state.pages)
    }

    return(
        <>
            <mesh 
                position={[barx, 0, barz]}
                onPointerDown={handleJump}
            >
                <meshPhysicalMaterial 
                    transmission={0.6} 
                    transparent 
                />
                <planeBufferGeometry args={[4,vpHeight,2]}/>
            </mesh>
            <mesh 
                ref={scrollbarRef} 
                position={[barx,max,barz]}
                {...handlers}
            >
                <meshPhysicalMaterial color='grey'/>
                <boxBufferGeometry args={[3,barHeight,1]}/>
            </mesh>
        </>
    )
}

export default Scrollbar