import React, { useRef } from "react";
import { Box, ServesBox, TestmonilBox } from "./box.jsx";
import { FaGem, FaMobileAlt } from "react-icons/fa";

import {
  RiArrowDownCircleFill,
  RiLayout2Fill,
  RiMacbookFill,
  RiStarFill,
  RiWindow2Line,
} from "react-icons/ri";
import ContactForm from "./contant.jsx";
import FecuntalAskedQu from "./FecuntalAskedQu.jsx";

const Serves = ({active}) => {
  const glowRefs = useRef([]);
  return (
    <>
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pr-15 text-right text-[#e5f48c] leading-19 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] ${active?.textCss}`}
      >
        MY
      </h2>
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pr-15 text-right text-[#e5f48c] leading-19 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] ${active?.textCss}`}
      >
        SERVICES 
      </h2>
      <div className="w-[90%] m-auto mb-20 grid gap-6 ">
        <div className="grid grid-cols-1 w-[100%] gap-4 ">
          <ServesBox
            icon={{
              color: "#e5f48c",
              boxcss: `w-full h-70 mt-10 `,
              font: ["Audiowide", "sans-serif"],
              index: 10,
              glowRefs: glowRefs,
              classPorp: "text-white text-3xl block",
              contant: [
                <RiLayout2Fill className="text-5xl text-[#6D6D6F] p-2 " />,
                "UI/UX Design",
                "Elevate your digital presence with user-centric UI/UX design. I specialize in creating interfaces that blend aesthetics & functionality",
              ],
              contantCss: [
                `dxs`,
                `text-4xl text-white p-2 `,
                `text-[0.9111rem] text-[#fffdf2b3] font-normal leading-[25px] p-2 font-serif`,
              ],
            }}
          />
        </div>
        <div className="grid grid-cols-4 w-full gap-4">
          <ServesBox
            icon={{
              glowRefs: glowRefs,
              index: 11,
              contant: [
                <RiWindow2Line className="text-5xl text-[#6D6D6F] p-2 " />,
                "Website",
                "Bring your brand to life on the web with our custom website design and development services. From concept to launch,  and responsive websites",
              ],
              contantCss: [
                `dxs`,
                `text-4xl text-white p-2 `,
                `text-[0.9111rem] text-[#fffdf2b3] font-normal leading-[25px] p-2 font-serif`,
              ],
            }}
          />
          <ServesBox
            icon={{
              glowRefs: glowRefs,
              index: 12,
              contant: [
                <RiMacbookFill className="text-5xl text-[#6D6D6F] p-2 " />,
                "Landing Page",
                "Make a lasting first impression with captivating landing pages. I design and build high-converting pages that drive engagement.",
              ],
              contantCss: [
                `dxs`,
                `text-4xl text-white p-2 `,
                `text-[0.9111rem] text-[#fffdf2b3] font-normal leading-[25px] p-2 font-serif`,
              ],
            }}
          />
          <ServesBox
            icon={{
              glowRefs: glowRefs,
              index: 13,
              contant: [
                <FaGem className="text-5xl text-[#6D6D6F] p-2 " />,
                "Logo",
                "Your logo is your visual identity. Let me create a unique and memorable logo that represents your brand's essence and sets you apart in the market.",
              ],
              contantCss: [
                `dxs`,
                `text-4xl text-white p-2 `,
                `text-[0.9111rem] text-[#fffdf2b3] font-normal leading-[25px] p-2 font-serif`,
              ],
            }}
          />
          <ServesBox
            icon={{
              glowRefs: glowRefs,
              contant: [
                <FaMobileAlt className="text-5xl text-[#6D6D6F] p-2 " />,
                "UI/UX Design",
                "Elevate your digital presence with user-centric UI/UX design. I specialize in creating interfaces that blend aesthetics & functionality",
              ],
              index: 14,
              contantCss: [
                `dxs`,
                `text-4xl text-white p-2 `,
                `text-[0.9111rem] text-[#fffdf2b3] font-normal leading-[25px] p-2 font-serif`,
              ],
            }}
          />
        </div>
      </div>

      {/* work togather  */}
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#e5f48c] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] -mt-20`}
      >
        WORK
      </h2>
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#e5f48c] leading-18 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        TOGETHER
      </h2>

      <div className="w-[90%] m-auto mb-40">
        <Box
          icon={{
            color: "#e5f48c",
            driction: " flex-row justify-between",
            icon: (
              <RiArrowDownCircleFill
                className="group-hover:text-white group-hover:text-[132px] 
                            rounded-full group-hover:bg-transparent transition-all duration-500 text-9xl  overflow-hidden  text-[#6a6a6a] absolute right-2 bottom-2 justify-between"
              />
            ),
            font: ["Audiowid", "sans-serif"],
            index: 15,
            glowRefs: glowRefs,
            classabout: "text-3xl mr-20 mb-9",
            text: "Hire Me ",
            css: " block text-left w-20 absolute whitespace-break-spaces break-word left-7 top-7 text-wrap text-5xl font-bold text-white",
            istext: false,
          }}
          className="scroll-animation invisible"
        />
      </div>
      {/* // TESTIMON IALS */}

      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#505050] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] -mt-20`}
      >
        TESTIMON
      </h2>
      <h2
        className={`text-[72px] w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#505050] leading-18 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        IALS
      </h2>
      <div className="w-[90%] m-auto grid grid-cols-3 gap-x-10 mb-5">
        <TestmonilBox
          contant={{
            work: "Developer",
            name: "Ajay",
            img: "/ajay.png",
            workdis: "Ajay is a design genius!",
            discription:
              "This is unbelievable. He is too fast and he work with details. I will hire him again.Highly recommend!",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
        <TestmonilBox
          contant={{
            work: "Designer",
            name: "Adarsh",
            img: "/Adarsh.png",
            workdis: "Adarsh is a design genius!",
            discription:
              "Adarsh was a game-changer for our online store. They designed a websiti that perfectly captures our brand's identity",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
        <TestmonilBox
          contant={{
            work: "Designer",
            name: "Dheeraj dwivedi",
            img: "/dheeraj.jpg",
            workdis: "Dheeraj is a design genius!",
            discription:
              "Dheeraj was a game-changer for our online store. They designed a websiti that perfectly captures our brand's identity",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
      </div>
      <FecuntalAskedQu />
    </>
  );
};
export default Serves;
