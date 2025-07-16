import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

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
        <div className="admin-container">
            <div className="theme-toggle">
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light" : "Dark"} Mode
                </button>
            </div>

            <div className="login-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;