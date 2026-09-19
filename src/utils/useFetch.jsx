import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url, options = {}) => {

    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () =>{
        if(!url) return;

        setLoading(true);
        setError(null);

        try {
            const data = await fetch(url, options);
            if(!data.ok) throw new Error(`HTTP error: ${data.status}`);
            const json = await data.json();
            setInfo(json)
        }
        catch(err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    },[url]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);

  return { info, error, loading, refetch: fetchData };
}

export default useFetch