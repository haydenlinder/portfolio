import { createRoot } from "react-dom/client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import Scroll from "./components/Scroll";
import state from "./state";
import Layout from "./components/Layout";
import Bulb from "./components/Bulb";
import Header from "./components/Header";
import "./index.css";
import Scrollbar from "./components/Scrollbar";

const r = document.getElementById("root");

r &&
  createRoot(r).render(
    <Scroll pages={state.pages}>
      <Canvas
        camera={{
          position: [0, 0, 50],
          far: 100,
        }}
        shadows
      >
        <Suspense
          fallback={
            <Html center>
              <Loader
                dataStyles={{ color: "black" }}
                barStyles={{ border: "1px solid black", background: "black" }}
                innerStyles={{ background: "white" }}
              />
            </Html>
          }
        ></Suspense>
        <Bulb position={[10, 0, 50]} />

        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <Layout />
        <Header />
        <Scrollbar />
      </Canvas>
    </Scroll>
  );
