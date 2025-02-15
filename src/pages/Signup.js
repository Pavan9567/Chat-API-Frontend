import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = await register(username, email, password);
        if (data.jwt) {
            setMessage("Signup successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 1500); // Redirect after 1.5 seconds
        } else {
            setMessage("Error: " + (data.message || "Something went wrong"));
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form onSubmit={handleSignup} className="p-6 bg-white shadow-lg rounded">
                <h2 className="text-xl font-bold mb-4">Signup</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="block border p-2 mb-4 w-full" />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="block border p-2 mb-4 w-full" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="block border p-2 mb-4 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Sign Up</button>
                {message && <p className="mt-2 text-center text-gray-600">{message}</p>}
                <p className="mt-4 text-center">
                    Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
                </p>
            </form>
        </div>
    );
};

export default Signup;
