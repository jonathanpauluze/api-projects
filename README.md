<h1 align="center">
  API - Projects To Do (WIP)
</h1>

<p align="center">
  <a href="#sobre-o-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>
</p>

## Sobre o projeto
CRUD para criar Projetos e Tarefas do projeto, criado praticar meus estudos de NodeJS utilizando [Express](https://expressjs.com/pt-br/). Futuramente pretendo melhorá-lo.

### Endpoints

Método   | Rota                | Descrição
-------- | ------------------- | ---------
`GET`    | /projects           | Lista todos os projetos.
`POST`   | /projects           | Cria um projeto, necessário enviar `id` e `title` no corpo da requisição.
`PUT`    | /projects/:id       | Atualiza o título de um projeto, necessário enviar `title` no corpo da requisição.
`DELETE` | /projects/:id       | Deleta um projeto.
`POST`   | /projects/:id/tasks | Cria uma tarefa dentro de um projeto, necessário enviar `title` no corpo da requisição.