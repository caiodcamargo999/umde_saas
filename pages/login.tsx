import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Bem-vindo de volta | UMDÊ CRM</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-umde-dark animate-fade-in">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 border border-slate-100 flex flex-col items-center motion-safe:hover:scale-105 transition-transform duration-300">
          <h1 className="text-3xl md:text-4xl font-black text-umde-blue mb-6 text-center">
            Bem-vindo de volta
          </h1>
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-umde-blue text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 motion-safe:animate-pulse">
            <svg className="w-6 h-6" viewBox="0 0 48 48">
              <g>
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 6.5 29.3 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 20-8.1 20-20 0-1.3-.1-2.7-.5-4z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.7l7 5.1C15.2 17.1 19.2 14.5 24 14.5c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 6.5 29.3 4.5 24 4.5c-7.2 0-13.3 4.1-16.7 10.2z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 45.5c5.9 0 10.9-1.9 14.5-5.2l-6.7-5.5c-2 1.4-4.5 2.2-7.8 2.2-6.1 0-11.2-4.1-13-9.6l-7 5.4C7.1 41.1 14.9 45.5 24 45.5z"
                />
                <path
                  fill="#EA4335"
                  d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 6.5 29.3 4.5 24 4.5c-7.2 0-13.3 4.1-16.7 10.2z"
                />
              </g>
            </svg>
            Entrar com Google
          </button>
          <div className="w-full flex items-center my-4">
            <div className="flex-grow h-px bg-slate-200"></div>
            <span className="mx-3 text-slate-400 font-bold">ou</span>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
          <form className="w-full flex flex-col gap-4 animate-fade-in-up">
            <input
              type="email"
              placeholder="Seu email"
              className="input-focus w-full px-5 py-3 rounded-full border-2 border-slate-200 text-lg focus:outline-none transition-all duration-200"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="input-focus w-full px-5 py-3 rounded-full border-2 border-slate-200 text-lg focus:outline-none transition-all duration-200"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-umde-blue text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 motion-safe:hover:scale-105"
            >
              Entrar com Email
            </button>
          </form>
          <p className="mt-6 text-slate-600 text-center text-sm">
            Não tem uma conta?{' '}
            <Link
              href="/cadastro"
              className="text-umde-blue font-bold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
