# Simple Chat App
This simple chat app is made for practise.
The stack used for this project is shown below:
- Backend:
	- NestJS
	- Sequelize v6
- Frontend:
	- React
	- mobX
	- Sass
	- Typescript
	- Socket.IO

## How to use:
First of all you should have PostgreSQL installed.

Go to `backend/simple-chat-app-backend` folder and run a `npm install` command. 
Then go to `frontend/simple-chat-app-frontend` folder and do the same.

Now you should create a `.development.env` file in `backend/simple-chat-app-backend` folder (*it't only works in development mode yet*).
Write here something like this:
```
PORT=5000
POSTGRES_HOST=localhost
POSTGRES_USER=[POSTGRES_USER]
POSTGRES_DB=simple-chat-app-database
POSTGRES_PASSWORD=[POSTGRES_PASSWORD]
POSTGRES_PORT=[POSTGRES_PORT]
SECRET=[SECRET_KEY]
```
In `frontend/simple-chat-app-frontend` folder create a `.env` file and write there something like this:
```
REACT_APP_API_PROTOCOL=http
REACT_APP_API_URL=localhost
REACT_APP_API_PORT=5000
```

To launch the backend server run a `npm run start:dev` command in the `backend/simple-chat-app-backend` directory, then run `npm start` in `frontend/simple-chat-app-frontend` directory.

Now you can try this app out!