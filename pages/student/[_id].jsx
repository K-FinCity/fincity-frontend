import StudentButton from "@/components/StudentButton";
import { studentButtons } from "@/constants/studentButton";
import Link from "next/link";

export default function Student() {
  return (
    <main className="bg-[#5D269A] min-h-screen lg:p-20 text-black min-w-full grid place-items-center lg:min-h-fit lg:min-w-fit">
      <div className="bg-[#F0E6FE] w-[302px] h-[725px] rounded-3xl p-8 border-6 border-[#8037D9] drop-shadow-2xl shadow-[#360D5E] lg:w-[1278px] lg:h-[853px] lg:p-10 md:w-[645px] md:h-[1029px]">
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
        <div className="grid-rows-2 lg:grid lg:grid-cols-2">
          <section className="bg-[#F9F5FE] rounded-2xl drop-shadow-md grid-rows-2 w-[234px] h-[271px] p-8 md:w-[557px] md:h-[330px] md:grid md:grid-cols-2 lg:h-[617px] lg:w-[387px] lg:flex lg:flex-col">
            <img src="https://picsum.photos/165/100" className="rounded-2xl" />
            <div className="bg-[#CFB0F8] rounded-2xl w-[170px] h-[109px] p-5 lg:w-[328px] lg:h-[313px] lg:p-8 lg:text-3xl md:w-[274px] md:h-[236px]">
              <div className="grid grid-rows-3">
                <p>Nombre</p>
                <p>Tareas completadas</p>
                <p>Tareas pendientes</p>
              </div>
            </div>
          </section>
          <section className="lg:p-10">
            <div className="flex flex-row space-y-5">
              <input
                type="checkbox"
                className="checkbox size-9 md:size-12 lg:size-14 self-center md:self-center"
                disabled
              />
              <p className="bg-[#CFB0F8] w-[191px] h-[40px] text-base p-2 md:w-[395px] md:h-[67px] lg:w-[490px] lg:h-[74px] lg:text-[36px] lg:p-8 rounded-2xl ">
                Task1
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
