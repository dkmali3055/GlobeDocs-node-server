# GlobeDocs Server

GlobeDocs is a collaborative document editing server built with Node.js, Express.js, TypeScript, Socket.io, JWT for authentication, and PostgreSQL for database management.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Features](#features)
- [API Docs](#api-doc)

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- PostgreSQL
- Your favorite code editor

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/globedocs-server.git
   cd globedocs-server
   
2. Install dependencies:
    ```bash
    npm install
    
3. Create a PostgreSQL database for GlobeDocs.

4. Create a .env.development file based on .env.example and configure your environment variables.

5. Start the server:
     ```bash
    npm run serve   

### Environment Variables
```bash
    NODE_ENV=
    HOST=
    PORT=
    DATABASE_URL=""
    USER=''
    PASSWORD = 
    DB_HOST = 
    DB_PORT = 
    DATABASE = 
    SMTP_HOST = 
    SMTP_USER = 
    SMTP_PASSWORD = 
    ACCESS_TOKEN_SECRET = ""
    ACCESS_TOKEN_EXPIRATION=''
    REFRESH_TOKEN_SECRET = ""
    REFRESH_TOKEN_EXPIRATION=''
    VERIFY_EMAIL_SECRET = ''
    PASSWORD_RESET_SECRET = ''
    PASSWORD_RESET_EXPIRATION = ''
    FRONT_END_URL = ''
```

## Usage

- The server provides RESTful API endpoints for document management, user registration, and authentication.
- Real-time collaboration is achieved using Socket.io, allowing multiple users to edit documents simultaneously.
- JWT tokens are used for user authentication and authorization.
To integrate this server with your GlobeDocs front-end or other clients, refer to the API documentation.

## Features

- User registration and authentication
- Document creation, editing, and collaboration in real-time
- Secure JWT-based authentication and authorization
- PostgreSQL database for data storage

## API Docs

- Added soon
