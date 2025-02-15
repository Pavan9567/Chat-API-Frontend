const WS_URL = "ws://localhost:1337";
const ws = new WebSocket(WS_URL);

ws.onopen = () => console.log("Connected to WebSocket server");

export const sendMessage = (message, callback) => {
    ws.send(message);
    ws.onmessage = (event) => {
        callback(event.data);
    };
};
