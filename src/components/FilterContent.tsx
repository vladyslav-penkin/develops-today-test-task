'use client';
import Dropdown from '@/components/Dropdown';
import { Make } from '@/types/Make';
import { DropdownType } from '@/types/DropdownType';

interface FilterContentProps {
  makes: Make[];
  selectedMake: string;
  selectedYear: string;
  setSelectedMake: (make: string) => void;
  setSelectedYear: (year: string) => void;
}

export default function FilterContent({
  makes,
  selectedMake,
  selectedYear,
  setSelectedMake,
  setSelectedYear,
}: FilterContentProps) {
  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, index) => (2015 + index).toString()
  );

  const handleSelectMakes = (make: string) => {
    setSelectedMake(make);
  };

  const handleSelectYear = (year: string) => {
    setSelectedYear(year);
  };

  const makesDropdown: DropdownType[] = makes.map(({ MakeId, MakeName }) => ({
    id: MakeId,
    name: MakeName,
  }));
  const yearsDropdown: DropdownType[] = years.map((year) => ({
    id: year,
    name: year,
  }));

  return (
    <div className="w-full flex gap-2 flex-row items-center max-w-md rounded-lg text-card-foreground shadow-sm pb-6">
      {makesDropdown.length > 0 && (
        <Dropdown
          label="Car Make"
          title="Select Car"
          selectedValue={selectedMake}
          values={makesDropdown}
          onSelect={handleSelectMakes}
        />
      )}
      {yearsDropdown.length > 0 && (
        <Dropdown
          label="Model Year"
          title="Select Model"
          selectedValue={selectedYear}
          values={yearsDropdown}
          onSelect={handleSelectYear}
        />
      )}
    </div>
  );
}
