import { ThreeElements } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import tree from "../assets/layerTree.glb";
import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Box(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(tree as string) as any;

  const poleRef = useRef<any>(null);
  const leavesLayer1Ref = useRef<any>(null);
  const leavesLayer2Ref = useRef<any>(null);
  const leavesLayer3Ref = useRef<any>(null);

  useEffect(() => {
    gsap.to(poleRef?.current.scale, {
      y: 1,
    });
  }, [leavesLayer1Ref]);

  return (
    <group
      {...props}
      onClick={() => {
        if (leavesLayer1Ref?.current.scale.x !== 1)
          gsap.to(leavesLayer1Ref?.current.scale, {
            x: 1,
            y: 1,
            z: 1,
          });
        else if (leavesLayer2Ref?.current.scale.x !== 1)
          gsap.to(leavesLayer2Ref?.current.scale, {
            x: 1,
            y: 1,
            z: 1,
          });
        else if (leavesLayer3Ref?.current.scale.x !== 1) {
          gsap.to(leavesLayer3Ref?.current.scale, {
            x: 1,
            y: 1,
            z: 1,
          });
        }
      }}
    >
      <mesh
        geometry={nodes.pole.geometry}
        material={materials.brown}
        scale={new Vector3(1, 0, 1)}
        ref={poleRef}
      />
      <mesh
        geometry={nodes.leavesLayer1.geometry}
        material={materials.green1}
        scale={new Vector3(0, 0, 0)}
        ref={leavesLayer1Ref}
      />
      <mesh
        geometry={nodes.leavesLayer2.geometry}
        scale={new Vector3(0, 0, 0)}
        material={materials.green2}
        ref={leavesLayer2Ref}
      />
      <mesh
        geometry={nodes.leavesLayer3.geometry}
        material={materials.green3}
        scale={new Vector3(0, 0, 0)}
        ref={leavesLayer3Ref}
      />
    </group>
  );
}
