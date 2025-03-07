Task List CRUD
Task List CRUD est une application simple de gestion de tâches qui permet d'effectuer les opérations CRUD (Create, Read, Update, Delete). Développée avec Node.js et Express.js, elle stocke les données en mémoire (array) et peut être testée avec Postman.

Fonctionnalités
Ajouter une nouvelle tâche
Consulter la liste des tâches
Mettre à jour une tâche existante
Supprimer une tâche
API RESTful avec Node.js et Express.js
Technologies utilisées
Node.js
Express.js
Postman (pour les tests de l'API)
Installation et utilisation
Cloner le dépôt :

bash
Copier
Modifier
git clone https://github.com/Walker65/taskListCrud.git
cd taskListCrud
Installer les dépendances :

bash
Copier
Modifier
npm install
Lancer le serveur :

bash
Copier
Modifier
node server.js
(ou avec Nodemon si installé : npx nodemon server.js)

Tester l'API avec Postman

GET /tasks → Récupère toutes les tâches
POST /tasks → Ajoute une nouvelle tâche
PUT /tasks/:id → Modifie une tâche existante
DELETE /tasks/:id → Supprime une tâche