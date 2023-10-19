/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThreeElements } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import tree from "../assets/layerTree.glb";

export default function Box(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(tree as string) as any;

  return (
    <group {...props}>
      <mesh geometry={nodes.pole.geometry} material={materials.brown} />
      <mesh
        geometry={nodes.leavesLayer1.geometry}
        material={materials.green1}
      />
      <mesh
        geometry={nodes.leavesLayer2.geometry}
        material={materials.green2}
      />{" "}
      <mesh
        geometry={nodes.leavesLayer3.geometry}
        material={materials.green3}
      />
    </group>
  );
}
