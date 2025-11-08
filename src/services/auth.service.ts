import { LoginInput } from '../utils/validation';
import {supabase} from '../middleware/auth.middleware';
export class AuthService {
  async login(data: LoginInput) {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      throw new Error(error.message);
    }
    return {
      user: authData.user,
      session: authData.session,
    };
  }
}