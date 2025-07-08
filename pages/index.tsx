import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>UMDÊ SaaS CRM</title>
        <meta
          name="description"
          content="CRM Imobiliário moderno, seguro e minimalista."
        />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-umde-dark px-4">
        <section className="w-full max-w-3xl bg-[#101C3A]/80 rounded-2xl shadow-2xl p-8 md:p-16 flex flex-col items-center gap-8 mt-12 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black text-umde-blue mb-2 text-center drop-shadow-lg tracking-tight font-sans">
            O CRM Imobiliário Mais Inteligente do Brasil
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-white/80 mb-4 max-w-2xl text-center">
            Captação, qualificação e venda de imóveis com automações, WhatsApp e inteligência de dados — tudo em um só lugar.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="/cadastro"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-umde-blue text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 scale-100 hover:scale-105 active:scale-95"
              tabIndex={0}
            >
              Comece Grátis Agora
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-umde-blue text-umde-blue font-bold text-lg bg-umde-dark hover:bg-blue-900 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 scale-100 hover:scale-105 active:scale-95"
              tabIndex={0}
            >
              Assista à demonstração
            </a>
          </div>
        </section>
        <footer className="text-xs text-white/40 mt-auto mb-4 text-center w-full">
          &copy; {new Date().getFullYear()} UMDÊ SaaS CRM. Todos os direitos reservados.
        </footer>
      </main>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
}
