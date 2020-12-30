import { useFrame, useThree } from 'react-three-fiber'
import { useAspect } from '@react-three/drei'
import { useRef } from 'react'
import state from '../state'
import { Vector3 } from 'three'

const Scrollbar = ({}) => {
    const vec = new Vector3()
    const scrollbarRef = useRef()
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect("cover", size.width, size.height)
    const barx = vpWidth / 2 - 3
    const barz = 0
    const barHeight = vpHeight / (state.pages + 1)
    const max = (vpHeight - barHeight) / 2
   
    useFrame(() => {
        const d = state.top/(state.pages+1)
        scrollbarRef.current.position.lerp(
            vec.set(barx,max-d,barz), 
            0.1
        )
    })

    const handlers = {
        onPointerDown: e => {
            e.stopPropagation()
            state.isPointerDown = true
            state.touchY = e.pageY
        }   
    }

    const handleJump = e => {
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