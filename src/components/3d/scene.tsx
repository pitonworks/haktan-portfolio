"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Lemur } from "./lemur"

export function Scene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Lemur position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
} 