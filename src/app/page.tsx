"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%230000ED&color2=%23000000&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=0.8&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.1&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex justify-between w-full">
        <div className="flex gap-2">
          <a href="https://linkedin.com/in/joaquinmetayer" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/joaquinmetayer" target="_blank">
            Github
          </a>
          <a href="https://instagram.com/joaquinmetayer" target="_blank">
            Instagram
          </a>
          <a href="mailto:joaquinmetayer@gmail.com" target="_blank">
            Email
          </a>
        </div>
        <div></div>
      </div>
      <div className="fixed bottom-0 left-0 p-4 flex justify-between w-full">
        <h1>Joaquin Metayer</h1>
        <div className="flex">
          <h2>Software Engineer</h2>
        </div>
      </div>
    </div>
  );
}
