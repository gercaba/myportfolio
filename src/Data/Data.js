import chatPage from "../Assets/Projects/chatPage.png"
import calculatorHTML from "../Assets/Projects/calculatorHTML.png"
import portfolioPicture from "../Assets/Projects/portfolioPicture.jpg"
import cssLogo from "../Assets/Logos/css-logo.png"
import hmtlLogo from "../Assets/Logos/html-logo.png"
import jsLogo from "../Assets/Logos/js-logo.png"
import nodeLogo from "../Assets/Logos/node-logo.png"
import reactLogo from "../Assets/Logos/react-logo.png"
import socketLogo from "../Assets/Logos/socket-logo.png"
import expressLogo from "../Assets/Logos/express-logo.png"
import moongoseLogo from "../Assets/Logos/moongose-logo.png"
import tailwindLogo from "../Assets/Logos/tailwind-logo.png"
import dockerLogo from "../Assets/Logos/docker-logo.png"
import todo from "../Assets/Projects/todo.png"

export const projects = [
    {
      title: "SkuadLack",
      subtitle: "Slack Clone",
      subtitleES:"Clon de Slack",
      description: "SkuadLack is a clone of Slack with its own personality that allows communication between organizations with the possibility of creating independent chats within the users of an organization or thematic channels for different users. Through the system of notifications and sending images, the user has the necessary tools for fluid and effective communication without falling into baroque elements that can divert attention from the main focus.",
      descriptionES:"SkuadLack es un clon con personalidad propia de Slack que permite la comunicación entre organizaciones teniendo la posibilidad de crear chats independientes dentro de los usuarios de una organización o canales temáticos para diferentes usuarios. Mediante el sistema de notificaciones y envío de imágenes el usuario tiene las herramientas necesarias para una comunicación fluida y efectiva sin caer en elementos barrocos que pueden desviar la atención del foco principal.",
      image: chatPage,
      link: "https://skuadlack.netlify.app/",
    },
    {
      title: "Calculator",
      subtitle: "BootCamp Challenge on HTML",
      subtitleES:"Reto en HTML del BootCamp",
      description:"Calculator developed in HTML for learning eventListeners and their subsequent simplification in React",
      descriptionES:"Calculadora desarrollada en HTML para aprender el uso de los eventListeners y su futura simplificación en React",
      image:calculatorHTML,
      link: "https://github.com/nds-fsd/reto-3-calculadora-simple-gercaba",
    },
    {
      title: "Portfolio",
      subtitle: "React portfolio",
      subtitleES:"Portfolio en React",
      description:
      "PortFolio develope on react using Context for darkMode and lenguage.",
      descriptionES:"Desarrollando haciendo uso de un Contexto para el idioma y el tema oscuro.",
      image: portfolioPicture,
      link: "https://github.com/gercaba/portofolio",
    },
    {
      title: "Todo App",
      subtitle: "Backend + Frontend",
      subtitleES:"Backend + Frontend",
      description:
      "Developed as a challenge during BootCamp that includes end-to-end development. Necessary to pull up Docker.",
      descriptionES:"Desarrollada como reto durante el BootCamp que incluye un desarrollo integral. Necesario levantar el Docker.",
      image: todo,
      link: "https://github.com/gercaba/todo",
    },
   
  ];


  export const skills = [
    "React",
    "NodeJS",
    "Express",
    "Moongose",
    "Socket.IO",
    "Mailgun",
    "JWT",
    "CSS",
    "Tailwind",
    "JavaScript",
    "HMTL",
    
  ]

  export const skillsWhitLogo = [
    {
      title:"React",
      logo:reactLogo
    },
    {
      title:"NodeJS",
      logo:nodeLogo
    },
    {
      title:  "Express",
      logo:expressLogo
    },
    {
      title:"Moongose",
      logo:moongoseLogo
    },
    {
      title:"Socket.IO",
      logo:socketLogo
    },
    {
      title:"CSS",
      logo:cssLogo
    },
    {
      title:"Tailwind",
      logo:tailwindLogo
    },
    {
      title: "JavaScript",
      logo:jsLogo
    },
    {
      title:"HMTL",
      logo:hmtlLogo
    },
    {
      title:"Docker",
      logo:dockerLogo
    },     
  ]