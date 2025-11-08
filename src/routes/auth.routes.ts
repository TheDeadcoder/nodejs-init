import { AuthController } from '../controllers/auth.controller';
import { createDocumentedRouter } from '../utils/documentedRouter';
import { loginSchema } from '../utils/validation';
import { authTokensSchema } from '../schemas/auth.schema';
import { successResponse} from '../schemas/response.schema';

const authController = new AuthController();

const documentedRouter = createDocumentedRouter({
  basePath: '/api/auth',
  defaultTags: ['Auth'],
  secureByDefault: false,
});

documentedRouter.post(
  '/login',
  {
    summary: 'Login user (Local environment only)',
    security: false,
    request: {
      body: {
        schema: loginSchema,
      },
    },
    responses: {
      200: {
        description: 'Login successful',
        schema: successResponse(authTokensSchema),
      },
    },
  },
  authController.login
);

export default documentedRouter.router;
