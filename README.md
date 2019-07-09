# UserCRUDapp
Basic REST JSON backend app Node.js Express
http://localhost:3000/api/v1/users/:
Create one user - POST http://localhost:3000/api/v1/users/
"Content-Type: application/json"
{
	"name": "Klara",
	"age":55,
	"email":"klra@google.com",
	"password":"dara123"
	}

Read all users - GET  http://localhost:3000/api/v1/users/
Read one user -  GET  http://localhost:3000/api/v1/users/:name

Update a user -  PUT  http://localhost:3000/api/v1/users/:name
"Content-Type: application/json"
{
	"name": "Klara",
	"age":56,
	"email":"klara@google.com",
	"password":"klara123"
	}
  
Delete a user -  DELETE http://localhost:3000/api/v1/users/:name
 
