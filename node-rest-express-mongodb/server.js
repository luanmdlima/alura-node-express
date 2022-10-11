import * as http from "http";
import nodemon from "nodemon";

const port = 3000;
const routes = {
	"/": "Hello World!",
	"/about": "About Me",
	"/contact": "Contact Me",
};

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(req.url in routes ? routes[req.url] : "Not Found");
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
