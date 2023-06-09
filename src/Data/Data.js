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
import botTelegram from "../Assets/Projects/botTelegram.png"

export const projects = [
    {
      title: "SkuadLack",
      subtitle: "Slack Clone",
      subtitleES:"Clon de Slack",
      description: "SkuadLack is a clone of Slack with its own personality that allows communication between organizations with the possibility of creating independent chats within the users of an organization or thematic channels for different users. Through a system of notifications and sending images, the user has the necessary tools for fluid and effective communication without falling into baroque elements that can divert attention from the main focus.",
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
      title: "My portfolio",
      subtitle: "React portfolio",
      subtitleES:"Portfolio en React",
      description:
      "Developed on React using Context for darkMode and lenguage. Also with Tailwind and DaisyUI",
      descriptionES:"Desarrollando en React haciendo uso de un Contexto para el idioma y el tema oscuro. También con Tailwind y DaisyUI",
      image: portfolioPicture,
      link: "https://github.com/gercaba/portofolio",
    },
    {
      title: "To-do App",
      subtitle: "Backend + Frontend",
      subtitleES:"Backend + Frontend",
      description:"Developed as a challenge during BootCamp, it includes end-to-end development.",
      descriptionES:"Desarrollada como reto durante el BootCamp que incluye un desarrollo integral.",
      image: todo,
      link: "https://github.com/gercaba/todo",
    },
    {
      title: "Telegram Bot",
      subtitle: "Developed at the Bootcamp Hackathon",
      subtitleES:"Desarrollado en la hackathon del Bootcamp",
      description:"Project done at the Nuclio hackathon aimed to design a Telegram bot and a web page to be able to order food based on a menu varietes and manage them (pending | done) in the front. The project was done with a partner and we achieved 100% of the goal.",
      descriptionES:"Proyecto realizado en la hackathon de Nuclio que tenía como objetivo diseñar un bot de Telegram y una página web para poder pedir pedidos de comida en función de una variedad de menú y gestionar los mismos (pendiente | realizado) desde el front. El proyecto fue realizado con un compañero y conseguimos el 100% del objetivo.",
      image: botTelegram,
      link: "https://github.com/gercaba/hackathon-telegramBot",
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