import { useState, useEffect } from 'react';

interface IOptions {
  method: string, 
  body?: Record<string, string>,
}

const optionsByDefault = {
  method: 'GET',
}

export const useFetch = <T>(url: string, options: IOptions = optionsByDefault) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [abort, setAbort] = useState<() => void>(() => {}); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const abortController = new AbortController();
        const signal = abortController.signal;
        
        setAbort(abortController.abort);
      
        const params = {
          method: options.method,
          body: JSON.stringify(options.body),
          headers: {
            'Content-Type': 'application/json'
          },
          signal
        };
        
        const res = await fetch(url, params);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };
    
    fetchData();
    
    return () => {
      abort();
    }
  }, []);

  return { response, error, abort };
};
