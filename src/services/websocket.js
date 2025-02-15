const WS_URL = "https://chat-api-backend-1.onrender.com";
const ws = new WebSocket(WS_URL);

ws.onopen = () => console.log("Connected to WebSocket server");

export const sendMessage = (message, callback) => {
    ws.send(message);
    ws.onmessage = (event) => {
        callback(event.data);
    };
};
