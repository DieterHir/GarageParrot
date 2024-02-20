# Garage Parrot

Site web / e-commerce d'un garage pour le projet ECF 2024

# Execution locale

· Telechargez les projets front et back depuis GitHub:
    · Ayant au départ travaillé avec un dépôt front et un dépôt back séparé, je les ai rassemblé dans ce dépôt, en créant un dossier BACK et FRONT -> n'oubliez pas de les extraire dans les dossiers adéquats de votre système
· Depuis le .env du dossier back-end, modifiez les login/password ainsi que l'url, le port et le nom de la base de données (nomDB) en fonction de ce que vous avez choisi au moment de sa création
· Utiliser la commande "php bin/console d:m:m" pour recréer les tables de la base de données, l'utilisateur par défaut sera également créé (login: v.parrot@gmail.com / mdp: vparrot) avec les roles ROLE_USER et ROLE_ADMIN. Celui-ci est modifiable directement via la gestion des employés, sur le site.
· Dans le terminal, entrez la commande "symfony server:start" et rendez-vous sur l'URL indiquée en réponse (127.0.0.1: suivi du port)