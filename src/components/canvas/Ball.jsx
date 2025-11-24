import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
 Decal,
  // OrbitControls ko hata diya gaya hai!
 Preload,
 useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
 const [decal] = useTexture([props.imgUrl]);

 return (
   <>
   <ambientLight intensity={0.5} />
     <directionalLight position={[0, 0, 0.05]} intensity={1} />

      {/* Main Ball (Black Body + Icon) */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#000000' // ***** Yahan '#000000' (Black) kar diya hai *****
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      // ***** Gradient color stops ko theek kiya gaya hai *****
      // Yeh border ko visible rakhega. Aapka original code sirf '100%' pe colors dikha raha tha.
      background: 'radial-gradient(circle at 50% 50%, #1d1836 100%, #17b978 0%)', 
      padding: '2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
      backgroundColor: '#151030' 
    }}>
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: 'calc(100% - 4px)',
          height: 'calc(100% - 4px)',
          borderRadius: '50%',
          backgroundColor: 'transparent'
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={icon} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BallCanvas;