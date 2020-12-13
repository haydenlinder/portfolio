import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import { Html } from '@react-three/drei'
import state from '../state'

const ProjectItem = ({
    title = 'title',
    description = 'description',
    link = '#',
    path = '',
    position = [0,0,0]
}) => {
    return (
        <Html center scaleFactor={20} position={position} zIndexRange={[999,0]}>       
            <div style={{ display: 'flex', fontSize: 30, flexDirection: 'column', alignItems: 'center', margin: 10, textAlign: 'center'}}>
                <div style={{fontWeight: 'bold'}}>{title}</div>
                <div>{description}</div>
                <br/>
                <a style={{height: '50vh', width: 500, overflow: 'hidden', display: 'flex'}} href={link} target='_blank'>
                    <img style={{objectFit: 'cover', minWidth: '100%', minHeight: '100%'}} src={process.env.PUBLIC_URL + path} alt={title} />
                </a>
            </div>
        </Html>
    )
}

export default ProjectItem