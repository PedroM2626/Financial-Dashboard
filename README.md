# Financial Dashboard

> Dashboard moderno para controle financeiro, desenvolvido com React, TypeScript, Vite e TailwindCSS.

---

## Visão Geral

O Financial Dashboard é uma aplicação web que permite monitorar métricas financeiras, visualizar gráficos, acompanhar transações e obter insights sobre sua saúde financeira. O projeto utiliza componentes reutilizáveis, design responsivo e integrações modernas para proporcionar uma experiência rica e intuitiva.

## Funcionalidades

- Visualização de métricas financeiras (saldo, receitas, despesas, economia)
- Gráficos interativos (linha, barra) para acompanhamento de evolução
- Tabela de transações com filtros, busca e status
- Sidebar de navegação com ícones
- Interface responsiva e tema escuro

## Estrutura de Pastas

```
├── public/                # Arquivos públicos (imagens, ícones)
├── src/
│   ├── components/
│   │   ├── dashboard/     # Componentes do dashboard (Sidebar, MetricsCards, FinancialCharts, TransactionsTable)
│   │   ├── ui/            # Componentes de UI reutilizáveis (botão, card, tabela, etc)
│   ├── lib/               # Funções utilitárias
│   ├── pages/             # Páginas principais (Dashboard)
│   ├── stories/           # Exemplos e documentação de componentes
│   ├── index.css          # Estilos globais (Tailwind)
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do TailwindCSS
├── tsconfig.json          # Configuração do TypeScript
├── vite.config.ts         # Configuração do Vite
```

## Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build rápido)
- [TailwindCSS](https://tailwindcss.com/) (estilização)
- [Radix UI](https://www.radix-ui.com/) (componentes acessíveis)
- [Lucide Icons](https://lucide.dev/) (ícones SVG)
- [Recharts](https://recharts.org/) (gráficos)
- [React Router](https://reactrouter.com/) (navegação)

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/PedroM2626/Financial-Dashboard.git
   cd Financial-Dashboard
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse no navegador:**
   [http://localhost:5173](http://localhost:5173)

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a versão de produção
- `npm run preview` — Visualiza o build de produção
- `npm run lint` — Executa o linter

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature/fix: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha feature'`
4. Envie para o repositório remoto: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Screenshots

![Dashboard](public/vite.svg)

---

## Autor

PedroM2626
