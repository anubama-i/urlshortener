🔗 URL Shortener

A simple URL Shortener web application built using Node.js, Express, EJS, Bootstrap, and MongoDB.
This project shortens long URLs using shortId.generate() and also tracks the number of clicks for each short URL.

🚀 Features

Shorten long URLs instantly

Redirect short URLs to the original URL

Track number of clicks for each short URL

Responsive UI using Bootstrap

Server-side rendering with EJS

Persistent storage with MongoDB

🛠 Tech Stack

Backend: Node.js, Express

Frontend: EJS, Bootstrap

Database: MongoDB

Short URL Generator: shortid

📂 Project Structure
url-shortener/
│
├── views/          # EJS templates
├── public/         # Static files (CSS)
├── models/         # MongoDB schemas
├── routes/         # Express routes
├── server.js       # Main server file
├── package.json
└── README.md

⚙️ How It Works

User enters a long URL

shortId.generate() creates a unique short ID

The original URL, short ID, and click count are stored in MongoDB

When the short URL is visited:

Click count is incremented

User is redirected to the original URL

🧑‍💻 Installation & Setup

Clone the repository

git clone https://github.com/your-username/url-shortener.git


Navigate to the project directory

cd url-shortener


Install dependencies

npm install


Start MongoDB (local or MongoDB Atlas)

Run the application

npm start


Open in browser

http://localhost:3000

📊 Click Tracking

Each short URL has a clicks field in the database

The value increases every time the short link is accessed

Useful for basic analytics and usage tracking

📌 Example

Original URL

https://www.example.com/some/very/long/url


Short URL

http://localhost:3000/AbC123


Click Count

Clicks: 7

🎯 Learning Outcomes

Understanding Express routing

Working with MongoDB and Mongoose

Using EJS for server-side rendering

Implementing URL redirection

Tracking analytics using a database field

📜 License

This project is open-source and created for learning and educational purposes.
