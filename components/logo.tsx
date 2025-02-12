import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo(props: { className?: string; link?: string }) {
  return (
    <Link
      href={props.link ?? "/"}
      className={cn(
        "items-center space-x-2 flex flex-row px-1",
        props.className
      )}>
      {/* <span className="font-bold sm:inline-block">Platform</span> */}
      <div className="flex flex-col w-5 h-5 ">
        <div className="flex-1 bg-blue-500"></div>
        <div className="flex-1 bg-purple-500"></div>
        <div className="flex-1 bg-pink-500"></div>
        <div className="flex-1 bg-orange-500"></div>
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-teal-500"></div>
        <div className="flex-1 bg-cyan-500"></div>
        {/* <div className="flex-1 bg-indigo-500"></div> */}
      </div>
      <h1 className="text-gray-700 text-lg  font-semibold sm:inline-block dark:text-gray-100/80">
        Platform
      </h1>
      {/* <h1 className="text-2xl p-2 font-bold sm:inline-block">
        <span className="bg-gradient-to-b from-blue-400 to-blue-800 bg-clip-text text-transparent">
          P
        </span>
        <span className="bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent">
          l
        </span>
        <span className="bg-gradient-to-b from-pink-400 to-red-800 bg-clip-text text-transparent">
          a
        </span>
        <span className="bg-gradient-to-b from-orange-400 to-yellow-800 bg-clip-text text-transparent">
          t
        </span>
        <span className="bg-gradient-to-b from-green-400 to-green-800 bg-clip-text text-transparent">
          f
        </span>
        <span className="bg-gradient-to-b from-teal-400 to-teal-800 bg-clip-text text-transparent">
          o
        </span>
        <span className="bg-gradient-to-b from-cyan-400 to-cyan-800 bg-clip-text text-transparent">
          r
        </span>
        <span className="bg-gradient-to-b from-indigo-400 to-indigo-800 bg-clip-text text-transparent">
          m
        </span>
      </h1> */}
    </Link>
  );
}
