export const ProjectsData = [
  {
    id: 1,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019809/principal1_xlgvvu.png",
    name: "Hoy No Cocino",
    description: {
      en: "Platform to simplify restaurant reservation management.",
      es: "Plataforma para simplificar la gestión de reservas en restaurantes.",
    },
    details: {
      fullDescription: {
        en: "Web application designed to simplify restaurant reservation management, offering users a full experience to sign up, book tables, and manage their preferences in real-time. Additionally, restaurants have an admin panel to manage availability, customer data, and reservations.",
        es: "Aplicación web diseñada para simplificar la gestión de reservas en restaurantes, con una experiencia de usuario completa que permite a los usuarios registrarse, reservar mesas, y gestionar sus preferencias en tiempo real. Además, los restaurantes cuentan con un panel de administración para gestionar disponibilidad, datos de clientes y reservas.",
      },
      tecnologiasUsadas: {
        en: "The app uses React.js for the user interface and Flask as a backend framework, connected to a PostgreSQL database managed with SQLAlchemy. Images are handled with Cloudinary, and user authentication is performed with JWT. For responsive design, Bootstrap is employed, and interactive notifications use SweetAlert2. Additionally, Flask-Mail is implemented for email functionality, and React Hooks manage frontend state effectively.",
        es: "La aplicación utiliza React.js para la interfaz de usuario y Flask como framework backend, conectándose a una base de datos PostgreSQL gestionada con SQLAlchemy. Las imágenes se manejan con Cloudinary, y la autenticación de usuarios se realiza mediante JWT. Para el diseño responsivo se emplea Bootstrap, y las notificaciones interactivas utilizan SweetAlert2. Además, se implementa Flask-Mail para correos electrónicos y React Hooks para la gestión del estado en el frontend.",
      },
      tools: [
        "Python",
        "React.js",
        "PostgreSQL",
        "Flask",
        "SQLAlchemy",
        "Cloudinary",
        "JWT",
        "Flask-Mail",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019746/bienvenidacliente_otjilj.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019759/Area_privada_restaurante_z3en9a.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732026550/search_restaurant_nnlp2k.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019772/reserva_oxoiff.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019791/sweet_alert_mfdio5.png",
      ],
    },
    projectUrl: "https://hoynococino.es",
    repoUrl: "https://github.com/Nelvb/Proyecto-Hoy-No-Cocino",
  },
  {
    id: 2,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
    name: "ToDo List",
    description: {
      en: "Simple application to efficiently manage tasks.",
      es: "Aplicación simple para gestionar tareas de manera eficiente.",
    },
    details: {
      fullDescription: {
        en: "This application allows users to manage their daily tasks. It includes functionalities like adding, editing, and deleting tasks, with a responsive and modern design.",
        es: "Esta aplicación permite a los usuarios gestionar sus tareas diarias. Incluye funcionalidades como añadir, editar y eliminar tareas, con un diseño responsivo y moderno.",
      },
      tecnologiasUsadas: {
        en: "React.js for the frontend and Node.js for the backend. Database managed with MongoDB. Authentication is performed using JWT.",
        es: "React.js para el frontend y Node.js para el backend. Base de datos gestionada con MongoDB. La autenticación se realiza mediante JWT.",
      },
      tools: [
        "React.js",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
      ],
    },
    projectUrl: "https://todolist.com",
    repoUrl: "https://github.com/Nelvb/ToDo-List",
  },
  {
    id: 3,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
    name: "E-commerce",
    description: {
      en: "Online store with shopping cart and payment gateway.",
      es: "Tienda online con carrito de compras y pasarela de pago.",
    },
    details: {
      fullDescription: {
        en: "E-commerce platform that allows users to browse products, add them to their cart, and make payments. It includes inventory management and an admin panel for sellers.",
        es: "Plataforma de comercio electrónico que permite a los usuarios explorar productos, añadirlos a su carrito y realizar pagos. Incluye gestión de inventarios y panel de administración para vendedores.",
      },
      tecnologiasUsadas: {
        en: "React.js for the frontend, Flask for the backend, and PostgreSQL for the database. Stripe is integrated to process payments.",
        es: "React.js para el frontend, Flask para el backend, y PostgreSQL para la base de datos. Stripe integrado para procesar pagos.",
      },
      tools: [
        "React.js",
        "Flask",
        "PostgreSQL",
        "Stripe",
        "Cloudinary",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019733/imagen_responsive_yfy4jv.png",
      ],
    },
    projectUrl: "https://ecommerce.com",
    repoUrl: "https://github.com/Nelvb/E-commerce-Store",
  },
  {
    id: 4,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019809/principal1_xlgvvu.png",
    name: "Weather App",
    description: {
      en: "Check the weather in real-time for any location.",
      es: "Consulta el clima en tiempo real de cualquier ubicación.",
    },
    details: {
      fullDescription: {
        en: "An application that allows users to search and check the weather of different cities in real-time using an external weather API.",
        es: "Aplicación que permite a los usuarios buscar y consultar el clima de diferentes ciudades en tiempo real, utilizando una API de clima externa.",
      },
      tecnologiasUsadas: {
        en: "React.js for the user interface and consumption of the OpenWeather API. Styled with Tailwind CSS.",
        es: "React.js para la interfaz de usuario y consumo de la API de OpenWeather. Estilizado con Tailwind CSS.",
      },
      tools: [
        "React.js",
        "OpenWeather API",
        "Tailwind CSS",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732025169/principal2_qnkdfb.png",
      ],
    },
    projectUrl: "https://weatherapp.com",
    repoUrl: "https://github.com/Nelvb/Weather-App",
  },
  {
    id: 5,
    backgroundImage:
      "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019786/subidaCloudinary_hsoqqt.png",
    name: "Portfolio",
    description: {
      en: "Personal portfolio to showcase projects and skills.",
      es: "Portafolio personal para mostrar proyectos y habilidades.",
    },
    details: {
      fullDescription: {
        en: "Personal portfolio designed to showcase projects, skills, and professional experience in web development. This project uses an interactive and responsive design combining advanced animations, dynamic data consumption, and efficient deployment. It is designed to highlight skills in frontend, backend, and collaborative tools, providing intuitive and professional navigation.",
        es: "Portafolio personal diseñado para mostrar proyectos, habilidades y experiencia profesional en desarrollo web. Este proyecto utiliza un diseño interactivo y responsivo que combina animaciones avanzadas, consumo dinámico de datos y un despliegue eficiente. Está pensado para destacar habilidades en frontend, backend y herramientas colaborativas, permitiendo una navegación intuitiva y profesional.",
      },
      tecnologiasUsadas: {
        en: "React.js for creating an interactive interface with animations managed by Anime.js. The backend is implemented with Flask, providing a robust API including integration with the MailboxLayer API to validate emails and prevent unwanted registrations. Cloudinary is used for dynamic image management, while EmailJS enables contact form submission without the need for a mail server. The application is automatically deployed on GitHub Pages, using Webpack to optimize resources and ensure smooth performance.",
        es: "React.js para la creación de una interfaz interactiva con animaciones gestionadas mediante Anime.js. El backend está implementado con Flask, proporcionando una API robusta que incluye integración con la API de MailboxLayer para validar correos y evitar registros no deseados. Cloudinary se utiliza para la gestión dinámica de imágenes, mientras que EmailJS permite el envío de formularios de contacto sin necesidad de un servidor de correo. La aplicación se despliega automáticamente en GitHub Pages, utilizando Webpack para optimizar los recursos y garantizar un rendimiento fluido.",
      },
      tools: [
        "React.js",
        "Anime.js",
        "Flask",
        "EmailJS",
        "MailboxLayer API",
        "Cloudinary",
        "GitHub Pages",
        "Webpack",
      ],
      images: [
        "https://res.cloudinary.com/dy1pkrd52/image/upload/v1732019815/Registro_principal_tchatv.png",
      ],
    },
    projectUrl: "https://4geeksacademy.github.io/Nelvb-portfolio/",
    repoUrl: "https://github.com/Nelvb/Nelvb-portfolio",
  },
];
