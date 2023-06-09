import ResumePaper from './ResumePaper'
import { Html } from '@react-three/drei'
import { Box } from '@react-three/flex'
import state from '../state'
import { Vector3 } from 'three'
const physicalMaterial = <meshPhysicalMaterial />

const handleClick =( e: React.MouseEvent) => {
    state.top = state.vpHeight * 4
}

const Resume = ({}) => {
    return (
        <Box
            height='100%'
            width='auto'
            centerAnchor
        >
            <Box
                height='20%'
                centerAnchor
            >
                <Html center position={[0, -20, 0]} zIndexRange={[0, 10]}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div
                            onClick={handleClick}
                            style={{ padding: 10, paddingRight: 30, paddingLeft: 30, border: '1px solid black', fontWeight: 'bold', borderRadius: 10, background: 'rgb(255,255,255, 0.4)', minWidth: 300, cursor: 'pointer' }}
                        >
                            Schedule a Meeting
                        </div>
                    </div>
                </Html>
            </Box>
            <group scale={new Vector3(15,15,15)} position={[0,-10,0]}>
                <mesh receiveShadow castShadow rotation={[0,Math.PI/4,0]}>
                    <boxBufferGeometry args={[1,1,1]}/>
                    {physicalMaterial}
                </mesh>
                <Html center position={[0,1.6,0]} scale={150}> 
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