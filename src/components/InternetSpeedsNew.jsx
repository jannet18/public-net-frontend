import React from "react";

const InternetSpeedsNew = () => {
  return (
    // <div className="bg-[linear-gradient(45deg,_indigo-950,_to-blue-900)]">
    <>
      <div className="relative inline-block text-center rounded-xl p-[32px] top-2/4 left-2/4 -translate-x-1/2 translate-y-1/2 bg-[linear-gradient(45deg,_transparent_50%,_rgba(255,_255,_255,_0.08))] bg-[#223140]">
        {/* <div className="w-full h-full text-white inline-block text-center bg-[#223140] bg-gradient-to-b from-[transparent 50%] to-rgba(255,255,255,0.08) rounded-md p-6 relative top-[50%] left-[50%] transform translate-[-50%, -50%]"> */}
        <div className="w-[360px] h-[420px]">
          <h1 className="uppercase mb-[32px] leading-6 text-[#aaffff] [text-shadow:0_0_8px_#81ecee]">
            Check Location Internet Speed
          </h1>
          <span className="before:content-[''] before:absolute inset-0 before:h-[0] before:w-[0] before:left-[calc(50% before:- before:8px)] before:border-[8px] before:border-[solid_transparent_0%]  before:border-t-[120px_solid_red] before:[filter:drop-shadow(0_0_12px_#01b6be)] relative mix-blend-multiply invisible inline-block w-[240px] h-[240px] rounded-[50%] bg-[conic-gradient(rgba(1,_182,_190,_0.3)_0%,_transparent_65%)] animate-[radarRotate_2s_linear]"></span>
          <div className="flex items-center justify-center flex-wrap">
            <div className="flex w-[100%] text-[64px] flex-col ml-[0] mr-[0] my-[12px]">
              24 <small className="font-[40%]">Mbps</small>
            </div>
            <button className="before:content-[''] before:absolute before:h-[100%] before:w-[100%] before:top-[-2px] before:left-[-2px] before:border-[2px] before:border-solid before:border-[#7ed6d4] before:rounded-full before:animate-[btnRing_2s_linear] after:content-[''] after:absolute  after:h-[100%] after:w-[100%] after:top-[-1px] after:left-[-1px] after:bg-[linear-gradient(45deg,_#25476e_#c7ecee)] after:rounded-full after:z-[-1] h-[240px]  w-[240px] text-[18px] font-bold leading-6 rounded-full cursor-pointer bg-[#223140] text-[#eaeaea] border-0 [box-shadow:0_0_12px_#81ecec] absolute top-[18%] hover:bg-[#1f3c4e]">
              Check
            </button>
          </div>
          {/* <div class="relative w-24 h-24 rounded-full bg-blue-500">
            <div class="absolute inset-0 w-full h-full rounded-full bg-red-500 mix-blend-multiply"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default InternetSpeedsNew;
