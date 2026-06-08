# 🏪 App de Cadastro de Lojas

Aplicativo desenvolvido em **React Native** para gerenciamento de lojas, permitindo cadastrar, visualizar, editar e excluir registros de forma simples e intuitiva.

---

## 🚀 Funcionalidades

* ✅ Cadastro de lojas
* ✅ Listagem de lojas cadastradas
* ✅ Visualização de detalhes
* ✅ Edição de informações
* ✅ Exclusão de registros
* ✅ Exibição de imagens via URL
* ✅ Integração com Firebase Firestore

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* React Native
* TypeScript
* Axios
* React Navigation
* Hooks Customizados

### Backend

* Node.js
* TypeScript
* Firebase Admin SDK
* Express

### Banco de Dados

* Firebase Firestore

---

## 📱 Sobre o Projeto

O aplicativo foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento mobile utilizando React Native e integração com serviços em nuvem.

Por meio das operações CRUD (*Create, Read, Update e Delete*), o usuário pode gerenciar informações de lojas armazenadas no Firebase Firestore, garantindo persistência e sincronização dos dados.

A navegação entre as telas é realizada com React Navigation, proporcionando uma experiência fluida, organizada e intuitiva.

---

## ⚙️ Configuração do Projeto

### 1. Configurar o Firebase

Crie um projeto no Firebase e faça o download da chave de serviço.

Adicione o arquivo na pasta **backend** com o nome:

```text
firebase-key.json
```

---

### 2. Instalar Dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Configurar a API

Arquivo:

```ts
src/services/api.ts
```

Configuração:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://SEU_IP:3000",
  timeout: 5000,
});
```

Substitua **SEU_IP** pelo endereço IP da máquina que está executando a API.

> O dispositivo móvel e o servidor devem estar conectados à mesma rede.

---

## 📂 Estrutura do Projeto

### Backend

```text
backend
├── src
│   └── server.ts
├── firebase-key.json
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Frontend

```text
frontend
├── assets
├── src
│   ├── @types
│   │   └── loja.ts
│   ├── components
│   │   ├── LojaCard.tsx
│   │   └── StyleLojaCard.ts
│   ├── data
│   │   └── mockData.ts
│   ├── hooks
│   │   ├── useCadastroLoja.ts
│   │   └── useLojas.ts
│   ├── screens
│   │   ├── cadastroLoja
│   │   │   ├── CadastroLoja.tsx
│   │   │   └── CadastroLojaStyles.ts
│   │   ├── Details
│   │   │   ├── LojaDetalhes.tsx
│   │   │   └── StyleDetalhes.ts
│   │   └── Home
│   │       ├── HomeScreen.tsx
│   │       └── StyleHome.ts
│   └── services
│       └── api.ts
├── App.tsx
├── app.json
├── index.js
├── package.json
└── tsconfig.json
```

---

## ▶️ Executando o Projeto

### Iniciar Backend

```bash
cd backend
npm run dev
```

### Iniciar Frontend

```bash
cd frontend
npx expo start
```

---

## 👨‍💻 Autor

**Guilherme Augusto Trindade da Luz**

Projeto desenvolvido para a disciplina de **Programação para Dispositivos Móveis**, sob orientação do Professor **James William Zeri de Campos**.
