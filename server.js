const http = require("http");

// Port-ka wuxuu ka saxayaa .env (process.env.PORT) ama wuxuu isticmaalayaa 3100
const PORT = process.env.PORT || 3100;

const server = http.createServer((req, res) => {
    // Header-ka Jawaabta (JSON format)
    res.writeHead(200, { "Content-Type": "application/json" });
    
    // Jawaabta API-ga
    res.end(JSON.stringify({
        status: "success",
        message: "Ku soo dhawaaw Node.js API-ga!",
        path: req.url
    }));
});

server.listen(PORT, () => {
    console.log(`Server-ku wuxuu si sax ah ugu shaqaynayaa port-ka: ${PORT}`);
});