🛒 Simple E-commerce Store
A basic e-commerce web application built with HTML/CSS/JavaScript for the frontend and Express.js + MongoDB for the backend. Users can view products, add them to a cart, and simulate a checkout process.

📦 Features
Product listing page
Product details
Add to cart functionality
View cart and simulate checkout
RESTful API for products and orders
Local storage-based cart for simplicity
🧰 Tech Stack
Frontend:
HTML5
CSS3
JavaScript (Vanilla)
Backend:
Node.js
Express.js
MongoDB with Mongoose
🗂️ Project Structure
simple-ecommerce-store/ ├── backend/ │ ├── models/ │ ├── routes/ │ └── server.js ├── frontend/ │ ├── index.html │ ├── cart.html │ ├── css/ │ └── js/ ├── package.json └── README.md

yaml Copy Edit

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/simple-ecommerce-store.git
cd simple-ecommerce-store
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Update MongoDB connection in server.js if needed:

js
Copy
Edit
mongoose.connect('mongodb://localhost:27017/ecommerce');
Then start the server:

bash
Copy
Edit
node server.js
Server will run at http://localhost:5000/

3. Frontend Setup
Simply open frontend/index.html in your browser.

🛠️ API Endpoints
GET /api/products
Returns list of products.

POST /api/orders
Accepts a JSON payload for placing orders.
