import { useLoader } from "@react-three/fiber";
import { FrontSide, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Cache } from "three/src/loaders/Cache";

Cache.enabled = true;
type Props =  {
  path: string;
  scale?: number[];
  rotation?: number[];
  position?: number[];
}

const Model = ({
  path,
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  ...props
}: Props) => {
  const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + path);

  model.scene.traverse((child) => {
    const c = child as Mesh;
      if (c.isMesh && !Array.isArray(c.material)) {
          c.castShadow = true
          c.receiveShadow = true
          c.material.side = FrontSide
      }
  })

  return (
    <primitive
      object={model.scene.clone()}
      scale={scale}
      position={position}
      {...props}
      rotation={rotation}
    />
  );
};

export default Model;
