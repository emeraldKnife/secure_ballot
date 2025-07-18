import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen min-w-screen flex flex-col ${darkMode ? ' text-white' : 'bg-gray-300 text-gray-900'}`}>
      
      <div className="absolute top-8 right-8 z-10">
        <button
          className={`rounded-full p-3 shadow-lg transition duration-300 border-none focus:outline-none ${
            darkMode 
              ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg  width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
            </svg>
          )}
        </button>
      </div>

      <header className={`w-full px-8 py-6 border-b border-gray-500`}>
        <div className="max-w-7xl flex items-center justify-between">
          <div>
            <h1 className={`text-4xl font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Secure Ballot</h1>
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Admin name: <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>test</span>
            </h3>
          </div>
          
          <div className="text-center">
            <h2 className={`text-3xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Admin Dashboard</h2>
          </div>
          
          <div className="w-48"></div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className={`${
              darkMode 
                ? 'bg-green-700/50 hover:bg-green-800 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            } px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-medium`}>
              Start Registration
            </button>
            <button className={`${
              darkMode 
                ? 'bg-red-700/50 hover:bg-red-800 text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            } px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-medium`}>
              End Registration
            </button>
            <button className={`${
              darkMode 
                ? 'bg-blue-700/50 hover:bg-blue-800 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            } px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-medium`}>
              Start Voting
            </button>
          </div>
        </div>
      </main>

      <div className="h-16"></div>
    </div>
  );
}

export default Dashboard;