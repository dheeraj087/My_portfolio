import { useState, useRef } from "react";

const MaskEffect = ({ data }) => {
  const [pos, setPos] = useState({ x: -999, y: -999 }); // hide initially
  const [isHover, setIsHover] = useState(false); // to toggle overlay
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setPos({ x: -999, y: -999 }); // hide lens
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-110 max-sm:w-[90%] m-auto max-sm:h-120 h-100 border-[#51515193] border-2 rounded-xl bg-[#19191C] p-17 flex items-center hover:scale-3d hover:scale-102 hover:shadow-[0_10px_25px_rgba(230,244,141,0.3)] transform-3d ease-in-out duration-500 transition-transform  origin-left justify-center hover:rotate-x-10 hover:rotate-z-1 hover:rotate-y-10 ${data?.css}`}
      style={{
        perspective: "1300px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Main UI (Image or App) */}
      <img
        src="/My_portfolio/assets/Adarsh.png"
        alt="App"
        className="w-[220px] rounded-xl z-10 relative"
      />

      {/* Overlay */}
      {isHover && (
        <div
          className="absolute  w-full h-full pointer-events-none z-20 border-[#51515193]  rounded-xl"
          style={{
            backgroundColor: "rgba(10, 10, 0)",
            maskImage: `radial-gradient(circle 100px at ${pos.x}px ${pos.y}px, transparent 20%, black 90%)`,
            WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, transparent 20%, black 100%)`,
            transition: "mask-image 0.1s ease",
          }}
        ></div>
      )}
    </div>
  );
};

export default MaskEffect;
