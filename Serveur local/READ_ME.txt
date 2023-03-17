Installation d'un serveur local pour un site web.

0 - Installer Node.js et npm

1 - Configuration des bases dans un dossier "package.json" en utilisant la commande :
    
        npm init -y

    Commande qui initialyse le dossier en répondant automatiquement oui à toutes les questions de configurations spécifiquefa-spin

2 - Installation du package Express en utilisant la commande :

        npm install
        npm install express

3 - Création du fichier app.js contenant :

        const express = require('express');
        const app = express();

        // Serve les fichiers statiques à partir du dossier "public"
            app.use(express.static('public'));

        // Définit la route pour la page d'accueil
            app.get('/', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
            });

        // Lancement du serveur
            app.listen(3000, () => {
            console.log('Le serveur est lancé sur le port 3000');
            });

4 - Création du dossier "public" contenant tous les dossiers et fichiers du site web

5 - Création du fichier"index.html". Le dossier contiendra les bases soit ceci :

        <!DOCTYPE html>
            <html lang="fr"> 
                <head>
                <meta charset="UTF-8" />
                <title>Squelette</title>
                <meta name="author" content="MOIO"/>
                <meta name="keywords" content="TEST"/>
                <meta name="description" content="Squelette"/>
                </head>
                <body>
                    
                </body>
            </html>

6 - Lancer le serveur avec la commande :

        node app.js

7 - Ouvrir le site web :

	http://localhost:3000