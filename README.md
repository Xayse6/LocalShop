# 📍 App de Cadastro de Lojas - React Native + Firebase

Aplicativo desenvolvido em **React Native** para cadastro, listagem, edição e exclusão de lojas utilizando o **Firebase Firestore** como banco de dados.

## 🚀 Funcionalidades

* ✅ Cadastro de lojas
* ✅ Listagem de lojas
* ✅ Visualização de detalhes
* ✅ Edição de informações
* ✅ Exclusão de lojas
* ✅ Exibição de imagens por URL
* ✅ Navegação entre telas
* ✅ Integração com Firebase Firestore

---

## 📱 Telas

### Home

Exibe todas as lojas cadastradas.

### Detalhes

Mostra as informações completas da loja selecionada.

### Cadastro / Edição

Permite cadastrar novas lojas ou atualizar registros existentes.

---

## 🛠️ Tecnologias Utilizadas

* React Native
* TypeScript
* Firebase
* Cloud Firestore
* React Navigation
* Axios (opcional)
* Hooks Customizados

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/
│   └── LojaCard/
├── hooks/
│   ├── useLojas.ts
│   └── useCadastroLoja.ts
├── screens/
│   ├── Home/
│   ├── CadastroLoja/
│   └── LojaDetalhes/
├── services/
│   └── firebase.ts
├── @types/
└── navigation/
```

---

## 🔥 Firebase

O projeto utiliza o **Cloud Firestore** para armazenar os dados das lojas.

### Estrutura da coleção

Coleção:

```text
lojas
```

Documento:

```json
{
  "nome": "Mercado Central",
  "categoria": "Supermercado",
  "distancia": "2 km",
  "imagem": "https://picsum.photos/400/300",
  "descricao": "Mercado completo com entrega rápida."
}
```

---

## ⚙️ Configuração do Firebase

### 1. Criar projeto

Acesse:

[Firebase Console](https://console.firebase.google.com?utm_source=chatgpt.com)

Crie um novo projeto.

### 2. Adicionar aplicativo

* Android ou iOS
* Baixe o arquivo de configuração:

  * Android: `google-services.json`
  * iOS: `GoogleService-Info.plist`

### 3. Instalar dependências

```bash
npm install firebase
```

---

## 🔧 Configuração

Crie o arquivo:

```ts
src/services/firebase.ts
```

```ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

## ▶️ Executando o Projeto

Instalar dependências:

```bash
npm install
```

Iniciar o projeto:

```bash
npm start
```

Executar Android:

```bash
npm run android
```

Executar iOS:

```bash
npm run ios
```

---

## 📸 Imagens

As imagens são armazenadas através de URLs públicas.

Exemplo:

```text
https://picsum.photos/400/300
```

Também é possível utilizar o Firebase Storage para upload de imagens.

---

## 📈 Melhorias Futuras

* Upload de imagens para Firebase Storage
* Autenticação com Firebase Authentication
* Busca de lojas
* Filtro por categoria
* Geolocalização
* Favoritos
* Modo escuro

---

## 👨‍💻 Autor

Projeto desenvolvido para estudos de React Native, TypeScript e Firebase, explorando operações CRUD com Cloud Firestore e navegação entre telas.
