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
    <div className="font-mono min-h-screen w-full bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-10">
          Registered Voters
        </h1>

        <div className="overflow-x-auto shadow-2xl rounded-xl border-3 border-green-500 bg-gray-900">
          <table className="min-w-full text-sm md:text-base text-left">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-4 px-6 font-bold uppercase tracking-wide text-emerald-400 border-b border-green-500">
                  Name
                </th>
                <th className="py-4 px-6 font-bold uppercase tracking-wide text-emerald-400 border-b border-green-500">
                  Email
                </th>
                <th className="py-4 px-6 font-bold uppercase tracking-wide text-emerald-400 border-b border-green-500">
                  Public Key
                </th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter, index) => (
                <tr
                  key={index}
                  className={`transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-800/80"
                  } hover:bg-gray-700`}
                >
                  <td className="py-4 px-6 border-b border-gray-700 font-medium text-white">
                    {voter.name}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-700 text-gray-300">
                    {voter.email}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-700">
                    <div className="w-56 md:w-auto max-w-full overflow-x-auto whitespace-nowrap font-mono text-xs text-emerald-300 scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-transparent">
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
