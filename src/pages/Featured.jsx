import React from "react";
import { cn } from "../lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Robo Action Arena",
      description:
        "Take on the challenge of building a robot that can pick and place objects such as Pizza, Medicine, and Grocery items from designated areas to their target locations, all within a time limit. Test your precision and speed!",
      skeleton: <SkeletonThree img="https://i.pinimg.com/564x/77/d8/53/77d8533c8b16c46f0a02a38baac178a3.jpg" />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "The Young Scientist Challenge",
      description:
        "A prestigious competition encouraging students to innovate and create. Showcase your scientific ideas, explore creativity, and inspire others. This challenge aims to build scientific awareness and nurture future scientists.",
      skeleton: <SkeletonThree img="https://i.pinimg.com/736x/a5/cc/94/a5cc94c206247efa98823ce09072978c.jpg" />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Line Follower Robot",
      description:
        "Build a robot that can follow a line and navigate through the track. This challenge requires teams to achieve precision and speed using provided kits.",
      skeleton: <SkeletonThree img="https://i.pinimg.com/564x/d3/9a/6c/d39a6cb7ad65ef7f2aa4708dd9bf1abf.jpg" />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Robo Soccer",
      description:
        "Build your own soccer-playing robot! Compete against others to build the fastest and most efficient robot to dominate the arena.",
      skeleton: <SkeletonThree img="https://i.pinimg.com/564x/ae/16/c0/ae16c0b924f28503240491cd9246ded9.jpg" />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-[92rem] mx-auto">
      <div className="text-center">
        <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ color: "rgb(192, 255, 20)" }}>
          Competitions We Are Going to Organize
        </h4>
        <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
          From building robots to showcasing creativity, explore our diverse set of challenges designed to inspire innovation.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 gap-y-10 gap-x-5 lg:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div
      className={cn(
        `p-4 rounded-xl h-[35rem] sm:h-[30rem] sm:p-6 relative overflow-hidden bg-[url('https://res.cloudinary.com/dylnk52kz/image/upload/v1729155348/original-5c4df539ec384d47ae8515774a5434a2_r1u7sd.jpg')] bg-cover`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="font1 max-w-2xl md:w-max mx-auto md:mx-0 px-3 text-left tracking-tight text-white dark:text-white text-lg md:text-2xl font-semibold bg-red-600">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl mx-auto text-center font-medium p-3 rounded-xl bg-[#ffffffcc] text-black",
        "text-left max-w-xl md:mx-0 my-3"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonThree = ({ img }) => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <img
            src={img}
            alt="header"
            className="h-full w-full object-cover object-center rounded-md group-hover/image:blur-sm transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};
