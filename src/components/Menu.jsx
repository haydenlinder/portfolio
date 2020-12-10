import { Flex, Box } from '@react-three/flex'
import Atom from './Atom'
import MenuItem from './MenuItem'
import ResumePaper from './ResumePaper'

const Menu = ({ width = 100, height = 50 }) => {
    return(
        <>
            <Flex
                justify='center'
                align='center'
                position={[-width / 2, height/2, 3]}
                size={[width, height, 0]}
            >
                <Box 
                    width='auto'
                    height='auto'
                    dir='row'
                    wrap='wrap'
                    justify='center'
                >
                    <MenuItem 
                        spin={true}
                        text='About'
                        scrollTo={80}
                        modelProps={{
                            path:'/lowpoly_earth/scene.gltf',
                            scale: new Array(3).fill(0.02) 
                        }}
                    />
                    <MenuItem 
                        text='Projects'
                        scrollTo={160}
                        modelProps={{
                            path:'/lowpoly_earth/scene.gltf',
                            scale: new Array(3).fill(0.02) 
                        }}
                    >
                        <group scale={new Array(3).fill(2)}>
                            <Atom />
                        </group>
                    </MenuItem>
                    <MenuItem 
                        text='Resume'
                        scrollTo={240}
                        modelProps={{
                            path:'/lowpoly_earth/scene.gltf',
                            scale: new Array(3).fill(0.02) 
                        }}
                    >
                        <group scale={new Array(3).fill(4)} position={[0,0.5,0]}>
                            <ResumePaper />
                        </group>
                    </MenuItem>
                    {/* <MenuItem 
                        text='Contact'
                        scrollTo={320}
                        spin={false}
                        modelProps={{
                            path:'/rotary_phone/scene.gltf',
                            scale: new Array(3).fill(0.8),
                            position: [0,-1.4,0]
                        }}
                    /> */}
                </Box>
            </Flex>
            <mesh position={[0, 0, 0.01]} >
                <planeBufferGeometry args={[999,999]} />
                <meshPhysicalMaterial color='white' />
            </mesh>
        </>
    )
}

export default Menu