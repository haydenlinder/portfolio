import { useState, useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import { EffectComposer, GodRays } from 'react-postprocessing'

const Effects = ({}) => {
    const [sun, setSun] = useState(null)
    const { scene } = useThree();
    useEffect(() => {
        setSun(scene.sun)
    },[scene.sun])
    return (
        sun ?
        <EffectComposer>
            <GodRays sun={sun} />
        </EffectComposer>
        : 
        null
    )
}

export default Effects