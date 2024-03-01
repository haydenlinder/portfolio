import { useRef } from 'react'
import { Html } from '@react-three/drei'
import { Group } from 'three'

const ProjectItem = ({
    title = 'title',
    description = 'description',
    link = '#',
    path = '',
    focus=false
}) => {
    const htmlRef = useRef<HTMLDivElement>(null)
    const groupRef = useRef<Group>(null)

    return (
        <group position={[0, 0.5, 0]} ref={groupRef}>
            <Html center scale={20} zIndexRange={[999,0]} >       
                <div ref={htmlRef} style={{ display: focus ? 'flex' : "none", fontSize: 25, flexDirection: 'column', alignItems: 'center', margin: 10, textAlign: 'center'}}>
                    <div className='dark' style={{ background: 'rgb(255,255,2550)', border: '1px solid black', borderRadius: 5, padding: 20}}>
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