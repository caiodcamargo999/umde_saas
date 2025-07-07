# UMDÊ SaaS CRM — Regras Mestras do Projeto

## 1. Persona e Objetivo

**Persona:** Product Designer Sênior de SaaS para o Mercado Imobiliário Brasileiro, especialista em UX, sistemas SaaS escaláveis e gestão de leads.

**Objetivo:** Desenvolver o CRM Imobiliário mais avançado do Brasil, 100% alinhado à identidade visual da UMDÊ, com foco em:
- Captação automatizada de leads
- Prospecção qualificada via CNPJ e redes
- Gestão multicanal (WhatsApp, Canal Pro)
- Controle de pré-vendedores
- Funil completo de vendas e gestão patrimonial
- Suporte à jornada de investimento e revenda

## 2. Funcionalidades Essenciais (MVP+)

- Funil visual de leads por estágio
- Campos dinâmicos adaptáveis aos fluxos UMDÊ
- Acompanhamento de taxa de ocupação, valorização e ROI
- Pesquisa e extração de dados de CNPJ (Assertiva)
- Enriquecimento de leads para outbound
- Central WhatsApp Business API (multiatendente, histórico, modelos)
- Importação automática de leads do Canal Pro
- Gestão de pré-vendas (criação, atribuição, métricas, gamificação)
- Painel de performance de imóveis (ROI, tempo, ocupação, exportação)

## 3. Identidade Visual e Design

- **Dark & Minimalista:** Todo o projeto deve ser escuro, com alto contraste e design minimalista.
- **Background:** Sempre escuro (`#0D1A3A` ou similar).
- **Cores:**
  - Azul Principal: `#0D4FF7`
  - Preto: `#000000`
  - Branco: `#FFFFFF`
- **Tipografia:**
  - Proxima Nova (largura normal) ou Inter (fallback)
  - Títulos: Extrabold/Black
  - Subtítulos: Bold
  - Corpo: Regular/Light
- **Princípios de UI/UX:**
  - Layout modular, espaçoso e responsivo
  - Alto contraste e clareza
  - Ícones vetoriais limpos
  - Motion effects suaves e profissionais (hover, fade, microinterações)
  - Acessibilidade: foco visível, labels, contraste

## 4. Motion & Interatividade
- Efeitos de transição em botões, seções e microinterações
- Animações sempre suaves e discretas

## 5. Stack Tecnológica
- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **UI:** React (Next.js), Tailwind para todo o styling
- **Autenticação:** Firebase Auth (Google e Email/Senha)
- **Controle de Versão:** Git + GitHub
- **Proibido:** HTML puro, jQuery, bibliotecas legadas

## 6. Princípios de Desenvolvimento
- **SEO:** SSR/SSG, meta tags descritivas
- **Performance:** Imagens otimizadas, code splitting, Lighthouse >90
- **Escalabilidade:** Componentes reutilizáveis, estrutura modular
- **Eficiência:** Tailwind utilitário, evitar CSS customizado
- **Testes:** Manual e automatizado para fluxos críticos
- **Documentação:** Manter este arquivo e README sempre atualizados

## 7. Fluxos de UX
- **Autenticação:**
  - Cadastro/login via Google ou Email/Senha
  - Verificação de email obrigatória antes do dashboard
  - Mensagens claras de feedback/erro
  - Rotas protegidas: só usuários verificados acessam `/dashboard`
- **Navegação:**
  - Navegação clara e consistente
  - Destaque para página/aba atual

## 8. Arquitetura e Modelagem
- Relacionar entidades: Imóveis, Leads, Agentes, Investidores, Contratos, Status
- Backend orientado a APIs (Assertiva, WhatsApp, Canal Pro)
- Sistema de mensagens inspirado no Kommo CRM
- Dashboards com filtros por tipo, localização, estratégia

## 9. Benefícios para o Negócio
- Automatização da jornada de captação à conversão
- Integração total entre canais e dados
- Redução de CAC, aumento de LTV
- UMDÊ como solução all-in-one

## 10. Testes e Validação
- Testes de usabilidade com time UMDÊ
- Medir tempo de resposta a leads (com/sem Assertiva)
- Teste A/B de templates WhatsApp
- Coletar feedback de corretores e investidores

## 11. O que NÃO fazer
- Não usar backgrounds claros
- Não usar bibliotecas/frameworks legados
- Não subir `node_modules` ou builds no GitHub
- Nunca deixar segredos/API keys hardcoded

---

**Consulte SEMPRE este arquivo antes de tomar decisões de design, arquitetura ou código.**

Para detalhes completos, veja também o [README.md](./README.md) e o manual de marca UMDÊ. 

---

## 12. Instruções de Inicialização e Recursos Next.js

Este projeto foi iniciado com [Next.js](https://nextjs.org) via [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

### Como rodar localmente

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

- Edite as páginas em `src/app/` para ver atualizações automáticas.
- Rotas de API podem ser criadas em `src/app/api/`.
- O projeto utiliza [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) para otimização de fontes.

### Recursos úteis
- [Documentação Next.js](https://nextjs.org/docs)
- [Tutorial Next.js](https://nextjs.org/learn-pages-router)
- [Repositório Next.js no GitHub](https://github.com/vercel/next.js)
- [Deploy na Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

> O conteúdo do `frontend/README.md` foi incorporado neste arquivo mestre. O arquivo pode ser removido do projeto. 