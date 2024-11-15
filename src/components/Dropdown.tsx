'use client';
import { useState } from 'react';
import DropdownList from '@/components/DropdownList';
import DropdownButton from '@/components/DropdownButton';
import { DropdownType } from '@/types/DropdownType';

interface DropdownProps {
  label: string;
  title: string;
  selectedValue: string;
  values: DropdownType[];
  onSelect: (id: string) => void;
}

export default function Dropdown({
  label,
  title,
  selectedValue,
  values,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  const buttonText =
    selectedValue && values
      ? values.find((value) => value.id === selectedValue)?.name
      : title;

  return (
    <div className="relative w-full text-left m-0">
      <DropdownButton
        label={label}
        toggleDropdown={toggleDropdown}
        buttonText={buttonText}
      />

      <div
        id="dropdown"
        className={`${
          isOpen ? 'block' : 'hidden'
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1`}
      >
        <DropdownList values={values} onSelect={handleSelect} />
      </div>
    </div>
  );
}
