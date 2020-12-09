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
    const ref = useRef()
    useFrame(() => {
        const div = ref.current
        if (state.top > 130 && div && div.style.display === 'none') div.style.display = 'flex'
        if (state.top < 130 && div && div.style.display === 'flex') div.style.display = 'none'
    })
    return (
        <Html center scaleFactor={10} position={position}>       
            <div ref={ref} style={{ display: 'flex', fontSize: 30, flexDirection: 'column', alignItems: 'center', margin: 10, textAlign: 'center'}}>
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