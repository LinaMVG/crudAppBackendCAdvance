# crudAppBackendCAdvance

Backend para una aplicación CRUD de tareas, construido con Node.js, Express y MongoDB.

## Descripción

Este proyecto implementa una API RESTful que permite el manejo de tareas personales por usuario, incluyendo autenticación, registro y operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre tareas. Se utiliza JWT para la autenticación y autorización de usuarios, y las contraseñas se almacenan de manera segura mediante hashing.

## Características principales

- **Registro y autenticación de usuarios** (JWT)
- **Operaciones CRUD de tareas**: crear, listar, editar y eliminar tareas individuales
- **Asociación de tareas a usuarios autenticados**
- **Manejo de categorías, fechas de vencimiento y estado de finalización de tareas**
- **Protección de rutas mediante middleware de autenticación**
- **Persistencia en MongoDB usando Mongoose**

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/LinaMVG/crudAppBackendCAdvance.git
   cd crudAppBackendCAdvance
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env`:
   ```
   MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>/<db>
   JWT_SECRET=tu_clave_secreta
   PORT=3000
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```
   o
     ```bash
   node server.js
   ```

## Endpoints principales

| Método | Ruta                | Descripción                     |
|--------|---------------------|---------------------------------|
| POST   | /api/auth/register  | Registro de usuario             |
| POST   | /api/auth/login     | Autenticación de usuario        |
| GET    | /api/tasks          | Listar tareas del usuario       |
| POST   | /api/tasks          | Crear nueva tarea               |
| PUT    | /api/tasks/:id      | Actualizar tarea                |
| DELETE | /api/tasks/:id      | Eliminar tarea                  |

> Todas las rutas de tareas requieren autenticación mediante el header `Authorization: Bearer <token>`.

## Modelo de datos

**Usuario**
- email: string (único, requerido)
- password: string (hasheado)

**Tarea**
- name: string (requerido)
- description: string
- category: string
- dueDate: date
- completed: boolean (por defecto: false)
- userId: referencia al usuario

## Tecnologías usadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

## Autores

Equipo #3
- [Lina Marcela Velásquez Garzón](https://github.com/LinaMVG)
- [Francisco Javier Tulcán Rodríguez ](https://github.com/FranciscoTulkn)
- [Juan Pablo Barahona](https://github.com/juan112812)

---

¡Listo para usar y adaptar a tus necesidades!
