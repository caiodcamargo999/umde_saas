# UMDÊ SaaS CRM - Instruções Mestras do Projeto

## 1. Persona

**Product Designer Sênior de SaaS para o Mercado Imobiliário Brasileiro.**

Especialista em design de experiência do usuário (UX), desenvolvimento de sistemas SaaS escaláveis com foco em CRM imobiliário, e com profundo conhecimento nos mercados de captação e gestão de leads no Brasil.

## 2. Objetivo Principal

Desenvolver um SaaS CRM Imobiliário da UMDÊ, com linguagem formal e design 100% alinhado à identidade visual da marca. O objetivo é criar o sistema mais avançado do Brasil para:

- Captação automatizada de leads
- Prospecção qualificada via dados de CNPJ e redes integradas
- Gestão multicanal com foco em WhatsApp e Canal Pro
- Criação e controle de pré-vendedores
- Funil completo de venda e gestão patrimonial
- Suporte à jornada de investimento e revenda (modelo "Negócio pronto")

## 3. Funcionalidades do Sistema (Scope MVP+)

### CRM Completo Imobiliário
- Funil visual para controle de leads por estágio.
- Campos dinâmicos adaptáveis aos fluxos da UMDÊ (investimento de giro, patrimonial).
- Acompanhamento de taxa de ocupação, valorização e ROI individual por imóvel.

### Integração com Base de Dados Assertiva
- Pesquisa de CNPJs (inclusive SPEs).
- Extração automatizada dos dados dos sócios e contatos comerciais.
- Enriquecimento de leads para prospecção outbound.

### Conexão com WhatsApp Business API
- Central de atendimento com múltiplos atendentes.
- Gestão de mensagens, histórico e follow-ups.
- Modelos de mensagens pré-configuradas conforme cada tipo de lead.

### Conexão direta com Canal Pro (Grupo Zap)
- Importação automática de leads recebidas pela UMDÊ.
- Centralização do atendimento, tracking e taxa de conversão.

### Gestão de Equipe de Pré-Vendas
- Criação intuitiva de pré-vendedores e atribuição de leads.
- Métricas de performance por agente (tempo de resposta, taxa de conversão).
- Gamificação opcional com ranking de produtividade.

### Painel de Performance de Imóveis
- Indicadores: ROI previsto, tempo de revenda, taxa de ocupação, receita líquida.
- Integração com relatórios trimestrais da UMDÊ para investidores.
- Exportação em PDF/Excel para reuniões com stakeholders.

## 4. Identidade Visual do Web App

Seguir 100% o manual de marca da UMDÊ.

### Paleta de Cores:
- **Azul Principal:** `#0D4FF7` (confiança e tecnologia)
- **Preto:** `#000000` (força e sofisticação)
- **Branco:** `#FFFFFF` (limpeza e clareza)

### Tipografia Oficial:
- **Proxima Nova** (usando apenas largura Normal)
  - **Títulos:** Extrabold / Black
  - **Subtítulos:** Bold
  - **Corpo de texto:** Regular / Light

### Princípios de Design:
- Layout minimalista, responsivo e modular.
- Componentes com espaços amplos, foco na clareza e no alto contraste.
- Ícones vetoriais limpos e suporte a dark/light mode.

## 5. Fluxo de Criação e Arquitetura

1.  **Modelagem de Banco de Dados:** Relacionar `Imóveis`, `Leads`, `Agentes`, `Investidores`, `Contratos` e `Status`.
2.  **Criação da Interface (UI):** Conforme o manual visual.
3.  **Arquitetura Backend:** Foco em APIs para Assertiva (CNPJ), WhatsApp Business e Canal Pro.
4.  **Sistema de Mensagens:** Estrutura baseada no modelo Kommo CRM.
5.  **Dashboards:** Foco em investidores UMDÊ, com filtros por tipo de imóvel, localização e estratégia.

## 6. Benefícios para o Negócio

- Automatização da jornada de captação até a conversão.
- Integração completa entre canais e base de dados.
- Redução de CAC (Custo de Aquisição) e aumento de LTV.
- Fortalecimento do ecossistema UMDÊ como uma solução all-in-one.

## 7. Testes e Validação

- Teste de usabilidade com time interno da UMDÊ.
- Avaliar tempo médio de resposta a leads com e sem integração Assertiva.
- Teste A/B com diferentes templates de mensagens WhatsApp.
- Coletar feedback de corretores parceiros e investidores.