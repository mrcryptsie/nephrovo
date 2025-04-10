#!/bin/bash
set -e

# Couleurs pour une meilleure lisibilité
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${CYAN}=== Configuration de l'environnement virtuel Python pour NéphroPredict ===${NC}"

# Vérification de Python
command -v python3 >/dev/null 2>&1 || { echo -e "${RED}Python 3 est requis mais n'est pas installé. Merci de l'installer.${NC}" >&2; exit 1; }

# Création de l'environnement virtuel
echo -e "${GREEN}Création de l'environnement virtuel...${NC}"
python3 -m venv venv
source venv/bin/activate

# Installation des dépendances
echo -e "${GREEN}Installation des dépendances Python...${NC}"
pip install --upgrade pip
pip install -r server/fastapi/production_requirements.txt

echo -e "${CYAN}=== Environnement virtuel créé avec succès! ===${NC}"
echo -e "Pour activer l'environnement virtuel, exécutez : ${GREEN}source venv/bin/activate${NC}"
echo -e "Pour démarrer l'application en développement : ${GREEN}uvicorn server.fastapi.main:app --host 0.0.0.0 --port 8000 --reload${NC}"