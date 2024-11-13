"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        router.push('/yuzhou');
      }, 1000);
    }
  }, [fadeOut, router]);

  const handleAnimationEnd = () => {
    setFadeOut(true);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/universe-home.gif')" }}
      onClick={handleAnimationEnd}
    >
      <h1
        className={`text-6xl md:text-8xl font-bold text-white transition-all duration-1000 transform ${
          fadeOut ? 'opacity-0 translate-y-10' : 'opacity-100'
        } cursor-pointer`}
      >
        Welcome to My Universe
      </h1>
    </div>
  );
};

export default Home;
