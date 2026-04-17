# Task Manager — Desafio Avanade

Aplicação fullstack de gerenciamento de tarefas desenvolvida como parte do processo seletivo da Avanade. O projeto permite criar, listar, atualizar e excluir tarefas (CRUD completo), com backend em ASP.NET Core e frontend em Angular.

---

## Tecnologias utilizadas

**Backend**
- C# / ASP.NET Core 8
- Entity Framework Core
- SQLite
- Swagger (documentação da API)

**Frontend**
- Angular 17
- TypeScript
- HTML5 / CSS3

---

## Estrutura do projeto

```
desafio-avanade-1/
└── task-manager/
    ├── backend/
    │   └── Task-Api/
    │       ├── Controllers/
    │       │   └── TaskController.cs
    │       ├── Data/
    │       │   └── AppDbContext.cs
    │       ├── Models/
    │       │   └── TaskItem.cs
    │       ├── Migrations/
    │       ├── appsettings.json
    │       ├── program.cs
    │       └── TaskApi.csproj
    └── frontend/
        └── src/
            └── app/
                ├── components/
                │   ├── task-form/
                │   └── task-list/
                ├── models/
                │   └── task.ts
                ├── services/
                │   └── task.service.ts
                ├── app.module.ts
                ├── app-routing.module.ts
                └── app.component.ts
```

---

## Como rodar o projeto

### Pré-requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

---

### Backend

```bash
# Acesse a pasta do backend
cd task-manager/backend/Task-Api

# Restaure os pacotes
dotnet restore

# Aplique as migrations e crie o banco
dotnet ef migrations add InitialCreate
dotnet ef database update

# Rode a API
dotnet run
```

A API estará disponível em `http://localhost:5000`.  
A documentação Swagger pode ser acessada em `http://localhost:5000/swagger`.

---

### Frontend

```bash
# Acesse a pasta do frontend
cd task-manager/frontend

# Instale as dependências
npm install

# Rode a aplicação
ng serve
```

A aplicação estará disponível em `http://localhost:4200`.

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/task` | Lista todas as tarefas |
| GET | `/api/task/{id}` | Busca uma tarefa por ID |
| POST | `/api/task` | Cria uma nova tarefa |
| PUT | `/api/task/{id}` | Atualiza uma tarefa |
| DELETE | `/api/task/{id}` | Remove uma tarefa |

---

##  Funcionalidades

- [x] Listar tarefas
- [x] Criar tarefa
- [x] Marcar tarefa como concluída
- [x] Excluir tarefa
- [x] Comunicação frontend ↔ backend via HTTP
- [x] CORS configurado para desenvolvimento local

---

## Autora

Desenvolvido por **Juliana Pelozo Pacheco** como parte do processo seletivo para desenvolvedor(a) júnior na Avanade.
