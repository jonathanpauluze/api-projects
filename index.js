const express = require('express');

const server = express();

server.use(express.json());

let projects = [];

function checkId(req, res, next) {
  const { id } = req.params;
  
  for(let project of projects) {
    if(+id === project.id) {
      return next();
    }
  }

  return res.status(400).json({ "error": "Id does not exists." });
}

function logRequest(req, res, next) {
  console.count('Número de requisições');

  return next();
}

server.use(logRequest);

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] })

  return res.json(projects);
});

server.put('/projects/:id', checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  for(let project of projects) {
    if(+id === project.id) {
      project.title = title;

      return res.json(projects);
    }
  }

  return res.json(projects);
});

server.delete('/projects/:id', checkId, (req, res) => {
  const { id } = req.params;

  for(let project of projects) {
    if(+id === project.id) {
      const index = projects.indexOf(project);

      projects.splice(index, 1);

      return res.json(projects);
    }
  }

  return res.json(projects);
});

server.post('/projects/:id/tasks', checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  for(let project of projects) {
    if(+id === project.id) {
      project.tasks.push(title);

      return res.json(projects);
    }
  }

  return res.json(projects);
})

server.listen(3000);