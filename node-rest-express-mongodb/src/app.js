import express from "express";

const app = express();

const books = [
	{
		id: 1,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
	},
	{ id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("Welcome to my API!");
});

app.get("/books", (req, res) => {
	res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
	const { id } = req.params;
	const book = books.find((book) => book.id === parseInt(id));
	if (book) {
		res.status(200).json(book);
	} else {
		res.status(404).send("Book not found");
	}
});

app.post("/books", (req, res) => {
	const book = req.body;
	books.push(book);
	res.status(201).send("Book added successfully");
});

app.put("/books/:id", (req, res) => {
	const { id } = req.params;
	const book = books.find((book) => book.id === Number(id));
	if (!book) {
		res.status(404).send("Book not found");
	}
	book.title = req.body.title;
	book.author = req.body.author;
	res.status(200).send("Book updated successfully");
});

app.delete("/books/:id", (req, res) => {
	const { id } = req.params;
	const book = books.find((book) => book.id === Number(id));
	if (!book) {
		res.status(404).send("Book not found");
	}
	const index = books.indexOf(book);
	books.splice(index, 1);
	res.status(200).send(`Book "${book.title}" successfully deleted`);
});

export default app;
