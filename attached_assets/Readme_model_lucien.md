# README du modèle : model_lucien_v1.pkl

Ce fichier README fournit des informations sur les caractéristiques d'entrée, leurs types de données et la sortie du modèle `model_lucien_v1.pkl`. Ce modèle permet de prédire le "Stage de l'IRC" (Stade de la Maladie Rénale Chronique).

## Caractéristiques d'entrée

Le modèle attend un DataFrame Pandas en entrée avec les colonnes suivantes. Assurez-vous que les types de données correspondent à ceux spécifiés ci-dessous.

* **Créatinine (mg/L) :** Numérique (float)  
  Valeur représentant la concentration de créatinine dans le sang en milligrammes par litre.

* **Urée (g/L) :** Numérique (float)  
  Valeur représentant la concentration d'urée dans le sang en grammes par litre.

* **Âge :** Numérique (entier)  
  L'âge du patient, exprimé en années.

* **Na^+ (meq/L) :** Numérique (float)  
  La concentration de sodium dans le sang en milléquivalents par litre.

* **TA (mmHg)/Systole :** Numérique (float)  
  La pression artérielle systolique en millimètres de mercure (mmHg).

* **Choc de Pointe/Perçu :** Numérique (entier)  
  Représente la présence de choc, probablement 0 ou 1.

* **Score de Glasgow (/15) :** Numérique (entier)  
  Score de Glasgow pour évaluer l'état neurologique, avec une échelle de 0 à 15.

* **Sexe_M :** Numérique (entier, 0 ou 1)  
  Représentation encodée en one-hot du sexe du patient : 1 pour homme, 0 pour femme.

* **Anémie_True :** Numérique (entier, 0 ou 1)  
  Indique la présence d'anémie : 1 si présente, 0 sinon.

* **Enquête Sociale/Tabac_True :** Numérique (entier, 0 ou 1)  
  Indique si le patient utilise du tabac : 1 si oui, 0 sinon.

* **Enquête Sociale/Alcool_True :** Numérique (entier, 0 ou 1)  
  Indique si le patient consomme de l'alcool : 1 si oui, 0 sinon.

## Sortie

Le modèle prédit le "Stage de l'IRC". Les valeurs possibles en sortie sont les mêmes que celles présentes dans les données d'entraînement. Ce sont des valeurs catégorielles (entiers) représentant les stades de la maladie rénale chronique. La numérotation des stades n'est pas spécifiée ici, mais elle est présente dans le jeu de données d'entraînement.

## Exemple d'utilisation (Python)

```python
import pandas as pd
import pickle

# Charger le modèle
with open('model_lucien_v1.pkl', 'rb') as file:
    model = pickle.load(file)

# Exemple de données d'entrée
data = {
    'Créatinine (mg/L)': [1.5],
    'Urée (g/L)': [0.8],
    'Âge': [45],
    'Na^+ (meq/L)': [140],
    'TA (mmHg)/Systole': [120],
    'Choc de Pointe/Perçu': [0],
    'Score de Glasgow (/15)': [13],
    'Sexe_M': [1],
    'Anémie_True': [1],
    'Enquête Sociale/Tabac_True': [0],
    'Enquête Sociale/Alcool_True': [1]
}

# Créer un DataFrame pandas
df = pd.DataFrame(data)

# Faire une prédiction
prediction = model.predict(df)

# Afficher la prédiction
print(f"Le stage de l'IRC prédit est : {prediction[0]}")
```

