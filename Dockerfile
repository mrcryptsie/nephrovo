FROM node:20-slim AS build

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.ts ./
COPY theme.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY client ./client
COPY server ./server
COPY shared ./shared
COPY attached_assets ./attached_assets

# Build du frontend
RUN npm run build

# Stage 2 - Python pour le backend
FROM python:3.9-slim

WORKDIR /app

# Copier les fichiers de l'API FastAPI
COPY --from=build /app/dist ./dist
COPY --from=build /app/server/fastapi ./server/fastapi
COPY --from=build /app/attached_assets ./attached_assets
COPY server/fastapi/production_requirements.txt ./requirements.txt
COPY start_production.sh ./

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Rendre le script exécutable
RUN chmod +x start_production.sh

# Exposer le port
EXPOSE 8000

# Démarrer l'application
CMD ["./start_production.sh"]