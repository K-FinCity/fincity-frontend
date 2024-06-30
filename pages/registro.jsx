import { useSession, getSession } from 'next-auth/react';

import { Chakra_Petch } from 'next/font/google';
import Link from 'next/link';
import API from '../services/API';

import { signIn } from 'next-auth/react';

import { useForm } from 'react-hook-form';

import ErrorMessage from '../components/ErrorMessage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      delete data?.confirmPassword;
      const user = { ...data, role: '667653a1d8f008e63c6b6a0b' };

      const signUpRes = await API.createNewUser(user);

      if (signUpRes?.message === 'Success') {
        const resAuth = await signIn('credentials', {
          email: signUpRes?.data.email,
          password: user.password,
          redirect: false,
        });

        if (resAuth?.ok) {
          return router.push('/dashboard');
        }

        if (resAuth?.error) {
          notify(resAuth.error.message || resAuth.error.toString());
          reset();
        }
      } else {
        notify(signUpRes?.message);
        reset();
      }
    } catch (e) {
      notify(e.message || e.toString());
      reset();
    }
  };

  const searchParams = useSearchParams();

  const error = searchParams.get('error');

  const notify = (msg) =>
    toast.error(msg, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Zoom,
    });

  useEffect(() => {
    if (error) setTimeout(() => notify(error), 1000);
  }, [error]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    return router.push('/dashboard');
  }

  return (
    <div className="flex flex-col xl:flex-row-reverse xl:min-h-screen w-screen">
      <div className="relative xl:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430 171"
          fill="none"
          className="absolute xl:hidden"
        >
          <path
            d="M0 0H430V137.453C399.406 125.945 366.017 124.112 334.347 132.2L282.5 145.441L180.098 168.042C161.738 172.094 142.609 170.888 124.903 164.563L0 119.943V0Z"
            fill="#8B3FDE"
            fill-opacity="0.7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430 179"
          fill="none"
          className="xl:hidden"
        >
          <path
            d="M0 0H430V156.496H414.792C392.784 156.496 370.88 153.484 349.689 147.545C323.879 140.31 296.794 138.839 270.352 143.236L61.0452 178.037C32.8884 182.719 6.01818 164.462 0 136.56V0Z"
            fill="#8B3FDE"
            fill-opacity="0.5"
          />
        </svg>

        {/* DESKTOP */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 504 832"
          fill="none"
          className="hidden xl:block absolute h-full top-0 end-0"
        >
          <path
            d="M504 0L504 832L100.107 832C132.969 774.469 138.14 705.189 114.183 643.417L76.635 546.605L5.82239 335.34C-2.99365 309.038 -0.488037 280.256 12.7404 255.873L151.558 0L504 0Z"
            fill="#8B3FDE"
            fill-opacity="0.7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 428 832"
          fill="none"
          className="hidden xl:block absolute h-full top-0 end-0"
        >
          <path
            d="M428 0L428 832L53.7185 832V803.503C53.7185 760.404 60.9219 717.608 75.0311 676.884C92.2891 627.072 95.7964 573.527 85.1837 521.889L2.94284 121.73C-8.41144 66.4834 28.1437 12.7828 83.7054 3.08729L101.398 0L428 0Z"
            fill="#682BA4"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      <main
        className={`${chakra.className} mt-5 p-5 md:p-9 xl:w-full flex flex-col justify-center items-center`}
      >
        <div className="xl:max-w-lg xl:w-full">
          <h1 className="text-5xl font-bold xl:text-start">Comencemos...</h1>
          <h2 className="mt-3 text-base">Crea tu nueva cuenta</h2>
        </div>
        <form
          className="flex flex-col items-center gap-6 mt-8 max-w-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="input input-bordered flex items-center gap-2 w-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow bg-white"
              placeholder="Nombre"
              {...register('first_name', {
                required: 'El nombre es necesario.',
                pattern: {
                  value: /^\S*$/,
                  message: 'No parece un nombre válido.',
                },
              })}
            />
          </label>

          {errors?.first_name && (
            <ErrorMessage msg={errors?.first_name.message} />
          )}

          <label className="input input-bordered flex items-center gap-2 w-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow bg-white"
              placeholder="Apellido"
              {...register('last_name', {
                required: 'El apellido es necesario.',
                pattern: {
                  value: /^\S*$/,
                  message: 'No parece un apellido válido.',
                },
              })}
            />
          </label>

          {errors?.last_name && (
            <ErrorMessage msg={errors?.last_name.message} />
          )}

          <label className="input input-bordered flex items-center gap-2 w-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Correo electrónico"
              {...register('email', {
                required: 'El correo electrónico es necesario.',
                minLength: {
                  value: 8,
                  message: 'Se nececitan mínimo 8 caracteres.',
                },
                pattern: {
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                  message:
                    'Es necesario al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',
                },
              })}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 w-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Contraseña"
              {...register('password', {
                required: 'La contraseña es necesaria.',
                minLength: {
                  value: 8,
                  message: 'Se nececitan mínimo 8 caracteres.',
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                  message:
                    'Son necesarios mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',
                },
              })}
            />
          </label>

          {errors?.password && <ErrorMessage msg={errors?.password.message} />}

          <label className="input input-bordered flex items-center gap-2 w-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Vuelve a escribir la contraseña"
              {...register('confirmPassword', {
                required: 'Es necesario volver a escribir la contraseña.',
                validate: (val) => {
                  if (watch('password') != val) {
                    return 'La contraseña no coincide.';
                  }
                },
              })}
            />
          </label>

          {errors?.confirmPassword && (
            <ErrorMessage msg={errors?.confirmPassword.message} />
          )}

          <span className="text-center text-sm p-3">
            Al crear la cuenta usted acepta los{' '}
            <Link
              className="text-purple-300"
              href={'#'}
            >
              Términos y Condiciones
            </Link>{' '}
            y la{' '}
            <Link
              className="text-purple-300"
              href={'#'}
            >
              Privacidad
            </Link>
          </span>
          <button
            className="btn w-40 bg-purple-600 uppercase text-white"
            type="submit"
          >
            Crear cuenta
          </button>
        </form>

        <div className="inline-flex items-center justify-center w-full max-w-xl relative ">
          <hr className="w-64 h-px my-6 bg-gray-600 border-0 " />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-white ">
            o
          </span>
        </div>

        <button
          type="button"
          class="mb-3 py-2 px-4 flex justify-center items-center relative *:hover:absolute *:hover:start-1/2 *:hover:transform *:hover:-translate-x-1/2  *:hover:ease-in *:hover:duration-200 hover:bg-purple-600 hover:text-purple-600 transition ease-in duration-200 text-center text-purple-600 text-base font-semibold border border-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl border-3 w-80"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            data-name="Layer 1"
            className="me-2"
          >
            <path
              d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
              fill="#00ac47"
            />
            <path
              d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
              fill="#4285f4"
            />
            <path
              d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
              fill="#ffba00"
            />
            <polygon
              fill="#2ab2db"
              points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
            />
            <path
              d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
              fill="#ea4435"
            />
            <polygon
              fill="#2ab2db"
              points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
            />
            <path
              d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
              fill="#4285f4"
            />
          </svg>
          Crea cuenta con Google
        </button>
        <p className="text-center text-sm p-3">
          ¿Ya tienes una cuenta?{' '}
          <Link
            className="text-purple-300"
            href={'#'}
          >
            Inicia sesión
          </Link>
        </p>
      </main>
      <ToastContainer />
    </div>
  );
}
