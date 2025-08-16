# Docker Tutorial Examples

> **Environment Note:**
>
> These examples are designed to work with Docker Desktop and VS Code (with the Docker extension) on Windows using WSL, but they are also compatible with native Linux and Windows Docker installations.

## Platform-Specific Instructions

- **WSL + Docker Desktop (Recommended for Windows users):**
	- Make sure Docker Desktop is running and WSL integration is enabled.
	- Open the project folder in VS Code using the WSL extension for best compatibility.
	- All Docker commands in the READMEs will work as shown.

- **Linux (Native):**
	- Install Docker Engine and Docker Compose using your package manager (e.g., `apt`, `dnf`).
	- Run all commands in your Linux terminal as shown in the READMEs.
	- You may need to use `sudo` before Docker commands if your user is not in the `docker` group.

- **Windows (Native, without WSL):**
	- Install Docker Desktop for Windows.
	- Use PowerShell or Command Prompt for Docker commands.
	- File paths in volume mounts may need to be adjusted to Windows format (e.g., `C:\path\to\file`).
	- VS Code with the Docker extension is recommended for easier management.

If you encounter issues, refer to the official Docker documentation for your platform or check the README in each subproject for more details.
# Docker Tutorial Examples

This repository contains a collection of small, focused examples that serve as a hands-on tutorial for learning Docker. Each subproject demonstrates a different aspect of Docker usage, from basic images to multi-service applications.

## Usage Overview

### 1. Docker Demo
- **Description:** A minimal example showing how to build and run a simple Docker image that prints a message.
- **How to use:**
	- Edit the `Dockerfile` to change the message (e.g., `CMD [ "echo", "Your message" ]`).
	- Build and run the image to see how Docker works with custom commands.
- **Location:** [`docker_demo/`](./docker_demo/)

### 2. Web Demo
- **Description:** Demonstrates serving a static web page using Nginx in a Docker container.
- **How to use:**
	- Shows how Docker can be used to serve web content accessible to all users on the network.
	- Explains port mapping and how to access the site from your browser.
- **Location:** [`my_web_demo/`](./my_web_demo/)

### 3. Web with Flask
- **Description:** Demonstrates a multi-service setup using Docker Compose, with Nginx serving static files and proxying API requests to a Flask backend.
- **How to use:**
	- Learn how to run and network multiple containers together.
	- See how Nginx and Flask can work together in a real-world scenario.
- **Location:** [`web_with_flask/`](./web_with_flask/)

### 4. Tic-Tac-Toe Game
- **Description:** A fully functional Tic-Tac-Toe game that combines all the concepts from the previous examples.
- **How to use:**
	- Explore a complete application using Docker for both frontend and backend components.
	- Practice deploying, running, and accessing a multi-container app.
- **Location:** [`tictactoe/`](./tictactoe/)

---

Each subdirectory contains its own README with detailed instructions. Start with any example to learn and experiment with Docker!
