import { useState, useEffect } from 'react';

interface IOptions {
  method: string, 
  body?: Record<string, string>,
}

const optionsByDefault = {
  method: 'GET',
}

export const useFetch = <T>(url: string, options: IOptions = optionsByDefault) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = {
          method: options.method,
          body: JSON.stringify(options.body),
          headers: {
            'Content-Type': 'application/json'
          },
        };
        
        const res = await fetch(url, params);
        const json = await res.json();
        setData(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { data, error, isLoading };
};
