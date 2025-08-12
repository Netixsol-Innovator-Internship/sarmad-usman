Task Manager API v2
A RESTful API for managing user tasks with JWT-based authentication, built using Node.js, Express, MongoDB, and Mongoose. Includes input validation with express-validator and comprehensive Swagger API documentation.

Features
User registration and login with JWT authentication

CRUD operations on tasks linked to authenticated users

Password hashing with bcryptjs

Input validation using express-validator

Auto-generated Swagger UI API documentation

MongoDB database integration with Mongoose ORM

Getting Started
Prerequisites
Node.js (v14+ recommended)

npm

MongoDB (local or remote)

Installation
Clone the repository and install dependencies:


git clone <repository-url>
cd task-manager-api-v2
npm install
Create a .env file in the root directory with the following environment variables:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret_key
Replace your_jwt_secret_key with a strong secret key for signing JWT tokens.

Running the Server
Development mode (auto-restarts on changes):

npm run dev
Production mode:


npm start
The server will run on http://localhost:5000 (or the port you specified).

Project Structure

src/
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── docs/
│   └── swagger.js       # Swagger documentation setup
├── middleware/
│   ├── auth.js          # JWT authentication middleware
│   └── validateRequest.js # Request validation middleware
├── models/
│   ├── User.js          # User mongoose model
│   └── Task.js          # Task mongoose model
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
└── server.js            # Express server setup and route mounting
API Endpoints
User Authentication
Method	Endpoint	Description	Body Parameters
POST	/api/users/register	Register a new user	{ name, email, password }
POST	/api/users/login	Login an existing user	{ email, password }

Tasks (Require Authentication via Bearer Token)
Method	Endpoint	Description	Body Parameters
GET	/api/tasks	Get all tasks of user	None
POST	/api/tasks	Create a new task	{ title }
PUT	/api/tasks/:id	Update a task by ID	Any fields of task (title, completed)
DELETE	/api/tasks/:id	Delete a task by ID	None

Authentication
Include the JWT token returned by login/register in the Authorization header for protected routes:


Authorization: Bearer <token>
Input Validation
Registration: name (required), email (valid email), password (min 6 chars)

Login: email (valid email), password (required)

Task Creation: title (required)

Invalid input returns HTTP 400 with detailed error messages.

Swagger Documentation
Explore and test the API via Swagger UI at:

http://localhost:5000/api-docs
This UI documents all available endpoints, request parameters, and responses.

Testing Checklist
 Register new user (POST /api/users/register)

 Login user (POST /api/users/login)

 Use JWT token in Authorization header (Bearer <token>)

 Create, read, update, delete tasks (/api/tasks)

 Handle invalid inputs with proper validation errors

 View and test API with Swagger docs (GET /api-docs)

Dependencies
express

mongoose

dotenv

bcryptjs

jsonwebtoken

express-validator

swagger-ui-express

swagger-jsdoc

nodemon (dev dependency)

