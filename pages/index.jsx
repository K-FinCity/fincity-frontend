'use client';

import { Chakra_Petch } from 'next/font/google';
// Import Images
import Image from 'next/image';
import skullCrasher from '../assets/characters/Skullcrasher.webp';
import listIcon from '../assets/icons/list-icon.webp';
import pigIcon from '../assets/icons/pig-icon.webp';
import cartIcon from '../assets/icons/cart-icon.webp';
import tasksIcon from '../assets/icons/tasks-icon.webp';
// Import Components
import LandingPageCard from '../components/LandingPageCard';
import Link from 'next/link';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

export default function Home() {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className={chakra.className}>
        <section className="bg-zinc-50">
          <div className="relative bg-none">
            <div className="container mx-auto px-4 text-center py-24">
              <h1 className="text-gray-900 font-chakra text-2xl font-normal leading-9 mt-24">
                Ampliando los horizontes financieros de tus hijos
              </h1>
              <p className="text-gray-900 font-chakra text-base font-normal leading-6 opacity-60 mt-4">
                Creamos contenido y actividades para que tus hijos aprendan a
                tener independencia financiera desde temprana edad de una manera
                didáctica y divertida
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-32 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center mx-auto"
              >
                <span className="font-chakra text-xs font-bold tracking-wider uppercase">
                  Learn More
                </span>
              </a>
            </div>
            <div className="wave">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="275"
                height="250"
                viewBox="0 0 90 276"
                fill="none"
              >
                <path
                  d="M10.0528 -44.4337C-0.574153 -68.4854 12.1983 -82.2733 19.9129 -86.1607L132.69 -151.273L356.73 236.775L323.886 271.913C316.662 276.65 298.335 280.817 282.819 259.588C263.424 233.052 253.171 239.991 242.011 240.655C230.851 241.319 153.033 259.449 131.177 239.22C109.841 219.472 112.67 187.994 85.9223 179.3C64.524 172.346 54.9535 159.18 51.9776 154.026C49.0017 148.871 42.385 134 47.0612 111.991C52.9066 84.4801 36.9252 62.092 16.066 41.8402C-4.79326 21.5885 -0.110119 9.7061 6.04504 0.373335C12.2002 -8.95942 23.3365 -14.3691 10.0528 -44.4337Z"
                  fill="black"
                />
                <path
                  d="M10.0528 -44.4337C-0.574153 -68.4854 12.1983 -82.2733 19.9129 -86.1607L132.69 -151.273L356.73 236.775L323.886 271.913C316.662 276.65 298.335 280.817 282.819 259.588C263.424 233.052 253.171 239.991 242.011 240.655C230.851 241.319 153.033 259.449 131.177 239.22C109.841 219.472 112.67 187.994 85.9223 179.3C64.524 172.346 54.9535 159.18 51.9776 154.026C49.0017 148.871 42.385 134 47.0612 111.991C52.9066 84.4801 36.9252 62.092 16.066 41.8402C-4.79326 21.5885 -0.110119 9.7061 6.04504 0.373335C12.2002 -8.95942 23.3365 -14.3691 10.0528 -44.4337Z"
                  fill="url(#paint0_linear_756_378)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_756_378"
                    x1="122.785"
                    y1="-145.587"
                    x2="179.964"
                    y2="397.619"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stop-color="#6B28BB"
                      stop-opacity="0.6"
                    />
                    <stop
                      offset="0.505208"
                      stop-color="#9855E9"
                    />
                    <stop
                      offset="0.676897"
                      stop-color="#CFB0F8"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="wave">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="202"
                height="238"
                viewBox="0 0 202 238"
                fill="none"
              >
                <path
                  d="M19.1368 -142.149C12.3137 -167.543 27.0447 -179.215 35.2632 -181.877L156.673 -228.973L318.723 188.777L197.314 235.873C189.45 239.45 170.701 240.765 158.615 217.412C143.507 188.222 132.313 193.511 121.183 192.461C110.053 191.41 97.8579 187.615 95.1444 158.669C92.431 129.722 84.9962 103.239 59.8927 90.5572C39.8099 80.4114 32.3658 65.9367 30.2133 60.3877C28.0608 54.8388 23.7965 39.1305 31.7841 18.0959C41.7685 -8.19726 29.3995 -32.7663 11.8833 -55.9703C-5.63289 -79.1743 0.812591 -90.2005 8.3228 -98.482C15.833 -106.764 27.6657 -110.406 19.1368 -142.149Z"
                  fill="black"
                />
                <path
                  d="M19.1368 -142.149C12.3137 -167.543 27.0447 -179.215 35.2632 -181.877L156.673 -228.973L318.723 188.777L197.314 235.873C189.45 239.45 170.701 240.765 158.615 217.412C143.507 188.222 132.313 193.511 121.183 192.461C110.053 191.41 97.8579 187.615 95.1444 158.669C92.431 129.722 84.9962 103.239 59.8927 90.5572C39.8099 80.4114 32.3658 65.9367 30.2133 60.3877C28.0608 54.8388 23.7965 39.1305 31.7841 18.0959C41.7685 -8.19726 29.3995 -32.7663 11.8833 -55.9703C-5.63289 -79.1743 0.812591 -90.2005 8.3228 -98.482C15.833 -106.764 27.6657 -110.406 19.1368 -142.149Z"
                  fill="url(#paint0_linear_756_376)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_756_376"
                    x1="35.4876"
                    y1="-86.752"
                    x2="214.991"
                    y2="229.047"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6B28BB" />
                    <stop
                      offset="0.465"
                      stop-color="#B381F2"
                    />
                    <stop
                      offset="1"
                      stop-color="#F0E6FE"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="wave">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="217"
                height="277"
                viewBox="0 0 217 277"
                fill="none"
              >
                <path
                  d="M10.3418 4.57906C-6.8466 -15.3201 1.34195 -32.2372 7.58477 -38.2084L96.4274 -133.42L424.036 172.273L335.193 267.485C329.668 274.125 313.357 283.464 292.317 267.692C266.017 247.977 258.238 257.609 247.759 261.503C237.28 265.398 224.648 267.284 209.615 242.399C194.582 217.514 176.37 196.901 148.249 196.399C125.753 195.997 112.754 186.2 108.402 182.14C104.051 178.079 93.3792 165.789 91.4235 143.374C88.9788 115.356 67.1554 98.6114 41.2907 85.335C15.4261 72.0586 16.4346 59.3265 19.5955 48.6029C22.7565 37.8794 31.8272 29.453 10.3418 4.57906Z"
                  fill="black"
                />
                <path
                  d="M10.3418 4.57906C-6.8466 -15.3201 1.34195 -32.2372 7.58477 -38.2084L96.4274 -133.42L424.036 172.273L335.193 267.485C329.668 274.125 313.357 283.464 292.317 267.692C266.017 247.977 258.238 257.609 247.759 261.503C237.28 265.398 224.648 267.284 209.615 242.399C194.582 217.514 176.37 196.901 148.249 196.399C125.753 195.997 112.754 186.2 108.402 182.14C104.051 178.079 93.3792 165.789 91.4235 143.374C88.9788 115.356 67.1554 98.6114 41.2907 85.335C15.4261 72.0586 16.4346 59.3265 19.5955 48.6029C22.7565 37.8794 31.8272 29.453 10.3418 4.57906Z"
                  fill="url(#paint0_linear_756_375)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_756_375"
                    x1="-152.949"
                    y1="-91.8207"
                    x2="244.933"
                    y2="228.964"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9855E9" />
                    <stop
                      offset="0.505208"
                      stop-color="#CFB0F8"
                    />
                    <stop
                      offset="1"
                      stop-color="#F0E6FE"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="wave">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="252"
                height="265"
                viewBox="0 0 252 265"
                fill="none"
              >
                <path
                  opacity="0.02"
                  d="M19.1739 32.1713C-5.19818 14.3582 -0.413821 -6.68201 5.02487 -14.9755L79.7768 -144.45L525.276 112.76L450.524 242.234C446.061 251.091 430.232 265.754 402.62 253.554C368.104 238.303 361.893 251.088 351.179 258.155C340.464 265.221 326.823 270.598 303.573 246.65C280.323 222.703 254.62 204.355 223.036 211.066C197.769 216.435 180.696 208.838 174.778 205.422C168.861 202.005 153.745 191.018 145.761 166.452C135.781 135.744 107.04 122.658 74.6759 114.497C42.3118 106.335 40.1472 91.8331 40.9096 79.0209C41.6721 66.2087 49.639 54.4377 19.1739 32.1713Z"
                  fill="#2F0F53"
                />
              </svg>
            </div>
          </div>
          <section className="container mx-auto px-4 py-8">
            <div className="rounded-3xl bg-purple-200 bg-opacity-20 flex flex-col items-center justify-center mx-auto mb-6 w-full max-w-md h-72 p-4">
              <h2 className="text-center text-black font-chakra text-lg font-medium mb-3">
                Para los maestros
              </h2>
              <p className="text-center text-gray-700 font-chakra text-base font-normal leading-6">
                Ofrecemos a los educadores una variedad de recursos y
                herramientas para apoyar su enseñanza de educación financiera en
                el aula. Nos esforzamos por ser un recurso integral para
                educadores que desean enseñar educación financiera de manera
                efectiva y emocionante.
              </p>
            </div>
            <div className="rounded-3xl bg-purple-200 bg-opacity-20 flex flex-col items-center justify-center mx-auto w-full max-w-md h-72 p-4">
              <h2 className="text-center text-black font-chakra text-lg font-medium mb-3">
                Para los estudiantes
              </h2>
              <p className="text-center text-gray-700 font-chakra text-base font-normal leading-6">
                Los niños pueden aprender sobre el mundo de las finanzas de una
                manera divertida y accesible. Desde entender el valor del dinero
                hasta aprender a ahorrar y gastar de manera inteligente, el
                programa de FinCity hace que el aprendizaje sobre finanzas sea
                fácil y entretenido.
              </p>
            </div>
          </section>
        </section>
        {/* Angel */}
        <section className="bg-zinc-50 flex flex-col">
          <div>
            <div className=" text-center justify-center align-middle p-6">
              <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-3">
                ¿Qué nos hace diferentes?
              </h3>
              <p className="text-[#09090b] text-base leading-[15px] p-3">
                Nos esforzamos por ofrecer una experiencia en línea que sea
                tanto educativa como divertida para los niños. Creemos en
                empoderar a los niños con el conocimiento necesario para tomar
                decisiones financieras inteligentes, desde ahorrar dinero para
                alcanzar metas hasta entender la importancia de un balance entre
                diversión y obligación
              </p>
            </div>
            <Image
              src={skullCrasher}
              className="hidden md:block md:justify-center md:align-middle md:m-auto"
              alt="Skullcrasher"
            ></Image>

            <div className="bg-purple-200">
              {/* Aquí se supone van unas ondas*/}
            </div>
          </div>
          <div className="bg-purple-200">
            <div className="text-center justify-center align-middle p-6 flex flex-col gap-8">
              <div>
                <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-1">
                  ¿Cómo funciona?
                </h3>
                <p className="text-[#09090b] text-base leading-[15px] p-1">
                  ¡Es simple!
                </p>
              </div>
              <div className="md:hidden">
                <div className="carousel w-full">
                  <div
                    id="item1"
                    className="carousel-item w-full"
                  >
                    <LandingPageCard
                      icon={tasksIcon}
                      title="Seguimiento de Tareas y Ganancias"
                      content="Los padres pueden marcar las tareas completadas a medida que las realizan. Cada tarea completada les otorga una cantidad específica de dinero virtual, que se acumula en su cuenta."
                    ></LandingPageCard>
                  </div>
                  <div
                    id="item2"
                    className="carousel-item w-full"
                  >
                    <LandingPageCard
                      icon={listIcon}
                      title="Asignación de Tareas: "
                      content="El maestro en conjunto con los padres pueden asignar tareas domésticas a sus hijos directamente a través de la aplicación. Desde hacer la cama hasta ayudar con la limpieza, las tareas se pueden personalizar según las necesidades y la edad del niño."
                    ></LandingPageCard>
                  </div>
                  <div
                    id="item3"
                    className="carousel-item w-full"
                  >
                    <LandingPageCard
                      icon={cartIcon}
                      title="Canje de Recompensas:"
                      content="Cuando los niños hayan alcanzado suficiente dinero, ¡pueden canjearlo por recompensas emocionantes! Las opciones de recompensas son personalizables y están diseñadas para motivar y reforzar el comportamiento positivo."
                    ></LandingPageCard>
                  </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                  <a
                    href="#item1"
                    className="btn btn-xs bg-[#5D269A]"
                  >
                    1
                  </a>
                  <a
                    href="#item2"
                    className="btn btn-xs bg-[#5D269A]"
                  >
                    2
                  </a>
                  <a
                    href="#item3"
                    className="btn btn-xs bg-[#5D269A]"
                  >
                    3
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-row gap-2 h-96">
                  <div className="w-2/6 h-80">
                    <LandingPageCard
                      icon={pigIcon}
                      title="Seguimiento de Tareas y Ganancias"
                      content="Los padres pueden marcar las tareas completadas a medida que las realizan. Cada tarea completada les otorga una cantidad específica de dinero virtual, que se acumula en su cuenta."
                    ></LandingPageCard>
                  </div>
                  <div className="w-2/6 h-80">
                    <LandingPageCard
                      icon={listIcon}
                      title="Asignación de Tareas: "
                      content="El maestro en conjunto con los padres pueden asignar tareas domésticas a sus hijos directamente a través de la aplicación. Desde hacer la cama hasta ayudar con la limpieza, las tareas se pueden personalizar según las necesidades y la edad del niño."
                    ></LandingPageCard>
                  </div>
                  <div className="w-2/6 h-80">
                    <LandingPageCard
                      icon={cartIcon}
                      title="Canje de Recompensas:"
                      content="Cuando los niños hayan alcanzado suficiente dinero, ¡pueden canjearlo por recompensas emocionantes! Las opciones de recompensas son personalizables y están diseñadas para motivar y reforzar el comportamiento positivo."
                    ></LandingPageCard>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center justify-center align-middle p-6 flex flex-col gap-8 pb-36">
              <p className="text-[#09090b] text-base leading-[15px] p-1">
                A través de esta experiencia, los niños aprenden sobre la
                importancia del trabajo duro, la responsabilidad y la gestión
                del dinero de una manera práctica y divertida. Además, pueden
                desarrollar habilidades de planificación y toma de decisiones
                mientras administran sus ganancias y eligen cómo gastarlas.
              </p>
            </div>
            <div className="bg-[#5D269A]">
              {/* Aquí se supone van unas ondas*/}
            </div>
          </div>
        </section>
        {/* Termina Angel */}
        <section className="text-[#09090b] relative min-h-96 flex flex-col justify-center items-center gap-6 text-center p-8 bg-[#5D269A]">
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
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="out"
                  />
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
                  <stop
                    offset="0.505208"
                    stop-color="#B381F2"
                  />
                  <stop
                    offset="1"
                    stop-color="#F0E6FE"
                  />
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
          <Link href={'/registro'}>
            <button className="relative font-bold bg-white text-gray-950 px-5 py-2 rounded-3xl mb-10">
              Regístrate
            </button>
          </Link>
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
