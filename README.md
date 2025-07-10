# UMDÊ SaaS CRM

O CRM Imobiliário mais inteligente do Brasil, desenvolvido para captação, qualificação e venda de imóveis com automações, WhatsApp, inteligência de dados e integrações — tudo em um só lugar.

## 🚀 Stack Principal
- **Frontend:** Next.js 15 + React 19 + TypeScript
- **UI:** Tailwind CSS
- **Autenticação:** Firebase Auth (Google e Email/Senha)
- **Deploy:** Netlify (deploy automático via GitHub)

## 🔗 Integrações de API
- **Assertiva (CNPJ):** [Solicitar API](https://assertivasolucoes.com.br/servicos/api/)
- **WhatsApp Business (API não oficial):** [wwebjs.dev](https://wwebjs.dev/) (QR Code no próprio software)
- **Canal Pro (Grupo OLX):** [Solicitar API](https://developers.grupozap.com/)
- **Referência de sistema:** [Kommo CRM](https://www.kommo.com/pt-br/)

## 🛠️ Como rodar localmente

```bash
npm install
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🌐 Deploy (Netlify)
- O deploy é feito automaticamente a partir do repositório do GitHub.
- Basta conectar o repositório no painel do Netlify e configurar:
  - Build command: `npm run build`
  - Publish directory: `.next`
- O Netlify detecta automaticamente projetos Next.js modernos, não é necessário plugin extra.

## 🚀 Deploy no Netlify (Passo a Passo)

1. Faça push do projeto para o GitHub.
2. No painel do Netlify, conecte o repositório.
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - (Opcional) **Node version:** `20` (adicione em Site settings > Environment > Environment variables: `NODE_VERSION=20`)
4. Se usar variáveis de ambiente (ex: Firebase), adicione-as no painel do Netlify em Site settings > Environment > Environment variables.
5. Clique em "Deploy site".

Se houver erro relacionado ao arquivo `next.config.ts`, renomeie para `next.config.js` e ajuste o export para CommonJS:
```js
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };
module.exports = nextConfig;
```

## 📁 Estrutura do Projeto
- `src/app/` — Páginas, layouts e estilos globais
- `public/` — Assets públicos
- `REGRAS_DO_PROJETO.md` — Regras mestras de UI/UX, integrações e arquitetura

## 📚 Documentação e Regras
Consulte sempre o arquivo [`REGRAS_DO_PROJETO.md`](./REGRAS_DO_PROJETO.md) para diretrizes de design, integrações e boas práticas.

---

> Projeto desenvolvido por UMDÊ. Todos os direitos reservados. 