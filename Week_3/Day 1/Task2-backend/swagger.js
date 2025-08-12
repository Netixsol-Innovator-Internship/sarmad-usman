const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'Task Manager API',
    description: 'A simple API to manage tasks.',
    version: '1.0.0',
  },
  host: 'task2-backend-zeta.vercel.app',
  basePath: '/',
  schemes: ['https', 'http'],  // Added https here
  paths: {
    '/api/tasks': {
      get: {
        summary: 'Get all tasks',
        responses: {
          200: {
            description: 'Tasks retrieved successfully',
          },
        },
      },
      post: {
        summary: 'Create a new task',
        parameters: [
          {
            in: 'body',
            name: 'task',
            description: 'Task object',
            required: true,
            schema: {
              type: 'object',
              required: ['title', 'completed'],
              properties: {
                title: { type: 'string' },
                completed: { type: 'boolean' },
              },
            },
          },
        ],
        responses: {
          201: {
            description: 'Task created successfully',
          },
        },
      },
    },
    '/api/tasks/{id}': {
      get: {
        summary: 'Get task by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Task retrieved successfully',
          },
          404: {
            description: 'Task not found',
          },
        },
      },
      put: {
        summary: 'Update task by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
          {
            in: 'body',
            name: 'task',
            description: 'Updated task object',
            required: true,
            schema: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                completed: { type: 'boolean' },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'Task updated successfully',
          },
          404: {
            description: 'Task not found',
          },
        },
      },
      delete: {
        summary: 'Delete task by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Task deleted successfully',
          },
          404: {
            description: 'Task not found',
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
