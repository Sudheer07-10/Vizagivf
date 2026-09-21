import React from 'react';
import { useCMSData } from '../hooks/useCMSData';

const CmsTest = () => {
  const { data, loading, error } = useCMSData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading CMS Data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <p className="text-xl">Error loading CMS data: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow p-8 space-y-6">
        <h2 className="text-2xl font-bold border-b pb-4">CMS Integration Test Page</h2>
        
        <div className="p-4 bg-blue-50 text-blue-800 rounded">
          <p>This is a dedicated test page to verify the connection to the headless CMS.</p>
          <p className="text-sm mt-2">Check the browser console to see the raw data object!</p>
        </div>

        {data ? (
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Hero Title Field</h3>
              <h1 className="text-4xl font-serif text-brand-text">
                {data['Hero Title'] || 'No Hero Title provided by CMS'}
              </h1>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Hero Image Field</h3>
              {data['Hero Image'] ? (
                <img 
                  src={data['Hero Image']} 
                  alt="Hero from CMS" 
                  className="w-full max-w-2xl rounded shadow"
                />
              ) : (
                <p className="text-gray-500 italic">No Hero Image provided by CMS</p>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Raw Data Output</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-auto text-sm">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No fields data found.</p>
        )}
      </div>
    </div>
  );
};

export default CmsTest;
