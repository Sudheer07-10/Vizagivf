import { useState, useEffect } from 'react';

export function useCMSData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cmsheadless-psi.vercel.app/api/globals/home-page",
          {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${import.meta.env.VITE_CMS_API_KEY}`
            }
          }
        );
        
        if (!response.ok) {
          let errorMessage = `Error: ${response.status} ${response.statusText}`;
          try {
            const errorData = await response.json();
            if (errorData && errorData.error) {
              errorMessage += ` - ${errorData.error}`;
            }
          } catch (e) {
            // Ignore if response is not JSON
          }
          throw new Error(errorMessage);
        }
        
        const jsonData = await response.json();
        console.log("CMS Data fetched successfully:", jsonData);
        
        // As per instructions, the fields are under data.global.fields
        if (jsonData.global && jsonData.global.fields) {
          setData(jsonData.global.fields);
        } else {
          console.warn("Unexpected data structure:", jsonData);
          setData(jsonData);
        }
      } catch (err) {
        console.error("Failed to fetch CMS data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
