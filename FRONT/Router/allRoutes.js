import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "./js/home.js", ""),
    new Route("/connexion", "Connexion", "/pages/connexion.html", "./js/connexion.js", ""),
    new Route("/services", "Services", "./pages/services.html", "./js/services.js", ""),
    new Route("/occasions", "Occasions", "/pages/occasions.html", "./js/occasions.js",""),
    new Route("/contact", "Contact", "/pages/contact.html", ""),
    new Route("/temoignages", "Avis", "/pages/temoignages.html", "./js/temoignages.js", ""),
    new Route("/mod", "Modération", "/pages/mod.html", "./js/mod.js", "ROLE_USER"),
    new Route("/users", "Nouvel employé", "/pages/users.html", "./js/users.js", "ROLE_ADMIN")
]

export const websiteName = "Garage Parrot";