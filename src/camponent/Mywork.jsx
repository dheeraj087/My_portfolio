import { useRef, useState } from "react";
import MaskEffect from "./zoom";

const My_work = () => {
  const reff = useRef(null);
  const [pos, setpos] = useState({ x: 0, y: 0 });
  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setpos({ x: e.clientX - rect.left - 30, y: e.clientY - rect.top - 30 });
    console.log(pos.x, e.currentTarget.getBoundingClientRect());
  };

  return (
    <>
      <h2
        className={`text-[72px] mt-15 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#f1fb87] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        MY
      </h2>
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#f1fb87] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        WORK
      </h2>

      <div
        className=" group relative w-40 h-60 bg-blue-600 overflow-hidden hover:text-2xl"
        onMouseMove={handleMouseMove1}
      >
        <div
          className="absolute w-20 h-20 rounded-full border-2 border-[#0000007c] bg-[#00000000] shadow-[6px_6px_11px_0px_#0000007c,-6px_-6px_11px_0px_#0000007c]"
          style={{
            top: `${pos.y}px`,
            left: `${pos.x}px`,
            pointerEvents: "none", 
          }}
        ></div>
      </div>
      <div className={`w-[90%] m-auto grid gap-13 `}>
        <div className={`grid grid-cols-2 gap-13 `}>
          <MaskEffect />
          <MaskEffect />
        </div>
        <div className={`grid grid-cols-1 gap-13`}>
          <MaskEffect data={{css:"w-full"}}/>
        </div>

        <div className={`grid grid-cols-2 gap-13`}>
          <MaskEffect />
          <MaskEffect />
        </div>
        <div className={ `grid grid-cols-2 gap-13 `}>
          <MaskEffect />
          <MaskEffect />
        </div>
      </div>
    </>
  );
};
export default My_work;
