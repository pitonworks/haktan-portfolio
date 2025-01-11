"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Lemur(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Animate the lemur
  useFrame((state) => {
    if (!groupRef.current) return
    
    // Breathing animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    // Slight rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group ref={groupRef} {...props}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.3, 0.5]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#FFD700" roughness={0.1} />
      </mesh>
      <mesh position={[0.2, 1.3, 0.5]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#FFD700" roughness={0.1} />
      </mesh>

      {/* Tail */}
      <mesh position={[0, -0.5, -0.5]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.1, 2, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.4, 1.6, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>
      <mesh position={[0.4, 1.6, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>
    </group>
  )
} 