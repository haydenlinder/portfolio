import { useLoader } from 'react-three-fiber';
import { FrontSide } from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import { Cache } from 'three/src/loaders/Cache'

Cache.enabled = true;
const Model = ({ 
    path,
    // scale = [1,1,1],
    // rotation = [0,0,0],
    // position = [0,0,0]
    ...props
}) => {
    const model = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + path
    )

    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = FrontSide
        }
    })
    
    return (
        <primitive
            object={model.scene.clone()}
            {...props}
            // scale={scale}
            // position={position}
        />
    )
}

export default Model;