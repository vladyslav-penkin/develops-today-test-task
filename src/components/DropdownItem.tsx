'use client';

interface DropdownItemProps {
  id: string;
  name: string;
  onSelect: (id: string) => void;
}

export default function DropdownItem({
  id,
  name,
  onSelect,
}: DropdownItemProps) {
  return (
    <li>
      <button
        onClick={() => onSelect(id)}
        className="block w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {name}
      </button>
    </li>
  );
}
