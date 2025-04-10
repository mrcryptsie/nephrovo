# NéphroPredict - Application de prédiction des stades d'IRC

Une application médicale élégante qui prédit les stades de l'Insuffisance Rénale Chronique (IRC) en utilisant FastAPI et React.

## Caractéristiques

- Interface utilisateur élégante et responsive
- Modèle de prédiction basé sur l'algorithme RandomForest
- Visualisation avancée des résultats de prédiction
- Export des résultats au format PDF
- Description détaillée des stades IRC
- Informations sur le modèle et ses métriques de performance
- Fonction de benchmark comparant notre modèle à d'autres

## Technologies utilisées

- **Backend:** FastAPI, Python, scikit-learn
- **Frontend:** React, TailwindCSS, shadcn/ui
- **Outils:** Vite, TypeScript, Zod pour la validation

## Structure du projet

```
├── attached_assets      # Modèle ML et données associées
├── client               # Code source frontend React
├── server
│   ├── fastapi          # API backend Python
│   └── ...              # Autres fichiers serveur
├── shared               # Types et schémas partagés
├── build.sh             # Script de build pour la production
└── start_production.sh  # Script de démarrage en production
```

## Prérequis

- Node.js 16+
- Python 3.8+
- npm ou yarn

## Déploiement local

### Développement

1. Cloner le dépôt:
   ```bash
   git clone https://github.com/votre-utilisateur/nephropredict.git
   cd nephropredict
   ```

2. Installer les dépendances:
   ```bash
   npm install
   pip install -r server/fastapi/requirements.txt
   ```

3. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

### Production

1. Build de l'application:
   ```bash
   bash build.sh
   ```

2. Démarrer en production:
   ```bash
   cd dist
   bash start_production.sh
   ```

## Options de déploiement

### Variables d'environnement

- `PORT` - Port du serveur (défaut: 8000)
- `HOST` - Hôte du serveur (défaut: 0.0.0.0)
- `WORKERS` - Nombre de workers Gunicorn (défaut: 4)

### Déploiement sur Render.com

1. Créez un nouveau service Web
2. Reliez votre dépôt GitHub
3. Choisissez "Python" comme environnement
4. Définissez la commande de build:
   ```
   bash build.sh
   ```
5. Définissez la commande de démarrage:
   ```
   bash start_production.sh
   ```

### Déploiement sur Heroku

1. Créez une application Heroku:
   ```bash
   heroku create nephropredict
   ```

2. Créez un fichier `Procfile` à la racine du projet:
   ```
   web: bash start_production.sh
   ```

3. Déployez:
   ```bash
   git push heroku main
   ```

### Déploiement avec Docker

1. Construisez l'image:
   ```bash
   docker build -t nephropredict .
   ```

2. Exécutez le conteneur:
   ```bash
   docker run -p 8000:8000 nephropredict
   ```

## Utilisation de l'API

L'API est disponible à l'adresse: `http://your-server:8000/`

### Endpoints principaux:

- `GET /` - Page d'accueil
- `POST /predict` - Faire une prédiction
  ```json
  {
    "Créatinine (mg/L)": 42.0,
    "Urée (g/L)": 1.14,
    "Age": 68,
    "Na^+ (meq/L)": 142.0,
    "TA (mmHg)/Systole": 130.0,
    "Choc de Pointe/Perçu": 0,
    "Sexe_M": 1,
    "Anémie_True": 1,
    "Score de Glasgow (/15)": 15.0,
    "Enquête Sociale/Tabac_True": 0,
    "Enquête Sociale/Alcool_True": 1
  }
  ```

## Licence

MIT