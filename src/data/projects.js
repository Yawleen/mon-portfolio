import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    iconName: "shopping-bag",
    image: "../projects_img/bubulle_project.png",
    name: "Bubulle",
    description:
      "Création d’un site de commande pour les bornes d’un café/restaurant fictif qui vend des banh mis et des bubble tea.",
    date: "Février 2023",
    mainFeatures: [
      "Affichage des produits",
      "Affichage de la fiche produit",
      "Personnalisation d’un produit",
      "Intégration d’un panier",
      "Intégration d’une page de paiement",
    ],
    tech: [
      {
        icon: {
          name: "react",
          color: "#82e3ff",
        },
        name: "ReactJS",
      },
    ],
    link: "https://mariaguyde.github.io/bubble_project/",
    github: "https://github.com/mariaguyde/bubble_project",
  },
  {
    id: uuidv4(),
    iconName: "sliders",
    image: "../projects_img/linear_gradient_generator_project.png",
    name: "Générateur CSS de dégradé linéaire",
    description:
      "Un outil pour développeurs qui permet de créer et visualiser instantanément de jolis dégradés pour des sites ou applications.",
    date: "Mai 2022",
    mainFeatures: [
      "Sélection de couleurs aléatoires ou saisie des couleurs principales (valeurs hexadécimales)",
      "Option pour ajouter ou supprimer des couleurs",
      "Choix de l’angle du dégradé",
      "Prévisualisation instantanée des changements",
      "Génération automatique du code CSS",
      "Exportation du CSS généré",
    ],
    tech: [
      {
        icon: {
          name: "html",
          color: "#dd4b25",
        },
        name: "HTML",
      },
      {
        icon: {
          name: "css",
          color: "#3293d8",
        },
        name: "CSS",
      },
      {
        icon: {
          name: "js",
          color: "#f0db4f",
        },
        name: "JavaScript",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-javascript/generateur-css-linear-gradient/linear-gradient-app.html",
    github:
      "https://github.com/Yawleen/site-portfolio/tree/main/projets/projets-javascript/generateur-css-linear-gradient",
  },
  {
    id: uuidv4(),
    iconName: "image",
    image: "../projects_img/image_style_generator_project.png",
    name: "Générateur CSS pour la stylisation d’images",
    description:
      "Un autre outil pour développeurs, utile pour styliser les images.",
    date: "Mai 2022",
    mainFeatures: [
      "Importation d’une image par drag and drop ou sélection depuis un dossier",
      "Récupération d’image aléatoire",
      "Application de divers filtres (sépia, contraste, saturation, opacité...) et de propriétés CSS (border-radius, transform...)",
      "Prévisualisation instantanée des changements",
      "Génération automatique du code CSS",
      "Exportation du CSS généré",
    ],
    tech: [
      {
        icon: {
          name: "html",
          color: "#dd4b25",
        },
        name: "HTML",
      },
      {
        icon: {
          name: "css",
          color: "#3293d8",
        },
        name: "CSS",
      },
      {
        icon: {
          name: "js",
          color: "#f0db4f",
        },
        name: "JavaScript",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-javascript/generateur-css-style-img/generateur-css-style-img.html",
    github:
      "https://github.com/Yawleen/site-portfolio/tree/main/projets/projets-javascript/generateur-css-style-img",
  },
  {
    id: uuidv4(),
    iconName: "thermometer",
    image: "../projects_img/weather_app_project.png",
    name: "Application météo",
    description:
      "Une application météo pour voir le temps qu’il fait où vous êtes ou dans la ville de votre choix.",
    date: "Avril 2022",
    mainFeatures: [
      "Détection automatique de la position de l’utilisateur",
      "Récupération des prévisions météo locales",
      "Recherche de ville",
      "Récupération des prévisions météo pour la ville recherchée",
      "Affichage de la température",
    ],
    tech: [
      {
        icon: {
          name: "html",
          color: "#dd4b25",
        },
        name: "HTML",
      },
      {
        icon: {
          name: "css",
          color: "#3293d8",
        },
        name: "CSS",
      },
      {
        icon: {
          name: "js",
          color: "#f0db4f",
        },
        name: "JavaScript",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-javascript/application-meteo/application-meteo.html",
    github:
      "https://github.com/Yawleen/site-portfolio/tree/main/projets/projets-javascript/application-meteo",
  },
  {
    id: uuidv4(),
    iconName: "code",
    image: "../projects_img/IDE_project.png",
    name: "IDE Web",
    description: "Un IDE Web pour éditer du code HTML, CSS et JavaScript.",
    date: "Mars 2025",
    mainFeatures: [
      "Écriture, édition et modification du code HTML, CSS et JavaScript",
      "Affichage instantané des résultats dans une fenêtre de prévisualisation",
    ],
    tech: [
      {
        icon: {
          name: "react",
          color: "#82e3ff",
        },
        name: "ReactJS",
      },
      {
        icon: {
          name: "redux",
          color: "#7a50be",
        },
        name: "Redux",
      },
      {
        icon: {
          name: "tailwindcss",
          color: "#3ab7f0",
        },
        name: "TailwindCSS",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-react/SmartIDE/",
    github: "https://github.com/Yawleen/SmartIDE",
  },
  {
    id: uuidv4(),
    iconName: "edit",
    image: "../projects_img/Notes101_project.png",
    name: "Notes101",
    description: "Une application Web pour gérer facilement des notes.",
    date: "Mars 2025",
    mainFeatures: [
      "Création de notes",
      "Consultation des notes existantes",
      "Modification des notes",
      "Suppression des notes"
    ],
    tech: [
      {
        icon: {
          name: "react",
          color: "#82e3ff",
        },
        name: "ReactJS",
      },
      {
        icon: {
          name: "redux",
          color: "#7a50be",
        },
        name: "Redux",
      },
      {
        icon: {
          name: "tailwindcss",
          color: "#3ab7f0",
        },
        name: "TailwindCSS",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-react/Notes101/",
    github: "https://github.com/Yawleen/Notes101",
  },
  {
    id: uuidv4(),
    iconName: "shopping-cart",
    image: "../projects_img/mini_e-commerce_project.png",
    name: "Mini E-commerce",
    description: "Un mini E-commerce",
    date: "Mars 2025",
    mainFeatures: [
        "Visualisation des produits",
        "Ajout de produits au panier",
        "Modification de la quantité des produits",
        "Suppression de produits du panier"
    ],
    tech: [
      {
        icon: {
          name: "react",
          color: "#82e3ff",
        },
        name: "ReactJS",
      },
      {
        icon: {
          name: "redux",
          color: "#7a50be",
        },
        name: "Redux",
      },
      {
        icon: {
          name: "tailwindcss",
          color: "#3ab7f0",
        },
        name: "TailwindCSS",
      },
    ],
    link: "https://yawleen.github.io/site-portfolio/projets/projets-react/Mini-E-commerce/",
    github: "https://github.com/Yawleen/Mini-E-commerce",
  },
];
