# Docker Demo

Docker Demo serves as the basic foundation for creating and running a docker file

## How to Build and Run

1. **Build the Docker image:**
	```bash
	docker build -t docker_demo:1 .
	```
	- `docker build`: Command to build a Docker image from a Dockerfile.
	- `-t docker_demo:1`: Tags the image with the name `docker_demo` and the tag `1`.
	- `.`: Specifies the build context (current directory).

2. **Run the Docker container:**
	```bash
	docker run --rm docker_demo:1
	```
	- `docker run`: Command to run a container from an image.
	- `--rm`: Automatically removes the container when it exits.
	- `docker_demo:1`: The name and tag of the image to run.

This will output:
```
Foo, bar!
```

## How to Change the Message

1. Open the `Dockerfile` in this directory.
2. Edit the line:
	```dockerfile
	CMD [ "echo", "Foo, bar!" ]
	```
	Change `Foo, bar!` to your desired message, for example:
	```dockerfile
	CMD [ "echo", "Hello, Docker!" ]
	```

3. **Rebuild the Docker image** (with a new version tag, e.g., `2`):
	```bash
	docker build -t docker_demo:2 .
	```

4. **Run the updated container:**
	```bash
	docker run --rm docker_demo:2
	```
	This will output your new message.

## How to Tag a New Version

You can tag a new version of your image during build by changing the tag after `-t`:
```bash
docker build -t docker_demo:<new_version> .
```
Replace `<new_version>` with your desired version number (e.g., `3`, `latest`, etc.).

