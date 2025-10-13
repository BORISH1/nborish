// components/Animation/GlobalWaterBackground.tsx
'use client';

import WaterBall from './WaterBall';

const GlobalWaterBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Ocean Blue Theme */}
      <WaterBall 
        size="w-56 h-56 md:w-72 md:h-72" 
        positionClasses="top-[5%] left-[10%]" 
        animationDelay={0}
        color="from-blue-500 via-cyan-400 to-teal-300"
        intensity="high"
      /> 
      
      {/* Purple Deep Ocean */}
      <WaterBall 
        size="w-48 h-48 md:w-64 md:h-64" 
        positionClasses="top-[0%] right-[30%]" 
        animationDelay={2}
        color="from-purple-600 via-blue-500 to-indigo-400"
        intensity="medium"
      /> 

      {/* Tropical Teal */}
      <WaterBall 
        size="w-64 h-64 md:w-80 md:h-80" 
        positionClasses="bottom-[15%] left-[25%]" 
        animationDelay={4}
        color="from-teal-400 via-emerald-300 to-cyan-200"
        intensity="high"
      />

      {/* Deep Sea Blue */}
      <WaterBall 
        size="w-52 h-52 md:w-60 md:h-60" 
        positionClasses="top-[35%] right-[5%]" 
        animationDelay={6}
        color="from-sky-600 via-blue-400 to-cyan-300"
        intensity="medium"
      /> 
      
      {/* Aqua Marine */}
      <WaterBall 
        size="w-36 h-36 md:w-48 md:h-48" 
        positionClasses="bottom-[5%] left-[5%]" 
        animationDelay={8}
        color="from-green-400 via-teal-300 to-cyan-200"
        intensity="low"
      /> 
      
      {/* Royal Blue */}
      <WaterBall 
        size="w-72 h-72 md:w-96 md:h-96" 
        positionClasses="top-[60%] right-[20%]" 
        animationDelay={10}
        color="from-indigo-500 via-purple-400 to-blue-300"
        intensity="high"
      />

      {/* Crystal Blue */}
      <WaterBall 
        size="w-40 h-40 md:w-52 md:h-52" 
        positionClasses="top-[20%] left-[40%]" 
        animationDelay={1}
        color="from-cyan-400 via-blue-300 to-sky-200"
        intensity="medium"
      />

      {/* Additional balls for more coverage */}
      <WaterBall 
        size="w-44 h-44 md:w-56 md:h-56" 
        positionClasses="top-[70%] left-[15%]" 
        animationDelay={3}
        color="from-violet-500 via-purple-300 to-fuchsia-200"
        intensity="low"
      />

      <WaterBall 
        size="w-60 h-60 md:w-76 md:h-76" 
        positionClasses="bottom-[25%] right-[10%]" 
        animationDelay={5}
        color="from-blue-600 via-sky-400 to-cyan-200"
        intensity="high"
      />

      <WaterBall 
        size="w-32 h-32 md:w-40 md:h-40" 
        positionClasses="top-[10%] right-[15%]" 
        animationDelay={7}
        color="from-emerald-400 via-teal-300 to-cyan-200"
        intensity="medium"
      />
    </div>
  );
};

export default GlobalWaterBackground;