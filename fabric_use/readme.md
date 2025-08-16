# Fabric CLI Docker Usage

This project provides a Dockerized setup for the [Fabric CLI](https://github.com/danielmiessler/fabric), a powerful tool for managing and automating workflows.

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your system
- (Optional) [Docker Compose](https://docs.docker.com/compose/install/) for easier management

## Installation

1. **Clone this repository:**
   ```bash
   git clone <repo-url>
   cd fabric_use
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t fabric_cli .
   ```

## Usage

You can run Fabric CLI commands inside the Docker container. For example:

```bash
# Run a Fabric command (replace <args> with your command arguments)
docker compose run --rm fabric_cli <args>
```

Example:
```bash
docker compose run --rm fabric_cli -h
```

This will show the help message for Fabric CLI.

### Configuration Persistence

The container mounts `${HOME}/.config/fabric` to `/root/.config/fabric` inside the container, so your configuration and state are preserved between runs.

## Notes
- The Dockerfile builds the latest version of Fabric from source using Go.
- You can customize the Dockerfile or `docker-compose.yaml` as needed for your workflow.

## References
- [Fabric CLI GitHub](https://github.com/danielmiessler/fabric)
- [Docker Documentation](https://docs.docker.com/)
