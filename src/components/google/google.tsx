'use client';
import { signIn, useSession } from 'next-auth/react';

const GoogleLogin = () => {
  const session = useSession();
  console.log(session?.data?.user);
  // const { name, email } = session?.data?.user;
  // console.log(name, email);
  return (
    <div>
      <h1>name:{session?.data?.user?.name}</h1>
      <button
        className="bg-black p-2 text-white rounded"
        onClick={() => signIn('google')}
      >
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
