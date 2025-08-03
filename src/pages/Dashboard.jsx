import React from "react";

function Dashboard() {
  return (
    <div className="font-mono min-h-screen w-full bg-black text-white flex flex-col">
      <header className="w-full px-8 py-6 border-b border-green-500">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-500">Admin Dashboard</h2>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-black px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-bold border-2 border-emerald-400">
              Start Registration
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-bold border-2 border-red-400">
              End Registration
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-bold border-2 border-blue-400">
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
