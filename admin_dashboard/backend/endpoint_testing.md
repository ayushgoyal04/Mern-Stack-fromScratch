# Endpoint Testing Guide

## Healthcheck
**GET** `/health`
- Response: `{ "status": "ok", "message": "Server is healthy" }`

---

## Users

### Get All Users
**GET** `/api/users/getusers`
- Response: List of all active users

### Create User
**POST** `/api/users/createuser`
- Sample Payload:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
}
```

### Update User
**PUT** `/api/users/editeuser/:id`
- Sample Payload:
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com"
}
```

### Soft Delete User
**DELETE** `/api/users/deleteuser/:id`
- No payload required

---

## Logs

### Get All Logs
**GET** `/api/logs/`
- Response: List of log entries

---

## Notes
- All endpoints return JSON responses.
- Replace `:id` with the user's id value.
- Use tools like Postman or curl to test these endpoints.
