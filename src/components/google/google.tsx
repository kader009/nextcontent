'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

const GoogleLogin = () => {
  const session = useSession();
  console.log(session?.data?.user);
  // const { name, email } = session?.data?.user;
  // console.log(name, email);
  return (
    <div>
      <h1>Name: {session?.data?.user?.name}</h1>
      <Image src={session?.data?.user?.image || '/placeholdaer.png'} height={100} width={100} className='rounded-full' alt='profile image' priority={true}/>
      <br />
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
