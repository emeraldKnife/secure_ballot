import { useNavigate } from 'react-router-dom';
import React from "react";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="font-mono relative h-screen overflow-hidden bg-black flex flex-col">
      <div className="container px-4 mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="NJACK.png" 
              alt="NJACK Logo"
              className="h-10"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#" className="text-white hover:text-green-400" onClick={(e) => { e.preventDefault(); navigate('/admin'); }}>Admin</a>
            <a href="#" className="text-white hover:text-green-400" onClick={(e) => { e.preventDefault(); navigate('/voters'); }}>Voters</a>
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-2 border-2 border-white hover:border-green-400 hover:bg-green-400 hover:text-black rounded-full text-white transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="lg:text-5xl text-green-400">secure_ballot</h2>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Vote Online With Confidence
              </h1>
              <button
                onClick={() => navigate('/vote')}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-black font-bold transition-colors"
              >
                Vote Now
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="image.png"
                alt="Secure Voting"
                className="max-w-full h-auto rounded-xl border-4 border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
