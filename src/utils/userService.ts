// userService.ts
import client from './apolloClient';
import { REGISTER_MUTATION, AUTHENTICATE_MUTATION, AuthResponse } from './mutations';

interface RegisterVariables {
  name: string;
  email: string;
  password: string;
}

interface AuthenticateVariables {
  email: string;
  password: string;
}

export async function registerUser(name: string, email: string, password: string): Promise<AuthResponse | null> {
  try {
    const { data } = await client.mutate<{ register: AuthResponse | null }, RegisterVariables>({
      mutation: REGISTER_MUTATION,
      variables: { name, email, password },
    });
    
    if (data?.register) {
      console.log('Registro exitoso:', data.register);
      return data.register;
    } else {
      console.error('Error: Respuesta de registro vacía');
      return null;
    }
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
}

export async function authenticateUser(email: string, password: string): Promise<AuthResponse | null> {
  try {
    const { data } = await client.mutate<{ authenticate: AuthResponse | null }, AuthenticateVariables>({
      mutation: AUTHENTICATE_MUTATION,
      variables: { email, password },
    });
    
    if (data?.authenticate) {
      console.log('Autenticación exitosa:', data.authenticate);
      return data.authenticate;
    } else {
      console.error('Error: Respuesta de autenticación vacía');
      return null;
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);
    throw error;
  }
}
