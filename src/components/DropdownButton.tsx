'use client';

interface DropdownButtonProps {
  label: string;
  toggleDropdown: () => void;
  buttonText: string | undefined;
}

export default function DropdownButton({
  label,
  toggleDropdown,
  buttonText,
}: DropdownButtonProps) {
  return (
    <div className="flex flex-col">
      <div className="block tracking-tight text-gray-900 dark:text-white">
        {label}
      </div>
      <button
        id="dropdownDefaultButton"
        type="button"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
    </div>
  );
}
