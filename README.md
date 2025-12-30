# 🔗 URL Shortener

A simple **URL Shortener** web application built using **Node.js**, **Express**, **EJS**, **Bootstrap**, and **MongoDB**.  
This project shortens long URLs using `shortId.generate()` and also tracks the **number of clicks** for each short URL.

---

## 🚀 Features

- Shorten long URLs instantly
- Redirect short URLs to the original URL
- Track number of clicks for each short URL
- Responsive UI built with Bootstrap
- Server-side rendering using EJS
- Persistent data storage with MongoDB

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS, Bootstrap
- **Database:** MongoDB
- **Short URL Generator:** shortid

---

## 📂 Project Structure

url-shortener/
│
├── views/ # EJS templates
├── models/ # MongoDB schemas
├── server.js # Entry point
├── package.json
└── README.md

---

## ⚙️ How It Works

1. User submits a long URL
2. `shortId.generate()` creates a unique short code
3. URL, short code, and click count are stored in MongoDB
4. Each visit to the short URL:
   - Increments the click count
   - Redirects to the original URL

---

## 🧑‍💻 Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/url-shortener.git
``
   
2.Move into the project directory
   ```bash
   cd url-shortener
```

3.Install dependencies
   ```bash
   npm install
```

3.Start MongoDB (local or Atlas)
4.Run the application
   ```bash
   npm run dev
```

---

## 📊 Click Tracking
Each short URL maintains a clicks field in the database
The count increases every time the short link is accessed
Helps analyze how often a short URL is used

📌 Example
Original URL
https://www.example.com/very/long/url

Short URL
http://localhost:3000/XyZ12A

Clicks

makefile
Copy code
Clicks: 5

---

## 🎯 Learning Outcomes
Express routing and middleware

MongoDB CRUD operations

Server-side rendering with EJS

Implementing click analytics

Building a complete full-stack project

---

## 📜 License
This project is open-source and intended for educational purposes.
