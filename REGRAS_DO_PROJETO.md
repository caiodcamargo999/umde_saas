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
- Pesquisa e extração de dados de CNPJ (Assertiva) (@https://assertivasolucoes.com.br/servicos/api/)
- Enriquecimento de leads para outbound
- Central WhatsApp Business API (multiatendente, histórico, modelos) (API não oficial, QR Code: https://wwebjs.dev/)
- Importação automática de leads do Canal Pro (Grupo OLX) (@https://developers.grupozap.com/)
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
- **Deploy:** Netlify (deploy automático a partir do repositório do GitHub)
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
- Sistema de integração de app de mensagens com CRM inspirado no Kommo CRM (https://www.kommo.com/pt-br/)
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
- O deploy é feito via Netlify, conectado ao repositório do GitHub.

### Recursos úteis
- [Documentação Next.js](https://nextjs.org/docs)
- [Tutorial Next.js](https://nextjs.org/learn-pages-router)
- [Repositório Next.js no GitHub](https://github.com/vercel/next.js)
- [Deploy na Netlify](https://www.netlify.com/)

---

> O conteúdo do `frontend/README.md` foi incorporado neste arquivo mestre. O arquivo pode ser removido do projeto. 

---

## 13. Diretrizes Avançadas de Produto — UMDÊ VENDAS (FIXAS)

### 13.1. Experiência Visual e Motion (Referência: Tradesflow.io)
- Interface escura predominante, com azul neon (`#0D4FF7`) como cor de ação
- Animações suaves baseadas em scroll, zoom, fade, tilt e microefeitos
- Interações responsivas com transições e microefeitos em botões, cards e seções
- Layout responsivo, storytelling visual e carrosséis animados
- Botões e ícones: glassmorphism leve ou flat, com hover azul neon e efeito glow
- Motion effects via GSAP, Framer Motion ou ScrollTrigger
- Skeleton UI para carregamento de dados
- Feedback visual em todos os cliques
- Suporte nativo a dark mode, performance otimizada

### 13.2. Identidade Visual UMDÊ (FIXA)
- Estilo dark-first, minimalista e sofisticado
- Paleta:
  - Fundo: preto `#000000` e cinza escuro
  - Cor de ação principal: azul escuro `#0D4FF7`
  - Secundárias: branco `#FFFFFF`, cinza claro `#E5E5E5` (apenas para contraste)
- Tipografia: Proxima Nova (ou Inter fallback), títulos extrabold/black, corpo regular/light
- Áreas claras apenas em destaques visuais específicos (ex: mockups)
- Alto contraste, clareza e acessibilidade

### 13.3. Estrutura da Home Page (Dark Style + Tradesflow.io)
- Hero escuro com azul pulsando
- Título animado: “O CRM mais poderoso para o mercado imobiliário”
- Botões animados: “Comece agora” e “Assista à demo”
- Mockup animado da interface (zoom-in, shadow flutuante)
- Cards de destaque com microanimações ao scroll (captação de leads, pré-vendas, WhatsApp, Canal Pro)
- Carrossel com UI real da plataforma, motion effects (slide lateral, blur suave)
- Depoimentos com fundo azul escuro e texto claro
- CTA final: fundo 100% azul escuro, bordas animadas, botão “Criar Conta Gratuita” com efeito glow

### 13.4. Estrutura Interna do CRM (Referência: Kommo CRM)
- Painel Kanban com funil de leads (drag-and-drop, etapas personalizáveis: Novo, Qualificado, Proposta, Fechado)
- Cards de lead: nome, fonte, valor, botões rápidos (WhatsApp, Agendar, Nota, Email)
- Dashboard: indicadores, cards de desempenho, gráficos de conversão/produtividade, ranking de pré-vendedores
- Central de mensagens: conversas em tempo real (WhatsApp, Email, Canal Pro), filtros por status/agente/última mensagem, integração com histórico da lead
- Cadastro e enriquecimento de leads: busca por CNPJ, extração via API Assertiva, cadastro automático de sócios
- Gestão de agentes: criar, editar, desativar, atribuir metas/leads, monitorar atividade em tempo real
- Automação de tarefas e metas de pré-venda

### 13.5. Funcionalidades UX Avançadas
- Motion effects em todos os elementos interativos
- Efeitos hover, tap, drag aplicados com suavidade
- Skeleton UI no carregamento
- Feedback visual em todas as ações
- Layout fluido, conversacional e responsivo
- Fidelidade total à identidade UMDÊ
- Experiência web premium: velocidade, transições, animações

## 14. Prioridades Absolutas (FIXAS)
- Layout escuro, moderno e sofisticado
- Design fluido, conversacional e responsivo
- Fidelidade total à identidade visual UMDÊ
- Estrutura de CRM funcional e responsiva (Kommo Style)
- Experiência web premium (UX, performance, motion)
- Lógica de vendas eficiente e intuitiva
- Aplicar todas as diretrizes acima em cada etapa do projeto

---

> Estas diretrizes são FIXAS e obrigatórias para todo o time. Qualquer decisão de design, UX, UI, front-end ou produto deve ser 100% alinhada a estas regras e referências. Consulte sempre este documento antes de iniciar qualquer tarefa ou entrega. 

---

## 15. Proibição de Emojis (FIXA)
- É terminantemente proibido o uso de emojis (coloridos ou não) em qualquer parte do projeto, incluindo ícones de interface, textos, botões, títulos e componentes visuais.
- Todos os ícones devem ser vetoriais (SVG), minimalistas, alinhados à identidade visual UMDÊ e preferencialmente monocromáticos ou com a paleta oficial.
- Exemplos de bibliotecas permitidas: Heroicons, Lucide, Phosphor, Feather, ou SVGs próprios.
- Esta regra é obrigatória para todo o time e para todas as entregas. 