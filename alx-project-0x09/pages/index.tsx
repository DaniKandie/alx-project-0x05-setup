import React, { useState } from 'react';

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const handleGenerateImage = async () => {
    console.log("Generating Image");
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Image Generator</h1>
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      <button
        onClick={handleGenerateImage}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate Image
      </button>
    </div>
  );
};

export default Home;
