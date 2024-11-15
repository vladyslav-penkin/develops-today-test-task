'use client';
import DropdownItem from '@/components/DropdownItem';
import { DropdownType } from '@/types/DropdownType';

interface DropdownListProps {
  values: DropdownType[];
  onSelect: (id: string) => void;
}

export default function DropdownList({ values, onSelect }: DropdownListProps) {
  return (
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      {values.map((value) => (
        <DropdownItem
          key={value.id}
          id={value.id}
          name={value.name}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
