import { useState } from "react";

const positions = {
  "VP Gymkhana": [
    { name: "Riya Singh", image: "/avatar.jpg" },
    { name: "Aditya Verma", image: "/avatar.jpg" },
    { name: "Neha Roy", image: "/avatar.jpg" },
  ],
  "ACC": [
    { name: "Sahil Kumar", image: "/avatar.jpg" },
    { name: "Ishita Das", image: "/avatar.jpg" },
    { name: "Karan Mehta", image: "/avatar.jpg" },
  ],
  "HoSCA": [
    { name: "Priya Gupta", image: "/avatar.jpg" },
    { name: "Rohan Singh", image: "/avatar.jpg" },
    { name: "Tanvi Sharma", image: "/avatar.jpg" },
  ],
  "Student Welfare Board": [
    { name: "Mehul Jain", image: "/avatar.jpg" },
    { name: "Sneha Kapoor", image: "/avatar.jpg" },
    { name: "Deepak Sinha", image: "/avatar.jpg" },
  ],
  "Hostel Affairs": [
    { name: "Ananya Bose", image: "/avatar.jpg" },
    { name: "Ravi Chandra", image: "/avatar.jpg" },
    { name: "Tushar Malhotra", image: "/avatar.jpg" },
  ],
};

const Vote = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({});

  const handleSelect = (position, candidate) => {
    setSelectedCandidates((prev) => ({
      ...prev,
      [position]: candidate,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(selectedCandidates, null, 2));
  };

  return (
    <div className="font-mono min-h-screen w-full bg-black text-white py-10 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center mb-16 text-green-500 tracking-wide">🗳️ Cast Your Vote</h1>

      {Object.entries(positions).map(([position, candidates]) => (
        <section key={position} className="mb-20 w-full px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 pl-2 border-l-4 border-emerald-500">{position}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {candidates.map((candidate) => {
              const isSelected = selectedCandidates[position]?.name === candidate.name;
              return (
                <div
                  key={candidate.name}
                  className={`p-5 w-full rounded-xl border transition-all duration-300 flex flex-col items-center ${
                    isSelected 
                      ? "border-emerald-500 shadow-lg shadow-emerald-500/20 bg-gray-900 scale-105" 
                      : "border-gray-700 bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-24 h-24 object-cover rounded-full mb-4 border border-gray-600"
                  />
                  <p className="font-medium text-lg mb-3">{candidate.name}</p>
                  <button
                    onClick={() => handleSelect(position, candidate)}
                    className={`px-5 py-2 text-sm rounded-full font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-green-300 text-black cursor-default"
                        : "bg-green-500 text-white hover:bg-emerald-600"
                    }`}
                    disabled={isSelected}
                  >
                    {isSelected ? "Selected ✓" : "Select"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <section className="px-4 mt-24 border-t border-gray-800 pt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-emerald-400">🧾 Your Selections</h2>
        {Object.keys(selectedCandidates).length === 0 ? (
          <p className="text-gray-400">No selections made yet.</p>
        ) : (
          <ul className="space-y-4">
            {Object.entries(selectedCandidates).map(([position, candidate]) => (
              <li key={position} className="flex items-center gap-4">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-10 h-10 rounded-full border border-gray-600"
                />
                <span>
                  <strong className="text-emerald-400">{position}:</strong> {candidate.name}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            disabled={Object.keys(selectedCandidates).length === 0}
          >
            Submit Vote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Vote;
