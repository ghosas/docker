# Web with Flask (Docker Compose Example)

This project demonstrates a simple web application using Docker Compose, Nginx, and a Flask backend. The frontend is served by Nginx, and API requests are proxied to a Python Flask backend container.

## Project Structure

- `docker-compose.yaml`: Defines the multi-container setup (frontend and backend).
- `index.html`: The static frontend web page.
- `nginx/default.conf`: Nginx configuration for serving static files and proxying API requests.
- `backend/app.py`: Flask backend application.
- `backend/requirements.txt`: Python dependencies for the backend.

## Architecture

```
Browser <-> Nginx (Frontend) <-> Flask (Backend)
```
- Nginx serves `index.html` and proxies `/api/` requests to the Flask backend.
- Flask backend responds to API requests (e.g., `/api/hello`).

## How to Build and Run

1. **Start the application:**
	```bash
	docker-compose up
	```
	- This will build and start both the frontend (Nginx) and backend (Flask) containers.
	- Access the site at [http://localhost:8080](http://localhost:8080)

2. **Stop the application:**
	Press `Ctrl+C` in the terminal, then run:
	```bash
	docker-compose down
	```

## How it Works

- The frontend (`index.html`) is served by Nginx on port 8080.
- When you click the "Call Backend" button, the browser makes a request to `/api/hello`.
- Nginx proxies this request to the Flask backend container, which responds with a JSON message.

## Customizing the Project

- Edit `index.html` to change the frontend.
- Edit `backend/app.py` to change backend logic or add new API endpoints.
- Update `nginx/default.conf` to modify Nginx routing or proxy rules.

## FAQ

### What is Nginx and why is it used here?
Nginx is a high-performance web server. Here, it serves static files and proxies API requests to the backend Flask service, allowing both frontend and backend to be accessed from the same port.

### What is Flask and why is it used here?
Flask is a lightweight Python web framework for building web applications and APIs.

**How Flask is used in this project:**
- The backend service (see `backend/app.py`) is a small Flask application.
- It defines an API endpoint at `/api/hello` that returns a JSON message.
- When the frontend (served by Nginx) makes a request to `/api/hello`, Nginx proxies the request to the Flask backend.
- Flask handles the request and sends back a response, which is then displayed on the web page.

Flask is chosen here because it is simple, requires minimal setup, and is widely used for building APIs and microservices in Python.

### What is Docker Compose and how is it used?
Docker Compose is a tool for defining and running multi-container Docker applications. In this project, it manages both the Nginx (frontend) and Flask (backend) containers, networking them together and handling file mounts and dependencies automatically.

### Why use Docker Compose instead of building and running containers separately?
Docker Compose simplifies multi-container setups. Instead of manually building images and running containers with complex commands, you define everything in `docker-compose.yaml` and start all services with a single command. It also manages networking, volumes, and service dependencies for you.

### How does Nginx proxy API requests to Flask?
The Nginx config (`nginx/default.conf`) includes:
```nginx
location /api/ {
	 proxy_pass http://backend:5000;
}
```
This tells Nginx to forward any request starting with `/api/` to the backend Flask service running on port 5000.

## License

MIT License
