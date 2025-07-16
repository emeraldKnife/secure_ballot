import React from "react";

const voters = [
  {
    name: "Riya Singh",
    email: "riya.singh@example.com",
    publicKey: "04a7cde8f1b3a2c9c8f78e12cbd7843a0a37b901ee4e...",
  },
  {
    name: "Aditya Verma",
    email: "aditya.verma@example.com",
    publicKey: "041acddf73298ba9fe7c11344dc01a2a3dbd3c9beafc...",
  },
  {
    name: "Tanvi Sharma",
    email: "tanvi.sharma@example.com",
    publicKey: "045fdd34b7dcbcd123aff8bd9801bfa44874fe98a231...",
  },
  {
    name: "Rohan Singh",
    email: "rohan.singh@example.com",
    publicKey: "0434adf903ddbc112233fa8d123a7bd4f1be88feaaee...",
  },
];

const Voters = () => {
  return (
    <div className="min-h-screen w-[100vw] bg-gradient-to-br from-gray-800 via-gray-900 to-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-100 mb-10 drop-shadow-sm">
          🗂️ Registered Voters
        </h1>

        <div className="overflow-x-auto shadow-xl rounded-2xl border border-blue-300 bg-white">
          <table className="min-w-full text-sm md:text-base text-left table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-4 px-6 font-bold uppercase tracking-wide border-b border-blue-300">Name</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wide border-b border-blue-300">Email</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wide border-b border-blue-300">Public Key</th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-200 text-white ${
                    index % 2 === 0 ? "bg-slate-600" : "bg-slate-800"
                  } hover:bg-slate-900/80`}
                >
                  <td className="py-3 px-6 border-b border-slate-100 font-medium text-white">{voter.name}</td>
                  <td className="py-3 px-6 border-b border-slate-100 text-white">{voter.email}</td>
                  <td className="py-3 px-6 border-b border-slate-100">
                    <div className="w-56 md:w-auto max-w-full overflow-x-auto whitespace-nowrap font-mono text-xs text-white scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
                      {voter.publicKey}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Voters;
