import StudentButton from "@/components/StudentButton";
import TaskButton from "@/components/TaskButton";
import { studentButtons } from "@/constants/studentButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Student() {
  //   const router = useRouter();
  //   let id = router.query._id;
  //   const [student, setStudent] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:3002/students/${id}`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setStudent(json);
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching student", error);
  //       });
  //   });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.data));
  });
  return (
    <main className="bg-[#5D269A] min-h-screen lg:p-20 text-black min-w-full grid place-items-center lg:min-h-full lg:min-w-max">
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
        <div className="grid-rows-2 lg:grid lg:grid-cols-2 mt-4">
          <section className="bg-[#F9F5FE] rounded-2xl ml-4 drop-shadow-md grid-rows-2 w-[234px] h-[271px] p-8 md:w-[557px] md:h-[330px] md:grid md:grid-cols-2 lg:h-[617px] lg:w-[387px] lg:flex lg:flex-col">
            <img
              src="https://picsum.photos/165/100"
              className="rounded-2xl ml-4"
            />
            <div className="bg-[#CFB0F8] rounded-2xl ml-3 mt-4 w-[170px] h-[109px] p-5 lg:w-[328px] lg:h-[313px] lg:p-8 lg:text-3xl md:w-[274px] md:h-[236px]">
              <div className="grid grid-rows-3">
                <p>Nombre</p>
                <p>Tareas completadas</p>
                <p>Tareas pendientes</p>
              </div>
            </div>
          </section>
          <section className="lg:p-10">
            <div className="flex flex-col space-y-5">
              {tasks.map((task, index) => {
                return (
                  <TaskButton key={`task${index}`} title={task.task_name} />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
