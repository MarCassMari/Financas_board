# Dashboard Finanças

Este é o backend de um projeto de dashboard para gerenciar finanças, desenvolvido em Node.js.

## 📦 Estrutura do Projeto

-   **`index.js`**: Arquivo principal do projeto.
-   **`eslint.config.js`**: Configuração do ESLint para garantir a qualidade do código.
-   **`package.json`**: Gerenciamento de dependências e scripts do projeto.

## 🚀 Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript.
-   **ESLint**: Ferramenta para análise de código.
-   **Husky**: Gerenciamento de hooks Git.
-   **Lint-Staged**: Aplicação de lint nos arquivos staged.

## 📖 Como Usar

1. Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd dashboard_financas
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure os hooks do Husky:

    ```bash
    npm run postinstall
    ```

4. Execute o projeto:
    ```bash
    node index.js
    ```

## 🛠️ Scripts Disponíveis

-   **`npm run postinstall`**: Configura os hooks do Husky.

## 📂 Arquivos Ignorados

Os seguintes arquivos e diretórios estão no `.gitignore`:

-   `node_modules/`
-   `.env`
