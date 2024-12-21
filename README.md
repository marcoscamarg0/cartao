# Credit Card Form - Vite + React + Tailwind CSS

Este projeto é um formulário interativo e estiloso para entrada de dados de cartão de crédito, criado como uma brincadeira usando Vite, React e Tailwind CSS.

## Funcionalidades
- Entrada de dados para:
  - Número do cartão
  - Data de validade
  - CVV
  - Nome no cartão
  - CPF
- Design responsivo e moderno, utilizando Tailwind CSS.
- Totalmente funcional e preparado para personalizações.

---

## Tecnologias Utilizadas
- **Vite**: Ferramenta de construção rápida para projetos frontend.
- **React**: Biblioteca para criação de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização.

---

## Estrutura de Arquivos
```
credit-card-form/
├── node_modules/      # Dependências do projeto
├── public/            # Arquivos estáticos
│   └── vite.svg       # Logo do Vite
├── src/               # Código-fonte
│   ├── assets/        # Recursos adicionais
│   ├── App.jsx        # Componente principal
│   ├── index.css      # Configuração do Tailwind CSS
│   ├── main.jsx       # Ponto de entrada da aplicação
├── .gitignore         # Arquivos ignorados pelo Git
├── index.html         # HTML principal
├── package.json       # Dependências do projeto
├── README.md          # Documentação do projeto
├── tailwind.config.js # Configuração do Tailwind CSS
└── vite.config.js     # Configuração do Vite
```

---

## Instalação e Configuração

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/credit-card-form.git
   cd credit-card-form
   ```

2. **Instale as Dependências**
   ```bash
   npm install
   ```

3. **Configure o Tailwind CSS**
   Certifique-se de que o arquivo `tailwind.config.js` está assim:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Inicie o Servidor de Desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Abra no Navegador**
   Acesse o projeto no navegador: [http://localhost:5173](http://localhost:5173)

---

## Como Personalizar

1. **Editar Estilos**: Modifique o arquivo `index.css` para adicionar ou alterar estilos.
2. **Alterar Componentes**: Edite `App.jsx` para personalizar o formulário.
3. **Adicionar Funcionalidades**: Insira validações e lógica no formulário para melhorar a usabilidade.

---

## Exemplo de Código Principal (App.jsx)
```jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-6 text-center">Detalhes do Cartão</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Número do Cartão</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="1234 5678 9123 4567"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Data de Validade</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="MM/AA"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="123"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome no Cartão</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="João da Silva"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CPF</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="000.000.000-00"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
```

---

## Problemas Conhecidos
- **Estilos não aparecem**: Certifique-se de que o arquivo `index.css` está sendo importado corretamente no `main.jsx`.
- **Configuração do Tailwind incorreta**: Verifique o arquivo `tailwind.config.js`.

---

## Contribuição
Fique à vontade para abrir issues e pull requests para melhorias ou correções.

---

## Licença
Este projeto é apenas para fins de aprendizado e diversão. Não há restrições de uso.

