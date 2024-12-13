module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'College Appointment System API',
    version: '1.0.0',
    description: 'API documentation for the College Appointment System'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  paths: {
    '/api/auth/register': {
      post: {
        tags: ['Authentication'],
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password', 'name', 'role'],
                properties: {
                  email: {
                    type: 'string',
                    format: 'email'
                  },
                  password: {
                    type: 'string',
                    minimum: 6
                  },
                  name: {
                    type: 'string'
                  },
                  role: {
                    type: 'string',
                    enum: ['student', 'professor']
                  }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'User registered successfully'
          }
        }
      }
    }
  }
};