import Image from "next/image";
import Link from "next/link";
import { BsXDiamondFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import Timeline from "./timeline";
import Dialog from "@/components/Dialog";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-y-scroll">
      <div className="absolute w-full h-full flex justify-between">
        {/* <div className="w-1/6 h-full bg-gradient-to-b from-cyan-700/30 to-gray-50 rounded-tr-full    clip-path"></div>
        
        <div className="w-1/6 h-full bg-gradient-to-b from-cyan-700/30 to-gray-50  rounded-tl-full"></div> */}

        <svg
          width="100%"
          height="100%"
          viewBox="200 150 500 500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          overflow="auto"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="wavepath"
              d="M 0 2000 0 500 Q 150 -500 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
            />
            <linearGradient id="gradient" x1="100%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#0e7490", stopOpacity: 0.3 }}
              />
              <stop
                offset="30%"
                style={{ stopColor: "#f9fafb", stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          <g>
            <use xlinkHref="#wavepath" y="100" fill="url(#gradient)"></use>
          </g>
        </svg>
      </div>
      <div className="absolute  w-full h-full">
        <header className="flex justify-between items-center p-4 max-w-4xl mx-auto   ">
          <Link href="/" className="flex items-center space-x-2">
            <BsXDiamondFill className="text-2xl text-sky-950 mx-auto" />
            <span className="text-xl font-normal text-black ">earnwave</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/business"
              className="text-gray-600 hover:text-gray-900"
            >
              For business
            </Link>
            <Link href="/media" className="text-gray-600 hover:text-gray-900">
              Media
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
          </nav>
          <div>
            <Dialog />
          </div>
        </header>
        <Separator className="max-w-4xl mx-auto" />
        <main className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-7xl font-normal text-center mb-4 text-gray-800">
            Connect. Learn. Earn
          </h1>
          <p className="text-md text-center text-gray-900 mb-12 max-w-xl mx-auto font-thin">
            Your data is a profitable asset. With Earnwave you control what data
            to share anonymously and earn from it.
          </p>
          <div className="flex justify-center space-x-4 mb-12 ">
            <Timeline />
          </div>

          <div className=" flex gap-8 justify-center w-full flex-col md:flex-row">
            <div>
              <img
                src="/assets/1.png"
                alt=""
                className="rounded-3xl shadow-lg md:h-56 border-2 border-white"
              />
            </div>

            <div>
              <img
                src="/assets/2.png"
                alt=""
                className="rounded-3xl shadow-lg h-80 border-2 border-white"
              />
            </div>
            <div>
              <img
                src="/assets/3.png"
                alt=""
                className="rounded-3xl shadow-lg md:h-64 border-2 border-white"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
