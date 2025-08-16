# My Web Demo

This project demonstrates serving a static HTML page using Nginx in a Docker container. You can run it using either Docker or Docker Compose.

## Project Structure

- `Dockerfile`: Builds a custom Nginx image with your `index.html`.
- `docker-compose.yaml`: Defines a service for running the Nginx container and mounting the HTML file.
- `index.html`: The static web page served by Nginx.

## How to Build and Run

### Using Docker

1. **Build the Docker image:**
	```bash
	docker build -t my_web_demo:1 .
	```
	- `-t my_web_demo:1`: Tags the image as `my_web_demo` with version `1`.

2. **Run the container:**
	```bash
	docker run --rm -p 8080:80 my_web_demo:1
	```
	- `-p 8080:80`: Maps port 8080 on your machine to port 80 in the container.
	- Access the site at [http://localhost:8080](http://localhost:8080)

### Using Docker Compose

1. **Start the service:**
	```bash
	docker-compose up
	```
	- This will build (if needed) and run the Nginx container, serving your `index.html`.
	- Access the site at [http://localhost:8080](http://localhost:8080)

2. **Stop the service:**
	Press `Ctrl+C` in the terminal, then run:
	```bash
	docker-compose down
	```

## Customizing the Web Page

Edit `index.html` to change the content of your web page. Changes will be reflected immediately when using Docker Compose (due to the volume mount), or after rebuilding the image if using Docker directly.

## Tagging a New Version

To tag a new version of your Docker image, change the tag in the build command:
```bash
docker build -t my_web_demo:<new_version> .
```
Replace `<new_version>` with your desired version number (e.g., `2`, `latest`, etc.).

## License

MIT License

## FAQ

### What is Nginx and why is it used here?
Nginx is a high-performance web server commonly used to serve static files, reverse proxy, and load balance. In this project, Nginx serves the static `index.html` file, making it accessible via a web browser.

### What is Docker Compose?
Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file. It allows you to manage services, networks, and volumes in a single file and with simple commands.

### How does Docker Compose simplify running this project?
Instead of manually building the Docker image and running the container with multiple commands, Docker Compose lets you start everything with a single command (`docker-compose up`). It automatically handles image building (if needed), container creation, port mapping, and file mounting as defined in `docker-compose.yaml`.

### When should I use Docker Compose instead of building/running Docker manually?
Use Docker Compose when you:
- Want to manage multiple services or containers together
- Prefer easier configuration and repeatable setups
- Need to mount files or directories easily (like `index.html` here)
- Want to avoid remembering long Docker commands

For simple, one-off containers, building and running with Docker directly is fine. For more complex or collaborative projects, Docker Compose is recommended.
