# Secure Api Project

### A simple api that generates token for private api method

## Usage

```sh
git clone https://github.com/raffyamoguis/secure-api.git
npm install
npm start || npm run dev
```

## Routes
### Generate api token
```sh
method: post 'api/token'
params: email/username, password
```
Response >>>
```json
{
    "status": "ok",
    "code": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ2aWV3ZXIiXSwiaWF0IjoxNjY5MDMwMzY0LCJleHAiOjE2NjkwMzEyNjR9.AXBD3J_QDEwN8M-4eBbe71J0PimBOXqWA1WPnev1BGY"
}
```

### Secured api
```sh
method: post 'api/messages'
headers: {'x-auth-token: 'token'}
```
Response >>>
```json
{
    "status": "ok",
    "code": 200,
    "result": "Your accessing the secured api"
}
```

### Free api
```sh
method: post 'api/free'
```
Response >>>
```json
{
    "status": "ok",
    "code": 200,
    "result": "Your using the free api"
}
```
