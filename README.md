# DevTrack

O DevTrack é uma aplicação web desenvolvida para organizar estudos, tarefas e projetos relacionados à área de desenvolvimento de software.

## Funcionalidades

- Visualização de tarefas de estudo.
- Organização por categorias.
- API para consulta de tarefas.
- Rota de verificação de saúde da aplicação (health check).

## Tecnologias utilizadas

- Node.js
- JavaScript
- HTML
- CSS
- Docker
- Git
- GitHub Actions

## Executar localmente

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd DevTrack
```

### 2. Iniciar a aplicação

```bash
npm start
```

A aplicação estará disponível em:

http://127.0.0.1:3000

## Executar com Docker

### Construir a imagem

```bash
docker build -t devtrack:1.0 .
```

### Executar o container

```bash
docker run -d --name devtrack-container -p 3000:3000 devtrack:1.0
```

### Verificar a aplicação

```bash
curl http://127.0.0.1:3000/health
```

Resposta esperada:

```json
{"status":"ok"}
```

### Consultar tarefas

```bash
curl http://127.0.0.1:3000/api/tasks
```

### Parar o container

```bash
docker stop devtrack-container
```

### Remover o container

```bash
docker rm devtrack-container
```

## Testes

Os testes automatizados verificam:

- A rota `/health`.
- A página principal.
- A API de tarefas.

Para executar:

```bash
npm test
```

## Integração contínua (CI)

A integração contínua será implementada com GitHub Actions, automatizando a construção da imagem Docker, execução do container e testes da aplicação.

## Projeto

Projeto desenvolvido como atividade prática de Docker e integração contínua com GitHub Actions.