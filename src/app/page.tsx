"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex gap-2">
          <a href="https://instagram.com/joaquinmetayer" target="_blank">
            Instagram
          </a>
          <a href="https://youtube.com/@joaquinmetayer" target="_blank">
            Youtube
          </a>
          <a href="https://linkedin.com/in/joaquinmetayer" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/joaquinmetayer" target="_blank">
            Github
          </a>
        </div>
        <a
          className="bg-slate-100 bg-opacity-20 px-3 py-1 rounded-xl"
          href="mailto:joaquinmetayer@gmail.com"
          target="_blank"
        >
          Email
        </a>
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
