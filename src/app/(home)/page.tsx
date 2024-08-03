'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handle = () => {
    router.push('/about');
  };
  const handle1 = () => {
    router.push('/about/history');
  };
  return (
    <main>
      <h1 className="text-blue-500 text-2xl font-bold capitalize">hellow</h1>
      <button onClick={handle} className="bg-black text-white rounded p-2">
        about
      </button>
      <button onClick={handle1} className="bg-black text-white rounded p-2">
        history
      </button>
    </main>
  );
}
