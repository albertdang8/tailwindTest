import React from "react";

const Body = () => {
  return (
    <main className="p-5">
      <h1 className="text-center text-lg text-green-400">Hello World</h1>
      <div className="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-2">
        <p className="font-mono-font-extrabold text-center">A div</p>
      </div>
      <div className="fixed top-0 h-10 w-10 bg-red-500"></div>
      <div className="flex justify-between">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="h-12 bg-violet-500"></div>
        <div className="h-12 bg-violet-500"></div>
        <div className="h-12 bg-violet-500"></div>
      </div>
      <div className="hidden md:block">
        <p>I will appear less 768px</p>
      </div>
      <div className="hidden max-md:block">
        <p>I will appear more 768px</p>
      </div>
      <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
        click me
      </button>
      <ul className="my-2 space-y-2">
        <li className="p2 bg-white first:bg-yellow-100">Item 1</li>
        <li className="p2 bg-white first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item 2
        </li>
        <li className="p2 bg-white first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item 3
        </li>
        <li className="p2 bg-white first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item 4
        </li>
        <li className="p2 bg-white first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
          Item 5
        </li>
      </ul>
    </main>
  );
};

export default Body;
