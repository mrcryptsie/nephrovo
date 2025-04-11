#!/bin/bash
set -e

# Couleurs pour une meilleure lisibilité
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${CYAN}=== Démarrage du processus de build de NéphroPredict ===${NC}"

# Vérification des dépendances requises
command -v node >/dev/null 2>&1 || { echo -e "${RED}Node.js est requis mais n'est pas installé. Merci de l'installer.${NC}" >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo -e "${RED}npm est requis mais n'est pas installé. Merci de l'installer.${NC}" >&2; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo -e "${RED}Python 3 est requis mais n'est pas installé. Merci de l'installer.${NC}" >&2; exit 1; }
command -v pip3 >/dev/null 2>&1 || { echo -e "${RED}pip3 est requis mais n'est pas installé. Merci de l'installer.${NC}" >&2; exit 1; }

# Création du répertoire de build s'il n'existe pas
mkdir -p dist

# Installation des dépendances frontend
echo -e "${GREEN}Installation des dépendances frontend...${NC}"
npm install

# Build du frontend
echo -e "${GREEN}Build du frontend...${NC}"
npm run build

# Préparation de l'environnement Python
echo -e "${GREEN}Installation des dépendances Python pour le backend...${NC}"
pip3 install -r server/fastapi/production_requirements.txt

# Copie des fichiers nécessaires dans le répertoire de distribution
echo -e "${GREEN}Copie des fichiers dans le répertoire de distribution...${NC}"
cp -r dist dist/public
mkdir -p dist/server
cp -r server/fastapi dist/server/
cp -r attached_assets dist/attached_assets
cp start_production.sh dist/

echo -e "${GREEN}Création du fichier README pour le déploiement...${NC}"
cat > dist/README.md << 'EOL'
# NéphroPredict - Instructions de déploiement

Cette application combine un backend FastAPI en Python et un frontend React précompilé.

## Structure des fichiers
- `public/` - Fichiers statiques du frontend (HTML, CSS, JS)
- `server/fastapi/` - Code source du backend FastAPI
- `attached_assets/` - Modèle de prédiction et données associées
- `start_production.sh` - Script de démarrage de l'application

## Déploiement
1. Assurez-vous que Python 3.8+ est installé
2. Exécutez `pip install -r server/fastapi/production_requirements.txt`
3. Lancez l'application avec `./start_production.sh`
4. L'application sera disponible sur le port 8000 par défaut

## Variables d'environnement
- `PORT` - Port d'écoute du serveur (par défaut: 8000)
- `HOST` - Hôte d'écoute (par défaut: 0.0.0.0)
- `WORKERS` - Nombre de workers pour Gunicorn (par défaut: 4)

## Deployment sur différentes plateformes

### Render.com
- Spécifiez `start_production.sh` comme commande de démarrage
- Assurez-vous que Python 3.8+ est choisi comme environnement

### Heroku
- Ajoutez un Procfile avec: `web: ./start_production.sh`
- Assurez-vous que les buildpacks Python sont activés

### Docker
Un Dockerfile est fourni pour faciliter le déploiement containerisé.
- `docker build -t nephropredict .`
- `docker run -p 8000:8000 nephropredict`
EOL

echo -e "${GREEN}Création du fichier Dockerfile...${NC}"
cat > dist/Dockerfile << 'EOL'
FROM python:3.9-slim

WORKDIR /app

COPY public ./public
COPY server/fastapi ./server/fastapi
COPY attached_assets ./attached_assets
COPY start_production.sh .

RUN pip install --no-cache-dir -r server/fastapi/production_requirements.txt
RUN chmod +x start_production.sh

EXPOSE 8000

CMD ["./start_production.sh"]
EOL

echo -e "${CYAN}=== Build terminé avec succès! ===${NC}"
echo -e "Le résultat se trouve dans le répertoire ${GREEN}dist/${NC}"
echo -e "Pour démarrer l'application en production, exécutez ${GREEN}./dist/start_production.sh${NC}"