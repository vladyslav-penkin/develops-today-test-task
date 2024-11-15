'use client';
import { Params } from '@/types/Params';
import { useFetchModels } from '@/hooks/useFetchModels';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ResultPage({ params }: { params: Params }) {
  const { data, error, isLoading } = useFetchModels(params);
  const isEmpty = data.length === 0 && !error && !isLoading;

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">
      <h1 className="text-4xl tracking-tight text-gray-900 dark:text-white font-bold mb-6 mt-6">
        Available Models
      </h1>

      {isLoading && <LoadingSpinner />}

      {error && <p className="text-red-500">{error}</p>}

      {isEmpty && (
        <p className="tracking-tight text-gray-900 dark:text-white">
          No models available for this make and year.
        </p>
      )}

      <ul className="grid grid-cols-2 gap-2">
        {data.length > 0 &&
          data.map((model) => (
            <li
              key={model.Model_ID}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Model Id:{model.Model_Name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Model Name: {model.Model_Name}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
