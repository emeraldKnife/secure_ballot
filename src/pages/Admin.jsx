import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "test" && password === "1234") { 
            alert("Login successful!");
            navigate("/dashboard");
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="font-mono min-h-screen w-full bg-black flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-gray-900 border-3 border-green-500">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-green-500">Admin Login</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
                            required
                        />
                    </div>
                    
                    {error && (
                        <div className="p-3 rounded-lg bg-red-900/50 text-red-300">
                            {error}
                        </div>
                    )}
                    
                    <button 
                        type="submit" 
                        className="w-full py-3 px-4 rounded-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-black transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
