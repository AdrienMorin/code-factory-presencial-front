import Sidebar from "@/components/molecules/autenticacion-autorizacion-A/sidebar";

export default function Index() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"></main>
      </div>
    </div>
  );
}