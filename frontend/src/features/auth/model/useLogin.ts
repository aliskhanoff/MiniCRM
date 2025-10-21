import { useForm } from 'react-hook-form';
import axios from 'axios';

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ identifier: string; password: string }>();

  const onSubmit = async (data: { identifier: string; password: string }) => {
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', data);
      localStorage.setItem('jwt', res.data.jwt);
      window.location.href = '/'; // или navigate('/')
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};
