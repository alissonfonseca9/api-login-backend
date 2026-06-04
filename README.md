# API Login Firebase - Backend

Backend desenvolvido com NestJS e Firebase Admin.

## Tecnologias

* NestJS
* TypeScript
* Firebase Admin SDK
* Firestore
* Firebase Authentication

## Funcionalidades

* Validação de tokens Firebase
* Rotas protegidas com Auth Guard
* Consulta de perfil autenticado
* Integração com Firestore

## Instalação

```bash
npm install
```

## Configuração

Adicione o arquivo de credenciais do Firebase:

```text
src/config/serviceAccountKey.json
```

Este arquivo não deve ser enviado para o GitHub.

## Executar

```bash
npm run start:dev
```

API disponível em:

```text
http://localhost:3000
```

## Endpoints

### Verificar API

```http
GET /
```

### Perfil autenticado

```http
GET /profile
```

### Dados do usuário

```http
GET /users/me
```

## Segurança

A autenticação é realizada através da validação do token Firebase utilizando o Firebase Admin SDK.
