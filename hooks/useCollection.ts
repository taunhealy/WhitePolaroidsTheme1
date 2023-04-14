import { useState, useEffect } from 'react';
import { CollectionConfig } from 'payload/types';

export const useCollection = <T extends Record<string, any>>(
  collection: CollectionConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/collections/${collection.slug}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [collection]);

  return {
    data,
    isLoading,
    error,
  };
};
