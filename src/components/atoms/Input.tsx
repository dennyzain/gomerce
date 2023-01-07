import Image from 'next/image';
import React from 'react';

const Input: React.FC = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Cari Produk atau Kategori?"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#3B76F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33333 11.3333C7.33333 9.12733 9.12733 7.33333 11.3333 7.33333C13.5393 7.33333 15.3333 9.12733 15.3333 11.3333C15.3333 13.5393 13.5393 15.3333 11.3333 15.3333C9.12733 15.3333 7.33333 13.5393 7.33333 11.3333ZM17.8047 16.862L15.5413 14.598C16.2433 13.6953 16.6667 12.564 16.6667 11.3333C16.6667 8.39267 14.274 6 11.3333 6C8.39267 6 6 8.39267 6 11.3333C6 14.274 8.39267 16.6667 11.3333 16.6667C12.564 16.6667 13.6953 16.2433 14.598 15.5413L16.862 17.8047C16.992 17.9347 17.1627 18 17.3333 18C17.504 18 17.6747 17.9347 17.8047 17.8047C18.0653 17.544 18.0653 17.1227 17.8047 16.862Z"
              fill="white"
            />
            <mask
              id="mask0_191_10846"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="6"
              y="6"
              width="12"
              height="12"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.33333 11.3333C7.33333 9.12733 9.12733 7.33333 11.3333 7.33333C13.5393 7.33333 15.3333 9.12733 15.3333 11.3333C15.3333 13.5393 13.5393 15.3333 11.3333 15.3333C9.12733 15.3333 7.33333 13.5393 7.33333 11.3333ZM17.8047 16.862L15.5413 14.598C16.2433 13.6953 16.6667 12.564 16.6667 11.3333C16.6667 8.39267 14.274 6 11.3333 6C8.39267 6 6 8.39267 6 11.3333C6 14.274 8.39267 16.6667 11.3333 16.6667C12.564 16.6667 13.6953 16.2433 14.598 15.5413L16.862 17.8047C16.992 17.9347 17.1627 18 17.3333 18C17.504 18 17.6747 17.9347 17.8047 17.8047C18.0653 17.544 18.0653 17.1227 17.8047 16.862Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_191_10846)">
              <rect x="4" y="4" width="16" height="16" fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default Input;
