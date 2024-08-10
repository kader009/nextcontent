'use client';
import { signIn } from 'next-auth/react';

const GoogleLogin = () => {
  return (
    <div>
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
