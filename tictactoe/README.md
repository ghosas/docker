# Tic Tac Toe Web App

A simple web-based Tic Tac Toe game. The app can be run locally or inside a Docker container. The game logic is handled in the browser using JavaScript, and the server (Flask or Node.js/Express) serves the static files.

## Features
- Play Tic Tac Toe in your browser
- User vs Computer (random moves)
- Responsive UI
- Docker support for easy deployment

## Project Structure
```
app.py                # Flask server (Python)
Dockerfile            # Docker build file
requirements.txt      # Python dependencies
static/
  script.js           # Game logic (JavaScript)
templates/
  index.html          # Game UI (HTML)
web/
  server.js           # Node.js/Express/Socket.IO server (if used)
  package.json        # Node.js dependencies
```

## Running Locally (Flask)
1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the Flask server:
   ```bash
   python app.py
   ```
3. Open your browser at [http://localhost:5000](http://localhost:5000)

## Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t tictactoe .
   ```
2. Run the container:
   ```bash
   docker run -p 5000:5000 tictactoe
   ```
3. Open your browser at [http://localhost:5000](http://localhost:5000)

## Game Logic
- The board is a 3x3 grid.
- You play as "X". The computer plays as "O" and picks random empty cells.
- The game announces a win, draw, or whose turn it is.

## Customization
- To enable multiplayer or real-time play, use the Node.js/Socket.IO server in `web/server.js`.
- Update the UI or logic in `static/script.js` and `templates/index.html` as needed.

## License
MIT
