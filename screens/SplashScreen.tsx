import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingSpinner = () => (
  <div className="inline-block">
    <div
      className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);

export default function SplashScreen() {
  const [, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white px-4 py-10">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-[30rem] h-[29rem] relative">
          <Image src={"/secondary_logo.png"} alt="Logo" fill />
        </div>
      </div>

      <div className="text-sky-400">
        <LoadingSpinner />
      </div>
    </div>
  );
}
