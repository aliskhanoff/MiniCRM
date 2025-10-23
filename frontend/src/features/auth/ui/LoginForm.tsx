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

      <div className="flex flex-col gap-2">
        <Label htmlFor="identifier">Email</Label>

        <TextBox
          {...register('identifier', { required: 'Email is required' })}
          className="ring-1 focus:ring-2 transition-all duration-200 outline-none ring-blue-500 px-2 py-1.5 rounded-sm"
        />

        {errors.identifier && <p className="text-red-500 text-sm">{errors.identifier.message}</p>}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <TextInput
          id="password"
          type="password"
          placeholder="••••••••"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
