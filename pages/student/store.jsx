import StudentButton from "@/components/StudentButton";
import { studentButtons } from "@/constants/studentButton";
import { useEffect, useState } from "react";

export default function Store() {
  return (
    <div className="bg-[#5D269A] min-h-screen lg:p-20 text-black min-w-full grid place-items-center lg:min-h-fit lg:min-w-fit">
      <div className="bg-[#F0E6FE] w-[313px] h-[588px] rounded-3xl p-8 border-6 border-[#8037D9] drop-shadow-2xl shadow-[#360D5E] lg:w-[1278px] lg:h-[853px] lg:p-10 md:w-[645px] md:h-[1029px]">
        <nav>
          <p>Fincity</p>
          <div className="text-black flex flex-row space-x-3 p-2 justify-evenly">
            {studentButtons.map((button, index) => {
              return (
                <StudentButton
                  key={`studentButton ${index}`}
                  title={button.title}
                  link={button.link}
                />
              );
            })}
          </div>
        </nav>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
