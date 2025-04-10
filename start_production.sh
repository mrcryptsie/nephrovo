#!/bin/bash
set -e

# Configuration par défaut
PORT=${PORT:-8000}
HOST=${HOST:-0.0.0.0}
WORKERS=${WORKERS:-4}

# Couleurs pour une meilleure lisibilité
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}=== Démarrage de NéphroPredict en mode production ===${NC}"
echo -e "${YELLOW}Hôte:${NC} $HOST"
echo -e "${YELLOW}Port:${NC} $PORT"
echo -e "${YELLOW}Workers:${NC} $WORKERS"

# Vérifier le répertoire courant
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
if [ -d "$SCRIPT_DIR/server/fastapi" ]; then
    FASTAPI_DIR="$SCRIPT_DIR/server/fastapi"
else
    FASTAPI_DIR="$SCRIPT_DIR"
fi

# Démarrer le serveur avec Gunicorn (pour la production)
echo -e "${GREEN}Démarrage du serveur FastAPI avec Gunicorn...${NC}"
cd "$FASTAPI_DIR"

# Vérifier si nous sommes dans un environnement Heroku/etc qui n'autorise pas --chdir
if [[ -n "$DYNO" || -n "$RENDER" ]]; then
    exec gunicorn main:app \
        --worker-class uvicorn.workers.UvicornWorker \
        --workers $WORKERS \
        --bind $HOST:$PORT \
        --access-logfile - \
        --error-logfile -
else
    # Configuration standard
    exec gunicorn main:app \
        --worker-class uvicorn.workers.UvicornWorker \
        --workers $WORKERS \
        --bind $HOST:$PORT \
        --access-logfile - \
        --error-logfile -
fi