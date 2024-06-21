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
        <section className="relative min-h-96 flex flex-col justify-center items-center gap-6 text-center p-8 bg-[#5D269A]">
          <div className="absolute inset-0 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 360 558"
              fill="none"
              className="absolute bottom-0 w-full"
            >
              <g filter="url(#filter0_d_756_384)">
                <path
                  d="M-26.3587 481.424C-55.352 478.348 -61.512 458.78 -60.9679 449.38L-60.9679 0L435.968 0V449.38C436.512 458.78 430.352 478.348 401.359 481.424C365.117 485.27 366.096 498.729 360.546 509.624C354.995 520.519 346.18 531.414 315.162 522.762C284.145 514.11 253.78 511.226 230.598 531.735C212.053 548.141 194.101 550 187.5 550C180.899 550 162.947 548.141 144.402 531.735C121.22 511.226 90.8554 514.11 59.8378 522.762C28.8201 531.414 20.0045 520.519 14.454 509.624C8.90346 498.729 9.88303 485.27 -26.3587 481.424Z"
                  fill="#1D1534"
                />
                <path
                  d="M-26.3587 481.424C-55.352 478.348 -61.512 458.78 -60.9679 449.38L-60.9679 0L435.968 0V449.38C436.512 458.78 430.352 478.348 401.359 481.424C365.117 485.27 366.096 498.729 360.546 509.624C354.995 520.519 346.18 531.414 315.162 522.762C284.145 514.11 253.78 511.226 230.598 531.735C212.053 548.141 194.101 550 187.5 550C180.899 550 162.947 548.141 144.402 531.735C121.22 511.226 90.8554 514.11 59.8378 522.762C28.8201 531.414 20.0045 520.519 14.454 509.624C8.90346 498.729 9.88303 485.27 -26.3587 481.424Z"
                  fill="url(#paint0_linear_756_384)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_756_384"
                  x="-65"
                  y="0"
                  width="505"
                  height="558"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_756_384"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_756_384"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_756_384"
                  x1="-61"
                  y1="21.9458"
                  x2="599.661"
                  y2="119.883"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9855E9" />
                  <stop offset="0.505208" stop-color="#B381F2" />
                  <stop offset="1" stop-color="#F0E6FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="relative font-bold text-lg">
            ¿Listo para transformar la forma en que tus hijos aprenden sobre el
            dinero y la responsabilidad? ¡Únete a nosotros!
          </p>
          <p className="relative text-base">
            ¡Regístrate ahora para empezar a construir un futuro financiero
            brillante para tus hijos y hacer que el aprendizaje sea una
            experiencia emocionante para toda la familia!
          </p>
          <button className="relative font-bold bg-white text-gray-950 px-5 py-2 rounded-3xl mb-10">
            Regístrate
          </button>
        </section>
      </main>

      <footer className={`${chakra.className} bg-[#5D269A] relative`}>
        <section className="p-5 pb-10 flex flex-col gap-3 text-xs">
          <h3 className="font-bold">Explora</h3>
          <a href="#">Home</a>
          <a href="#">Contacto</a>
          <a href="#">Nosotros</a>
        </section>
        <span className="font-bold text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          FinCity
        </span>
        <span className="text-xs text-center absolute bottom-3 left-1/2 transform -translate-x-1/2">
          Todos los derechos reservados
        </span>
      </footer>
    </>
  );
}
