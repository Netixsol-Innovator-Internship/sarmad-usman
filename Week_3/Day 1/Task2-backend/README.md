# Task Manager API

This is a simple **Task Manager API** built using **Node.js** and **Express.js**. It allows you to perform **CRUD** (Create, Read, Update, Delete) operations on tasks. The API is designed to be lightweight and easy to use. It also provides interactive documentation using **Swagger** and is designed for easy testing with **Postman**.

## Features

### CRUD Operations
The API allows managing tasks with the following operations:

- **GET /api/tasks**: Retrieve all tasks.
- **GET /api/tasks/:id**: Retrieve a task by its unique ID.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update an existing task.
- **DELETE /api/tasks/:id**: Delete a task.

### API Documentation
The API is documented using **Swagger**. You can view and interact with the API through Swagger UI at the following endpoint:

/api-docs


### In-memory storage
Tasks are stored in **memory** (no database is used), meaning that the tasks will not persist after the server is restarted.

## Tech Stack

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building RESTful APIs.
- **Swagger UI**: For API documentation and interactive testing.
- **Postman**: For manual testing and API exploration.

API Endpoints
The following are the available endpoints for the Task Manager API:

/api/tasks
GET /api/tasks: Retrieves all tasks.

POST /api/tasks: Creates a new task.

/api/tasks/{id}
GET /api/tasks/{id}: Retrieves a specific task by its unique ID.

PUT /api/tasks/{id}: Updates a task by its ID.

DELETE /api/tasks/{id}: Deletes a task by its ID.

For more details on request bodies and response formats, check the Swagger UI documentation.

Error Handling
The API responds with appropriate status codes to indicate success or failure:

200 OK: Successful request.

201 Created: Resource successfully created.

400 Bad Request: Invalid input or missing parameters.

404 Not Found: Resource not found.

500 Internal Server Error: Unexpected error occurred.

Example Responses
Create Task (POST /api/tasks)

{
  "success": true,
  "data": {
    "id": 2,
    "title": "Learn Swagger",
    "completed": false
  },
  "message": "Task created successfully"
}

Retrieve Task (GET /api/tasks/1)
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false
  },
  "message": "Task retrieved successfully"
}

Update Task (PUT /api/tasks/1)
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express Framework",
    "completed": true
  },
  "message": "Task updated successfully"
}

Delete Task (DELETE /api/tasks/1)
{
  "success": true,
  "message": "Task deleted successfully"
}

Testing with Postman
For manual testing, you can use Postman to interact with the API endpoints. Here's how:

Open Postman.

Enter the appropriate URL (e.g., http://localhost:8000/api/tasks).

Select the HTTP method (GET, POST, PUT, DELETE).

Add request headers or body content if needed.

Send the request and view the response.