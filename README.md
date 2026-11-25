# DevTrack

## Sobre o projeto

O DevTrack é um projeto que desenvolvi com o objetivo de organizar estudos e tarefas relacionadas à área de Tecnologia da Informação.

A ideia foi criar um painel simples para acompanhar atividades de desenvolvimento, além de colocar em prática alguns conhecimentos que estou aprendendo durante meus estudos.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Docker
- Git e GitHub
- GitHub Actions

## Funcionalidades

- Página principal com o nome DevTrack.
- Lista de tarefas relacionadas aos estudos e à programação.
- API para consultar as tarefas.
- Rota `/health` para verificar se a aplicação está funcionando.
- Testes automatizados para verificar o funcionamento do projeto.

## Estrutura do projeto

```text
DevTrack/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── tests/
│   └── test.js
│
├── app.js
├── Dockerfile
├── package.json
├── README.md
└── .gitignore
```

## Como executar o projeto

Para executar o projeto, é necessário ter o Node.js e o Docker instalados.

Primeiro, clone o repositório:

```bash
git clone https://github.com/CmillaVieira/DevTrack.git
```

Entre na pasta:

```bash
cd DevTrack
```

Para executar os testes:

```bash
npm test
```

Para iniciar a aplicação:

```bash
npm start
```

Depois, acesse no navegador:

http://localhost:3000

## Executando com Docker

Nesta etapa, utilizei o Docker para criar uma imagem da aplicação e executar o projeto dentro de um container.

Primeiro, construí a imagem:

```bash
docker build -t devtrack:1.0 .
```

Depois, executei o container:

```bash
docker run -d --name devtrack-container -p 3000:3000 devtrack:1.0
```

Para verificar se o container estava funcionando, utilizei:

```bash
docker ps
```

Também testei a aplicação pelo navegador e verifiquei as rotas:

- Página principal: http://localhost:3000
- Verificação da aplicação: http://localhost:3000/health
- API de tarefas: http://localhost:3000/api/tasks

Para encerrar o container:

```bash
docker rm -f devtrack-container
```

## Testes automatizados

Criei testes automatizados para verificar se as principais partes da aplicação estavam funcionando corretamente.

Foram realizados três testes:

1. Verificar se a rota `/health` retorna o status correto.
2. Verificar se a página principal abre e apresenta o nome DevTrack.
3. Verificar se a API de tarefas retorna os dados corretamente.

Para executar os testes, utilizei:

```bash
npm test
```

Todos os testes foram aprovados.

## Integração contínua com GitHub Actions

Nesta etapa, configurei o GitHub Actions para executar automaticamente as verificações do projeto sempre que envio alterações para a branch `main` ou quando é criado um Pull Request direcionado a ela.

O workflow realiza as seguintes etapas:

1. Baixa o código do repositório.
2. Constrói a imagem Docker.
3. Inicia o container.
4. Aguarda a aplicação iniciar.
5. Testa a rota `/health`.
6. Testa a página principal.
7. Testa a API de tarefas.
8. Executa os testes automatizados.
9. Encerra o container.

### Teste de falha

Para verificar se o GitHub Actions conseguia identificar um erro, fiz uma alteração proposital no código.

Modifiquei temporariamente a resposta da rota `/health`, mudando o status de `"ok"` para `"erro"`.

Depois dessa alteração, enviei o código para o GitHub e acompanhei a execução do workflow.

O resultado foi uma falha nos testes, mostrando que a integração contínua conseguiu identificar o problema.

[Ver execução com falha](https://github.com/CmillaVieira/DevTrack/actions/runs/45525780664)

### Correção do erro

Depois de verificar a falha, corrigi o código e coloquei novamente o status `"ok"` na rota `/health`.

Enviei a correção para o GitHub e executei novamente o workflow.

Dessa vez, todos os testes foram aprovados e a execução terminou com sucesso.

[Ver execução corrigida com sucesso](https://github.com/CmillaVieira/DevTrack/actions/runs/45526318327)

## O que aprendi

Com o desenvolvimento deste projeto, consegui praticar e aprender mais sobre:

- Como organizar um projeto utilizando Node.js.
- Como criar uma imagem Docker.
- Como executar e verificar um container.
- Como utilizar Git e GitHub para armazenar e atualizar um projeto.
- Como criar testes automatizados.
- Como configurar o GitHub Actions.
- Como identificar e corrigir erros através da integração contínua.

Foi uma experiência importante para colocar em prática os conhecimentos que estou adquirindo na área de desenvolvimento.

## Repositório do projeto

https://github.com/CmillaVieira/DevTrack