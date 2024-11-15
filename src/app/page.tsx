'use client';
import { useState } from 'react';
import { useFetchMakes } from '@/hooks/useFetchMakes';
import FilterContent from '@/components/FilterContent';
import Link from 'next/link';

const FilterPage = () => {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const { data, error } = useFetchMakes();

  const isButtonDisabled = !selectedMake || !selectedYear;

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">
      <h1 className="text-4xl tracking-tight text-gray-900 dark:text-white font-bold mb-6 mt-6">
        Filter Vehicles
      </h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {data && (
          <FilterContent
            makes={data}
            selectedMake={selectedMake}
            selectedYear={selectedYear}
            setSelectedMake={setSelectedMake}
            setSelectedYear={setSelectedYear}
          />
        )}

        {error && <p className="text-red-500">{error}</p>}

        <Link
          href={
            selectedMake && selectedYear
              ? `/result/${selectedMake}/${selectedYear}`
              : ''
          }
        >
          <button
            disabled={isButtonDisabled}
            className={`mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilterPage;
