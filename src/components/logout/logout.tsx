'use client';
import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <div>
      <button
        className="bg-black p-2 text-white rounded mt-4"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
