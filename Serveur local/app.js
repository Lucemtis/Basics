const express = require('express');
const app = express();

// Serve les fichiers statiques à partir du dossier "public"
app.use(express.static('public'));

// Définit la route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.php');
});

// Lancement du serveur
app.listen(3000, () => {
  console.log('Le serveur est lancé sur le port 3000');
});