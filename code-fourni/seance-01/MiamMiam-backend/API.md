# API MiamMiam


## GET /recipes

- Description : Récupère toutes les recettes
- Réponses :
  - 200 : Succès
    - Body : Liste de toutes les recettes

## GET /recipes/:id

- Description : Récupère une recette par son id
- Réponses :
  - 200 : Succès
    - Body : la recettes
  - 400 : donnée fournie invalide

## POST /recipes

- Description : Crée une nouvelle recette
- Body : Nouvelle recette à créer
- Réponses :
  - 201 : Recette créée
    - Body : Recette créée avec son ID
