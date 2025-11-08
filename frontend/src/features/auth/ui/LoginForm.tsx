import { Label, TextInput, Button } from 'flowbite-react';
import { useLogin } from '../model/useLogin';
import { TextBox } from '@/shared/ui/input/textbox';

export const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10 justify-center items-center"
    >
      <h1 className="text-3xl">Sign in</h1>

      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="identifier">Email</Label>

        <TextBox
          {...register('identifier', { required: 'Email is required' })}
          className="ring-1 w-full focus:ring-2 transition-all duration-700 outline-none ring-blue-500 focus:ring-blue-600 px-2 py-1.5 rounded-sm"
        />

        {errors.identifier && <p className="text-red-500 text-sm">{errors.identifier.message}</p>}
      </div>

      <div className="flex flex-col w-full gap-2">
        <Label htmlFor="identifier">Password</Label>

        <TextBox
          {...register('identifier', { required: 'Email is required' })}
          type="password"
          className="ring-1 w-full focus:ring-2 transition-all duration-700 outline-none ring-blue-500 focus:ring-blue-600 px-2 py-1.5 rounded-sm"
        />

        {errors.identifier && <p className="text-red-500 text-sm">{errors.identifier.message}</p>}
      </div>

      <button
        type="button"
        className="focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
