import axios from 'axios';

const useAuth = () => {
  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signin', { email, password });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const signUp = async () => {};

  return { signIn, signUp };
};

export default useAuth;
