import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await login(email, password);
        if (data.jwt) {
            setMessage("Login successful! Redirecting to chat...");
            setTimeout(() => navigate("/chat"), 1500); // Redirect after 1.5 seconds
        } else {
            setMessage("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form onSubmit={handleLogin} className="p-6 bg-white shadow-lg rounded">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="block border p-2 mb-4 w-full" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="block border p-2 mb-4 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
                {message && <p className="mt-2 text-center text-gray-600">{message}</p>}
                <p className="mt-4 text-center">
                    Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>Sign up</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
