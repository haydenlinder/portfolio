import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Html } from '@react-three/drei'
import { Group, Vector3 } from 'three'

const ProjectItem = ({
    title = 'title',
    description = 'description',
    link = '#',
    path = '',
}) => {
    const vec = new Vector3()
    const htmlRef = useRef<HTMLDivElement>(null)
    const groupRef = useRef<Group>(null)
    useFrame(() => {
        if (!groupRef.current || !htmlRef.current) return
        if (groupRef.current.getWorldPosition(vec).z <= 10)
            htmlRef.current.style.display = 'none'
        else htmlRef.current.style.display = 'flex'
    })
    return (
        <group position={[0, 0.5, 0]} ref={groupRef}>
            <Html center scale={20} zIndexRange={[999,0]} >       
                <div ref={htmlRef} style={{ display: 'flex', fontSize: 25, flexDirection: 'column', alignItems: 'center', margin: 10, textAlign: 'center'}}>
                    <div style={{ background: 'rgb(255,255,255)', border: '1px solid black', borderRadius: 5, padding: 20}}>
                        <a href={link} target='_blank' style={{fontWeight: 'bold'}}>{title}</a>
                        <div>{description}</div>
                    </div>
                    <br/>
                    <a style={{height: '50vh', width: 400, overflow: 'hidden', display: 'flex'}} href={link} target='_blank'>
                    </a>
                </div>
            </Html>
        </group>
    )
}

export default ProjectItem