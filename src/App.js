import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
};

export default App;
