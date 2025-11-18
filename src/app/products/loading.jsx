import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        
        {/* Minimal spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

        <p className="mt-4 text-lg font-medium ">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
