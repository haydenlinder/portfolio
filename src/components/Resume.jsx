import ResumePaper from './ResumePaper'
import { Html } from '@react-three/drei'
import { Box } from '@react-three/flex'

const Resume = ({}) => {
    return (
        <Box
            height='100%'
            width='auto'
            centerAnchor
        >
            <group scale={new Array(3).fill(15)} position={[0,-10,0]}>
                <mesh receiveShadow castShadow rotation={[0,Math.PI/4,0]}>
                    <boxBufferGeometry args={[1,1,1]}/>
                    <meshPhysicalMaterial />
                </mesh>
                <Html center position={[0,1.6,0]} scaleFactor={150}> 
                    <a 
                        href={process.env.PUBLIC_URL + '/hayden_linder_resume.pdf'} 
                        download
                        style={{
                            height: '100%',
                            width: '100%',
                            background: 'blue'
                        }}
                    >
                    <div style={{ height: 140, width: 100}}>
                    </div>
                    </a> 
                </Html>
                <group position={[0,1.5,0]}>
                    <ResumePaper />
                </group>
            </group>
        </Box>
    )
}

export default Resume