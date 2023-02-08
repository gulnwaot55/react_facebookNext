import React from "react";

export default function SearchInput() {
  return (
    <div className="relative  w-full px-2">
      <div className="absolute inset-y-left-1 flex items-center  p-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-5 pl-10 text-sm text-gray-900 border rounded-full bg-gray-100  h-2   "
        placeholder="ค้นหาบน Facebook :"
        required
      />
    </div>
  );
}
