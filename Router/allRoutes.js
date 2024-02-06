import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/services", "Services", "./pages/services.html", "./js/services.js"),
    new Route("/occasions", "Occasions", "/pages/occasions.html", "./js/occasions.js"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/avis", "Avis", "/pages/avis.html"),
    new Route("/mod", "Modération", "/pages/mod.html"),
];

export const websiteName = "Garage Parrot";