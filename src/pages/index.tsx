import Head from 'next/head';
import { Header } from '../components/molecules/Header'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba del Header</title>
        <meta name="description" content="Probando el Header con ShadcnUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Puedes agregar más contenido debajo del header para probar el comportamiento */}
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl">Contenido debajo del Header</h1>
      </main>
    </div>
  );
}
