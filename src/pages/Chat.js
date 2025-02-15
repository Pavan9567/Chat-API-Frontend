import { useState } from "react";
import { sendMessage } from "../services/websocket";
import { useNavigate } from "react-router-dom";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    const handleSend = () => {

        setMessages((prev) => [...prev, `You: ${message}`]);
        sendMessage(message, (serverResponse) => {
          setTimeout(() => {
            setMessages((prev) => [...prev, serverResponse]);
          }, 3000);
        });
        setMessage("");
    };

    const handleLogout = () => {
        navigate("/login"); // Redirect to login on logout
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded shadow-md">
                <h2>Chat</h2>
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </div>

            <div className="flex-1 overflow-y-auto bg-white p-4 shadow-md mt-4">
                {messages.map((msg, index) => (
                    <p key={index} className="p-2 border-b">{msg}</p>
                ))}
            </div>

            <div className="mt-4 flex">
                <input 
                    type="text" 
                    className="flex-1 p-2 border rounded" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
