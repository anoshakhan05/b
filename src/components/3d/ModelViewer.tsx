"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, RoundedBox } from "@react-three/drei";
import { Suspense } from "react";

export function ModelViewer() {
    return (
        <div className="w-full h-full min-h-[400px] relative">
            <Canvas shadows camera={{ position: [0, 0.5, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI / 6, 0]} position={[0, -0.5, 0]}>
                        {/* Bag Body */}
                        <RoundedBox args={[2.2, 1.8, 0.6]} radius={0.1} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
                            <meshStandardMaterial color="#151515" roughness={0.4} metalness={0.2} envMapIntensity={1} />
                        </RoundedBox>

                        {/* Handles - arcs */}
                        <group position={[0, 0.9, 0]}>
                            <mesh position={[0, 0, 0.15]} castShadow>
                                <torusGeometry args={[0.4, 0.04, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#151515" roughness={0.4} metalness={0.2} />
                            </mesh>
                            <mesh position={[0, 0, -0.15]} castShadow>
                                <torusGeometry args={[0.4, 0.04, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#151515" roughness={0.4} metalness={0.2} />
                            </mesh>
                        </group>

                        {/* Gold Clasp/Hardware Detail */}
                        <mesh position={[0, 0.4, 0.31]}>
                            <boxGeometry args={[0.3, 0.15, 0.05]} />
                            <meshStandardMaterial color="#C6A85E" roughness={0.1} metalness={0.9} />
                        </mesh>
                        <mesh position={[0, 0.6, 0.31]}>
                            <cylinderGeometry args={[0.05, 0.05, 0.05, 32]} />
                            <meshStandardMaterial color="#C6A85E" roughness={0.1} metalness={0.9} />
                        </mesh>
                    </group>

                    <Environment preset="city" />
                    <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2} far={1} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={4} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
            </Canvas>
            <div className="absolute bottom-4 right-4 text-xs text-muted-text pointer-events-none opacity-50 uppercase tracking-widest">
                Drag to rotate
            </div>
        </div>
    );
}
