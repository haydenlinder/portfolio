import { Flex, Box } from '@react-three/flex'
import MenuItem from './MenuItem'

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
                    />
                    <MenuItem 
                        text='Resume'
                        scrollTo={240}
                        modelProps={{
                            path:'/lowpoly_earth/scene.gltf',
                            scale: new Array(3).fill(0.02) 
                        }}
                    />
                    <MenuItem 
                        text='Contact'
                        scrollTo={320}
                        spin={false}
                        modelProps={{
                            path:'/rotary_phone/scene.gltf',
                            scale: new Array(3).fill(0.8),
                            position: [0,-1.4,0]
                        }}
                    />
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