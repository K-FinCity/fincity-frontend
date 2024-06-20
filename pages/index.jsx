import Image from "next/image";
import { Chakra_Petch } from "next/font/google";
import Card_1 from "../components/Card_1";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function Home() {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className={chakra.className}>
        <section>{/* Victor */}</section>
        <section className="bg-zinc-50 flex flex-col">
          <div className=" text-center justify-center align-middle p-6">
            <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-3">
              ¿Qué nos hace diferentes?
            </h3>
            <p className="text-[#09090b] text-base leading-[15px] p-3">
              Nos esforzamos por ofrecer una experiencia en línea que sea tanto
              educativa como divertida para los niños. Creemos en empoderar a
              los niños con el conocimiento necesario para tomar decisiones
              financieras inteligentes, desde ahorrar dinero para alcanzar metas
              hasta entender la importancia de un balance entre diversión y
              obligación
            </p>
          </div>
          <div className="text-center justify-center align-middle p-6 flex flex-col gap-8">
            <div>
              <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-1">
                ¿Cómo funciona?
              </h3>
              <p className="text-[#09090b] text-base leading-[15px] p-1">
                ¡Es simple!
              </p>
            </div>

            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <Card_1
                  title="Seguimiento de Tareas y Ganancias 1"
                  content="Los padres pueden marcar las tareas completadas a medida que las realizan. Cada tarea completada les otorga una cantidad específica de dinero virtual, que se acumula en su cuenta."
                ></Card_1>
              </div>
              <div id="item2" className="carousel-item w-full">
                <Card_1
                  title="Asignación de Tareas: "
                  content="El maestro en conjunto con los padres pueden asignar tareas domésticas a sus hijos directamente a través de la aplicación. Desde hacer la cama hasta ayudar con la limpieza, las tareas se pueden personalizar según las necesidades y la edad del niño."
                ></Card_1>
              </div>
              <div id="item3" className="carousel-item w-full">
                <Card_1
                  title="Canje de Recompensas:"
                  content="Cuando los niños hayan alcanzado suficiente dinero, ¡pueden canjearlo por recompensas emocionantes! Las opciones de recompensas son personalizables y están diseñadas para motivar y reforzar el comportamiento positivo."
                ></Card_1>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div className="text-center justify-center align-middle p-6 flex flex-col gap-8">
            <p className="text-[#09090b] text-base leading-[15px] p-1">
              A través de esta experiencia, los niños aprenden sobre la
              importancia del trabajo duro, la responsabilidad y la gestión del
              dinero de una manera práctica y divertida. Además, pueden
              desarrollar habilidades de planificación y toma de decisiones
              mientras administran sus ganancias y eligen cómo gastarlas.
            </p>
          </div>
        </section>
        <section>{/* Moi  */}</section>
      </main>
      <footer></footer>
    </>
  );
}
