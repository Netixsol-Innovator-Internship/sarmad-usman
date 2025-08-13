const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'A simple API to manage tasks with authentication and validation',
      termsOfService: 'https://yourcompany.com/terms',
      contact: {
        name: 'API Support',
        url: 'https://yourcompany.com/support',
        email: 'support@yourcompany.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'https://task-manager-api-v2.vercel.app',
        description: 'Local development server',
      },
      {
        url: 'https://api.yourcompany.com',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        UserRegisterInput: {
          type: 'object',
          required: ['username', 'email', 'password'],
          properties: {
            username: { type: 'string', example: 'john_doe' },
            email: { type: 'string', format: 'email', example: 'john@example.com' },
            password: { type: 'string', example: 'strongPassword123' },
          },
        },
        UserLoginInput: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', format: 'email', example: 'john@example.com' },
            password: { type: 'string', example: 'strongPassword123' },
          },
        },
        UserTokenResponse: {
          type: 'object',
          properties: {
            token: { type: 'string', example: 'jwt.token.here' },
          },
        },
        TaskInput: {
          type: 'object',
          required: ['title', 'completed'],
          properties: {
            title: { type: 'string', example: 'Finish homework' },
            completed: { type: 'boolean', example: false },
          },
        },
        Task: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '60f7f28f9b1d4c3d88e9f0c3' },
            title: { type: 'string', example: 'Finish homework' },
            completed: { type: 'boolean', example: false },
            user: { type: 'string', example: '60f7f21a9b1d4c3d88e9f0c2' },
            createdAt: { type: 'string', format: 'date-time', example: '2023-01-01T12:00:00Z' },
            updatedAt: { type: 'string', format: 'date-time', example: '2023-01-02T12:00:00Z' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Error message' },
            code: { type: 'integer', example: 400 },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
    paths: {
      '/api/users/register': {
        post: {
          tags: ['Auth'],
          summary: 'Register a new user',
          description: 'Creates a new user account in the system.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/UserRegisterInput' },
              },
            },
          },
          responses: {
            201: { description: 'User created successfully' },
            400: {
              description: 'Invalid input',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
          security: [], // public route
        },
      },
      '/api/users/login': {
        post: {
          tags: ['Auth'],
          summary: 'Login user and get JWT',
          description: 'Authenticate user and receive a JWT token.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/UserLoginInput' },
              },
            },
          },
          responses: {
            200: {
              description: 'Login successful',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/UserTokenResponse' },
                },
              },
            },
            400: {
              description: 'Invalid credentials',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
          security: [], // public route
        },
      },
      '/api/tasks': {
        get: {
          tags: ['Tasks'],
          summary: 'Get all tasks for authenticated user',
          description: 'Returns a list of tasks for the current authenticated user.',
          responses: {
            200: {
              description: 'List of tasks',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Task' },
                  },
                },
              },
            },
            401: { description: 'Unauthorized' },
          },
        },
        post: {
          tags: ['Tasks'],
          summary: 'Create a new task',
          description: 'Add a new task to the authenticated user’s task list.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/TaskInput' },
              },
            },
          },
          responses: {
            201: {
              description: 'Task created successfully',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            400: { description: 'Invalid input' },
            401: { description: 'Unauthorized' },
          },
        },
      },
      '/api/tasks/{id}': {
        get: {
          tags: ['Tasks'],
          summary: 'Get task by ID',
          description: 'Retrieve a specific task by its ID.',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Task ID',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'Task found',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            401: { description: 'Unauthorized' },
            404: { description: 'Task not found' },
          },
        },
        put: {
          tags: ['Tasks'],
          summary: 'Update task by ID',
          description: 'Modify an existing task by ID.',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Task ID',
              required: true,
              schema: { type: 'string' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/TaskInput' },
              },
            },
          },
          responses: {
            200: {
              description: 'Task updated successfully',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Task' },
                },
              },
            },
            400: { description: 'Invalid input' },
            401: { description: 'Unauthorized' },
            404: { description: 'Task not found' },
          },
        },
        delete: {
          tags: ['Tasks'],
          summary: 'Delete task by ID',
          description: 'Remove a task by its ID.',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Task ID',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: { description: 'Task deleted successfully' },
            401: { description: 'Unauthorized' },
            404: { description: 'Task not found' },
          },
        },
      },
    },
  },
  apis: [],
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCss: `
        .swagger-ui .topbar { background-color: #34495e; }
        .swagger-ui .topbar a { color: #ecf0f1; font-weight: 700; font-size: 20px; }
        .swagger-ui .info h1, .swagger-ui .info h2, .swagger-ui .info p { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2c3e50; }
        .swagger-ui .opblock-summary { background-color: #2980b9; color: white; border-radius: 5px; }
        .swagger-ui .opblock-summary:hover { background-color: #1c5980; }
      `,
      customSiteTitle: 'Task Manager API Documentation',
      swaggerOptions: {
        docExpansion: 'none',
        deepLinking: true,
        defaultModelsExpandDepth: -1,
        displayRequestDuration: true,
        persistAuthorization: true,
      },
    })
  );
};

module.exports = setupSwagger;
