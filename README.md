# To-Do List Web Client

This is a simple web client for the To-Do List API, built using React. It includes user registration, login, and task management functionalities.

## Features

- User Registration and Login
- JWT-based Authentication
- Add, Update, Delete, and Retrieve Tasks

## Tech Stack

- React
- Axios (for API requests)

## Project Structure

```
todo-client/
├── public
│ └── index.html
├── src
│ ├── components
│ │ ├── Auth.js
│ │ ├── Task.js
│ │ └── TaskList.js
│ ├── App.js
│ ├── index.js
│ └── api.js
├── package.json
└── README.md
```


## Getting Started

### Prerequisites

- Node.js and npm installed

### Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/todo-client.git
   cd todo-client

2. Install dependencies
```sh
npm install
```

3. Start the application
```sh
npm start
```

### API Endpoints

#### User Registration
- URL: /auth/register
- Method: POST
- Data: {"email": "user@example.com", "password": "password123"}

#### User Login
- URL: /auth/login
- Method: POST
- Data: {"email": "user@example.com", "password": "password123"}

#### Create a Task
- URL: /tasks
- Method: POST
- Headers: Authorization: <JWT_TOKEN>
- Data: {"title": "New Task", "status": "incomplete"}

#### Get All Tasks
- URL: /tasks
- Method: GET
- Headers: Authorization: <JWT_TOKEN>

#### Update a Task
- URL: /tasks
- Method: PUT
- Headers: Authorization: <JWT_TOKEN>
- Data: {"id": 1, "title": "Updated Task", "status": "complete"}

#### Delete a Task
- URL: /tasks
- Method: DELETE
- Headers: Authorization: <JWT_TOKEN>
- Data: {"id": 1}

### License
This project is licensed under the MIT License.