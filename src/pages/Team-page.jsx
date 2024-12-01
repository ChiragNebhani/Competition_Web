"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

export function CanvasRevealEffectDemo() {

  return (<div className="h-max flex flex-col gap-12 ">
    <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: 'rgb(192, 255, 20)' }}
      >
        Organizer's & Details
      </h2>
    <div
      className=" flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
      <Card title="Executer" icon={<AnimatedTooltip items={[{
        id: 1,
        name: "Aishwary Nuwal",
        designation: "93524 02668",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      }]} />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="Management" icon={<AnimatedTooltip items={[{
        id: 1,
        name: "Daksh Singh",
        designation: "88240 60163",
        image:
          "https://res.cloudinary.com/dylnk52kz/image/upload/v1729418200/WhatsApp_Image_2023-11-02_at_10.08.52_8ae60b9b_lapxtu.jpg",
      }]} />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
        {/* Radial gradient for the cute fade */}
        <div
          className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card title="Management" icon={<AnimatedTooltip items={[{
        id: 1,
        name: "Bhavesh Khandelwal",
        designation: "94620 63106",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      }]} />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]} />
      </Card>
    </div>
  </div>);
}

const Card = ({
  title,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#000] rounded-2xl group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>)
  );
};

// const AceternityIcon = () => {
//   return (
//     (

//     )
//   );
// };

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
