export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0D1A3A] text-white">
      <div className="bg-[#101C3A]/80 rounded-2xl shadow-2xl p-8 md:p-16 flex flex-col items-center gap-8 animate-fade-in w-full max-w-md mt-2">
        <h1 className="text-3xl md:text-5xl font-black text-[#0D4FF7] mb-2 text-center font-sans">
          Login / Registro
        </h1>
        <p className="text-white/80 text-center max-w-md">Em breve: autenticação com Google e Email/Senha via Firebase.</p>
      </div>
    </main>
  );
} 