import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticateUser } from "@/utils/userService"; // Asegúrate de que la ruta sea correcta

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authenticateUser(email, password);
      if (response?.token) {
        // Autenticación exitosa, redirigir al usuario
        setError(null);
        router.push("./welcome"); // Redirige a la página de bienvenida o dashboard
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error en autenticación:", error);
      setError("Ocurrió un error. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="mi@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Button type="submit" className="w-full">
            Ingresar
          </Button>
          <Button variant="outline" className="w-full">
            Continuar con Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Link href="./signup" className="underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
