import { Label, TextInput, Button } from 'flowbite-react';
import { useLogin } from '../model/useLogin';

export const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10 justify-center items-center"
    >
      <h1 className="text-3xl">Sign in</h1>

      <div>
        <Label htmlFor="identifier">Email</Label>
        <TextInput
          className="ring-1 ring-blue-500 rounded p-1 outline-none"
          id="identifier"
          type="email"
          placeholder="Your email or username"
          {...register('identifier', { required: 'Email is required' })}
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
