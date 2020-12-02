import { useLoader, useThree } from 'react-three-fiber';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'

THREE.Cache.enabled = true;
const Model = ({ 
    path,
    scale = [1,1,1],
    rotation = [0,0,0],
    position = [0,0,0]
}) => {
    const model = useLoader(
        GLTFLoader,
        path
    )
    const { scene } = useThree();
    const key = path.split('/')[1]
    scene[key] = model.scene
    return (
        <primitive
            object={model.scene.clone()}
            scale={scale}
            position={position}
        />
    )
}

export default Model;