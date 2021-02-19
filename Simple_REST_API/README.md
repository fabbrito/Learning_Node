# Simple REST API

A Simple API made with Node and Express.
Using [Insomnia](https://insomnia.rest/) to test the API.

---

### Simple GET request without an endpoint
```http
GET http://localhost:8080/
```
Response
```json
HTTP/1.1 404 Not Found
```
### Simple GET request
```http
GET http://localhost:8080/tshirt
```
Response
```json
HTTP/1.1 200 OK
{ "tshirt": "👕", "size": "large" }
```

### Simple POST request
```http
POST http://localhost:8080/tshirt/23
```
Body of request:
```json
{ "logo": "💯" }
```

Response
```json
HTTP/1.1 200 OK
{ "tshirt": "👕 with your 💯 and ID of 23" }
```

### Simple POST request with missing body data
```http
POST http://localhost:8080/tshirt/23
```
Body of request:
```json
{ "logo": "" }
```

Response
```json
HTTP/1.1 418 I'm a Teapot
{ "message": "We need a logo" }
```

---

## Youtube links:
- Simple guide: [Fireship](https://www.youtube.com/watch?v=-MTSQjw5DrM)
