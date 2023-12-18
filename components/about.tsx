"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        For years, I dedicated myself to <span className="font-medium">algorithmic trading development</span> and embarked on several projects <span className="underline"><a href="https://www.mql5.com/es/users/joaquinmetayer/seller" target="_blank">(see here)</a></span>. Despite spending a significant amount of time in front of computers, <span className="italic">I found joy in creating my own things on the internet</span>, regardless of the specific type. Everything led to creation, and that's where I discovered that programming was my true calling.
      </p>

      <p className="mb-3">
        Starting my journey as a web developer, considering my background in developing various programs and algorithms for over 5 years, I officially began my career around mid-2022. I delved into <span className="underline">frontend technologies</span> as a priority but also gained an <span className="font-medium">understanding of backend and overall app architecture</span> for a more comprehensive grasp of my work.
      </p>

      <p className="mb-3">
        From that moment, a new adventure filled with learning and a very rewarding process has begun.
      </p>

      <p>
        When I'm not programming, I seek improvement, learning, and personal growth, physically and mentally, in addition to advancing in my career as a developer. I also dedicate time to my side project and document the entire process on <span className="underline"><a href="https://www.youtube.com/channel/UChepHxgZmukOteW-6c796wQ" target="_blank">YouTube</a></span>.
      </p>
    </motion.section>
  );
}
