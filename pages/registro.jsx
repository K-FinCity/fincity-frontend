import { Chakra_Petch } from 'next/font/google';
import Link from 'next/link';
import API from '../services/API';

import { useForm } from 'react-hook-form';

import ErrorMessage from '../components/ErrorMessage';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

export default function Page() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      delete data.confirmPassword;
      const user = { ...data, role: '6676ee3c23f3b664bbf5f50d', user: null };

      const response = await API.createNewUser(user);

      if (response.message === 'Success') {
        reset();
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:min-h-screen w-screen">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="430"
          height="171"
          viewBox="0 0 430 171"
          fill="none"
          className="absolute"
        >
          <path
            d="M0 0H430V137.453C399.406 125.945 366.017 124.112 334.347 132.2L282.5 145.441L180.098 168.042C161.738 172.094 142.609 170.888 124.903 164.563L0 119.943V0Z"
            fill="#8B3FDE"
            fill-opacity="0.7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="430"
          height="179"
          viewBox="0 0 430 179"
          fill="none"
        >
          <path
            d="M0 0H430V156.496H414.792C392.784 156.496 370.88 153.484 349.689 147.545C323.879 140.31 296.794 138.839 270.352 143.236L61.0452 178.037C32.8884 182.719 6.01818 164.462 0 136.56V0Z"
            fill="#8B3FDE"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      <main className={`${chakra.className} mt-5 p-5 md:p-9 lg:w-1/4`}>
        <h1 className="text-5xl font-bold">Comencemos...</h1>
        <h2 className="mt-3 text-base">Crea tu nueva cuenta</h2>
        <form
          className="flex flex-col items-center gap-6 mt-8"
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
                required: 'El nombre es necesario.',
                pattern: {
                  value: /^\S*$/,
                  message: 'No parece un nombre válido.',
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

          {errors?.email && <ErrorMessage msg={errors?.email.message} />}

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
                pattern:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
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

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-600 border-0 " />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-white ">
            o
          </span>
        </div>

        <button
          type="button"
          class="py-2 px-4 flex justify-center items-center hover:bg-purple-600 w-full transition ease-in duration-200 text-center text-base font-semibold  border focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg border-3"
        >
          <svg
            width="20"
            height="20"
            class="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
          </svg>
          Sign in with Google
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
    </div>
  );
}
