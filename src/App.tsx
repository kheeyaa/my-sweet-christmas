import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Box from "./threejs/Box";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 10, 20], fov: 15 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, -2.5, 0]} />

      <Environment preset="park" background blur={1} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
